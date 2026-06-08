"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MCQS } from "@/data/mcqs";
import type { MCQ } from "@/data/types";
import { DOMAINS } from "@/data/domains";
import { shuffle } from "@/lib/shuffle";
import { useLanguage } from "@/lib/language";
import { useProgress } from "@/lib/progress";
import { DomainFilter, type DomainValue } from "./DomainFilter";
import { SearchBar } from "./SearchBar";
import { DomainBadge, ServiceTags } from "./DomainBadge";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
type Source = "all" | "bookmarked" | "incorrect";

function matchSearch(m: MCQ, q: string) {
  if (!q) return true;
  const hay = (
    m.question +
    " " +
    m.options.join(" ") +
    " " +
    m.services.join(" ")
  ).toLowerCase();
  return hay.includes(q.toLowerCase());
}

function isCorrectSelection(sel: number[], correct: number[]) {
  return sel.length === correct.length && sel.every((s) => correct.includes(s));
}

export function QuizMode() {
  const { showAr } = useLanguage();
  const { state, recordMcq, toggleBookmark } = useProgress();

  const [source, setSource] = useState<Source>("all");
  const [domain, setDomain] = useState<DomainValue>("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<MCQ[]>(() => MCQS);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({ answered: 0, correct: 0 });

  const bookmarkCount = Object.keys(state.bookmarks).length;
  const incorrectCount = Object.values(state.mcq).filter((v) => v === false).length;

  // Rebuild working set when filters/source change (deterministic — no SSR mismatch).
  useEffect(() => {
    const next = MCQS.filter((m) => {
      if (source === "bookmarked" && !state.bookmarks[m.id]) return false;
      if (source === "incorrect" && state.mcq[m.id] !== false) return false;
      if (domain !== "all" && m.domain !== domain) return false;
      return matchSearch(m, search);
    });
    setItems(next);
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
    setStats({ answered: 0, correct: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain, search, source]);

  const counts = useMemo(() => {
    const base = MCQS.filter((m) => {
      if (source === "bookmarked" && !state.bookmarks[m.id]) return false;
      if (source === "incorrect" && state.mcq[m.id] !== false) return false;
      return matchSearch(m, search);
    });
    const c: Record<string, number> = { all: base.length };
    for (const d of DOMAINS) c[d.id] = base.filter((m) => m.domain === d.id).length;
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, source]);

  const current = items[index];
  const bookmarked = current ? !!state.bookmarks[current.id] : false;

  const reshuffle = () => {
    setItems((prev) => shuffle(prev));
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
    setStats({ answered: 0, correct: 0 });
  };

  const pick = useCallback(
    (i: number) => {
      if (submitted || !current) return;
      if (i >= current.options.length) return;
      if (current.type === "single") setSelected([i]);
      else
        setSelected((prev) =>
          prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );
    },
    [submitted, current]
  );

  const submit = useCallback(() => {
    if (!current || selected.length === 0 || submitted) return;
    const correct = isCorrectSelection(selected, current.correct);
    setSubmitted(true);
    setStats((s) => ({
      answered: s.answered + 1,
      correct: s.correct + (correct ? 1 : 0),
    }));
    recordMcq(current.id, correct);
  }, [current, selected, submitted, recordMcq]);

  const next = useCallback(() => {
    setSelected([]);
    setSubmitted(false);
    setIndex((i) => Math.min(i + 1, items.length - 1));
  }, [items.length]);

  const prev = useCallback(() => {
    setSelected([]);
    setSubmitted(false);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      const k = e.key.toLowerCase();
      const letterIdx = LETTERS.findIndex((l) => l.toLowerCase() === k);
      const numIdx = /^[1-6]$/.test(k) ? parseInt(k, 10) - 1 : -1;
      const idx = letterIdx >= 0 ? letterIdx : numIdx;
      if (idx >= 0) {
        pick(idx);
        e.preventDefault();
      } else if (k === "enter") {
        if (!submitted) submit();
        else next();
        e.preventDefault();
      } else if (k === "arrowright") {
        next();
        e.preventDefault();
      } else if (k === "arrowleft") {
        prev();
        e.preventDefault();
      } else if (k === "b" && current) {
        toggleBookmark(current.id);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pick, submit, next, prev, submitted, current, toggleBookmark]);

  const correct = current ? isCorrectSelection(selected, current.correct) : false;

  const sources: { id: Source; label: string; n: number }[] = [
    { id: "all", label: "All", n: MCQS.length },
    { id: "bookmarked", label: "★ Bookmarked", n: bookmarkCount },
    { id: "incorrect", label: "↻ Incorrect", n: incorrectCount },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {sources.map((s) => (
          <button
            key={s.id}
            onClick={() => setSource(s.id)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
              source === s.id
                ? "border-brand bg-brand/15 text-brand"
                : "border-slate-200 text-slate-500 hover:border-brand dark:border-navy-700 dark:text-slate-400"
            }`}
          >
            {s.label} ({s.n})
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <SearchBar value={search} onChange={setSearch} />
        <DomainFilter value={domain} onChange={setDomain} counts={counts} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="text-slate-500 dark:text-slate-400">
          {items.length > 0 ? (
            <>
              Question{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {index + 1}
              </span>{" "}
              of {items.length}
            </>
          ) : (
            "No questions match your filters."
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium dark:bg-navy-800">
            Score: {stats.correct}/{stats.answered}
          </span>
          <button
            onClick={reshuffle}
            className="rounded-md border border-slate-200 px-3 py-1 font-medium hover:border-brand dark:border-navy-700"
          >
            ⤮ Shuffle
          </button>
        </div>
      </div>

      {current && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-navy-800 dark:bg-navy-900">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <DomainBadge domain={current.domain} />
            {current.type === "multi" && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                Multiple answers
              </span>
            )}
            {current.difficulty && (
              <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] capitalize text-slate-500 dark:border-navy-700 dark:text-slate-400">
                {current.difficulty}
              </span>
            )}
            <button
              onClick={() => toggleBookmark(current.id)}
              title="Bookmark (B)"
              className={`ml-auto rounded-md px-2 py-0.5 text-sm transition ${
                bookmarked
                  ? "text-brand"
                  : "text-slate-300 hover:text-brand dark:text-slate-600"
              }`}
            >
              {bookmarked ? "★" : "☆"}
            </button>
          </div>

          <p className="mb-4 text-[15px] font-medium leading-relaxed">
            {current.question}
          </p>

          <div className="space-y-2">
            {current.options.map((opt, i) => {
              const isSel = selected.includes(i);
              const isAns = current.correct.includes(i);
              let cls =
                "border-slate-200 bg-white hover:border-brand dark:border-navy-700 dark:bg-navy-950";
              if (submitted) {
                if (isAns) cls = "border-green-500 bg-green-50 dark:bg-green-500/10";
                else if (isSel) cls = "border-red-500 bg-red-50 dark:bg-red-500/10";
                else cls = "border-slate-200 opacity-70 dark:border-navy-700";
              } else if (isSel) {
                cls = "border-brand bg-brand/10";
              }
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={submitted}
                  className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${cls}`}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                    {LETTERS[i]}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {submitted && isAns && <span className="text-green-600">✓</span>}
                  {submitted && isSel && !isAns && (
                    <span className="text-red-600">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {!submitted ? (
            <button
              onClick={submit}
              disabled={selected.length === 0}
              className="mt-4 rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-navy-950 transition enabled:hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit answer
            </button>
          ) : (
            <div className="mt-4 space-y-3">
              <div
                className={`rounded-xl border p-4 ${
                  correct
                    ? "border-green-500/40 bg-green-50 dark:bg-green-500/10"
                    : "border-red-500/40 bg-red-50 dark:bg-red-500/10"
                }`}
              >
                <p className="mb-1 text-sm font-bold">
                  {correct ? "✓ Correct" : "✗ Not quite"} — Answer:{" "}
                  {current.correct.map((c) => LETTERS[c]).join(", ")}
                </p>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {current.explanationEn}
                </p>
                {showAr && (
                  <p className="ar mt-2 border-t border-black/5 pt-2 text-sm leading-loose text-slate-700 dark:border-white/10 dark:text-slate-200">
                    {current.explanationAr}
                  </p>
                )}
              </div>

              {current.whyWrongEn && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-navy-700 dark:bg-navy-950">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Why the other options are wrong
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {current.whyWrongEn}
                  </p>
                  {showAr && current.whyWrongAr && (
                    <p className="ar mt-2 border-t border-black/5 pt-2 text-sm leading-loose text-slate-700 dark:border-white/10 dark:text-slate-200">
                      {current.whyWrongAr}
                    </p>
                  )}
                </div>
              )}
              <ServiceTags services={current.services} />
            </div>
          )}
        </div>
      )}

      {items.length > 0 && (
        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            disabled={index === 0}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium disabled:opacity-40 dark:border-navy-700"
          >
            ← Previous
          </button>
          <span className="hidden text-xs text-slate-400 sm:block">
            Keys: A–E select · Enter submit/next · ←/→ navigate · B bookmark
          </span>
          <button
            onClick={next}
            disabled={index >= items.length - 1}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-navy-700"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
