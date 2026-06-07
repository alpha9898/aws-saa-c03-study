"use client";

import { useEffect, useMemo, useState } from "react";
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
  const { recordMcq } = useProgress();

  const [domain, setDomain] = useState<DomainValue>("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<MCQ[]>(() => MCQS);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({ answered: 0, correct: 0 });

  // Recompute the working set when filters change (deterministic — no SSR mismatch).
  useEffect(() => {
    const next = MCQS.filter(
      (m) => (domain === "all" || m.domain === domain) && matchSearch(m, search)
    );
    setItems(next);
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
    setStats({ answered: 0, correct: 0 });
  }, [domain, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: MCQS.filter((m) => matchSearch(m, search)).length,
    };
    for (const d of DOMAINS) {
      c[d.id] = MCQS.filter(
        (m) => m.domain === d.id && matchSearch(m, search)
      ).length;
    }
    return c;
  }, [search]);

  const current = items[index];

  const reshuffle = () => {
    setItems((prev) => shuffle(prev));
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
    setStats({ answered: 0, correct: 0 });
  };

  const pick = (i: number) => {
    if (submitted || !current) return;
    if (current.type === "single") {
      setSelected([i]);
    } else {
      setSelected((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    }
  };

  const submit = () => {
    if (!current || selected.length === 0) return;
    const correct = isCorrectSelection(selected, current.correct);
    setSubmitted(true);
    setStats((s) => ({
      answered: s.answered + 1,
      correct: s.correct + (correct ? 1 : 0),
    }));
    recordMcq(current.id, correct);
  };

  const next = () => {
    setSelected([]);
    setSubmitted(false);
    setIndex((i) => Math.min(i + 1, items.length - 1));
  };
  const prev = () => {
    setSelected([]);
    setSubmitted(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const correct = current ? isCorrectSelection(selected, current.correct) : false;

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <SearchBar value={search} onChange={setSearch} />
        <DomainFilter value={domain} onChange={setDomain} counts={counts} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="text-slate-500 dark:text-slate-400">
          {items.length > 0 ? (
            <>
              Question <span className="font-semibold text-slate-800 dark:text-slate-100">{index + 1}</span> of {items.length}
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
                if (isAns)
                  cls =
                    "border-green-500 bg-green-50 dark:bg-green-500/10";
                else if (isSel)
                  cls = "border-red-500 bg-red-50 dark:bg-red-500/10";
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
