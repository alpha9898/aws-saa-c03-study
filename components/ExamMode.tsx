"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MCQS } from "@/data/mcqs";
import type { MCQ } from "@/data/types";
import { domainById } from "@/data/domains";
import { shuffle } from "@/lib/shuffle";
import { useLanguage } from "@/lib/language";
import { useProgress } from "@/lib/progress";
import { DomainBadge } from "./DomainBadge";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const PLAN: { id: MCQ["domain"]; n: number }[] = [
  { id: "security", n: 20 },
  { id: "resilient", n: 17 },
  { id: "performance", n: 16 },
  { id: "cost", n: 12 },
];
const TOTAL = PLAN.reduce((a, p) => a + p.n, 0); // 65
const SECONDS = 130 * 60;

type Phase = "intro" | "running" | "done";

function buildExam(): MCQ[] {
  const out: MCQ[] = [];
  for (const p of PLAN) {
    const pool = shuffle(MCQS.filter((m) => m.domain === p.id));
    out.push(...pool.slice(0, p.n));
  }
  return shuffle(out);
}

function isCorrect(sel: number[] | undefined, correct: number[]) {
  return !!sel && sel.length === correct.length && sel.every((s) => correct.includes(s));
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function ExamMode() {
  const { showAr } = useLanguage();
  const { recordMcqBatch } = useProgress();

  const [phase, setPhase] = useState<Phase>("intro");
  const [exam, setExam] = useState<MCQ[]>([]);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [flags, setFlags] = useState<Record<number, boolean>>({});
  const [idx, setIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS);
  const [reviewOpen, setReviewOpen] = useState<Record<number, boolean>>({});

  const start = () => {
    setExam(buildExam());
    setAnswers({});
    setFlags({});
    setIdx(0);
    setSecondsLeft(SECONDS);
    setReviewOpen({});
    setPhase("running");
  };

  const finish = useCallback(() => {
    setPhase("done");
    setExam((cur) => {
      setAnswers((ans) => {
        const batch: Record<string, boolean> = {};
        cur.forEach((q, i) => {
          batch[q.id] = isCorrect(ans[i], q.correct);
        });
        recordMcqBatch(batch);
        return ans;
      });
      return cur;
    });
  }, [recordMcqBatch]);

  // countdown
  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "running" && secondsLeft === 0) finish();
  }, [phase, secondsLeft, finish]);

  const current = exam[idx];

  const pick = useCallback(
    (i: number) => {
      if (phase !== "running" || !current || i >= current.options.length) return;
      setAnswers((prev) => {
        const cur = prev[idx] ?? [];
        let nextSel: number[];
        if (current.type === "single") nextSel = [i];
        else
          nextSel = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i];
        return { ...prev, [idx]: nextSel };
      });
    },
    [phase, current, idx]
  );

  const go = useCallback(
    (d: number) => setIdx((i) => Math.min(Math.max(i + d, 0), exam.length - 1)),
    [exam.length]
  );

  // keyboard
  useEffect(() => {
    if (phase !== "running") return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      const k = e.key.toLowerCase();
      const li = LETTERS.findIndex((l) => l.toLowerCase() === k);
      const ni = /^[1-6]$/.test(k) ? parseInt(k, 10) - 1 : -1;
      const i = li >= 0 ? li : ni;
      if (i >= 0) {
        pick(i);
        e.preventDefault();
      } else if (k === "arrowright") {
        go(1);
        e.preventDefault();
      } else if (k === "arrowleft") {
        go(-1);
        e.preventDefault();
      } else if (k === "f" && current) {
        setFlags((f) => ({ ...f, [idx]: !f[idx] }));
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, pick, go, current, idx]);

  const results = useMemo(() => {
    if (phase !== "done") return null;
    let correct = 0;
    const byDomain: Record<string, { c: number; t: number }> = {};
    exam.forEach((q, i) => {
      const ok = isCorrect(answers[i], q.correct);
      if (ok) correct++;
      byDomain[q.domain] ??= { c: 0, t: 0 };
      byDomain[q.domain].t++;
      if (ok) byDomain[q.domain].c++;
    });
    const pct = exam.length ? correct / exam.length : 0;
    const scaled = Math.round(100 + pct * 900);
    return { correct, total: exam.length, pct, scaled, pass: scaled >= 720, byDomain };
  }, [phase, exam, answers]);

  const answeredCount = Object.values(answers).filter((a) => a.length > 0).length;

  // ---------- INTRO ----------
  if (phase === "intro") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-navy-800 dark:bg-navy-900">
        <h2 className="text-lg font-bold">Timed mock exam</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {TOTAL} questions · {130} minutes · domain-weighted like the real
          SAA-C03 (Security 30% · Resilient 26% · Performance 24% · Cost 20%).
          No feedback until you finish. Passing ≈ 720/1000.
        </p>
        {showAr && (
          <p className="ar mt-2 text-sm text-slate-500 dark:text-slate-400">
            امتحان تجريبي بوقت: {TOTAL} سؤال في {130} دقيقة، موزّع زي الامتحان
            الحقيقي. مفيش إجابات لحد ما تخلّص. النجاح حوالي 720/1000.
          </p>
        )}
        <button
          onClick={start}
          className="mt-5 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-brand-600"
        >
          Start exam →
        </button>
      </div>
    );
  }

  // ---------- DONE ----------
  if (phase === "done" && results) {
    return (
      <div className="space-y-5">
        <div
          className={`rounded-2xl border p-6 text-center ${
            results.pass
              ? "border-green-500/40 bg-green-50 dark:bg-green-500/10"
              : "border-red-500/40 bg-red-50 dark:bg-red-500/10"
          }`}
        >
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {results.pass ? "Likely pass 🎉" : "Keep studying"}
          </div>
          <div className="mt-2 text-5xl font-extrabold">
            {Math.round(results.pct * 100)}%
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {results.correct} / {results.total} correct · scaled ≈{" "}
            <span className="font-bold">{results.scaled}</span>/1000 (pass 720)
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Scaled score is an approximation — AWS uses its own scaling.
          </p>
          <button
            onClick={start}
            className="mt-4 rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-navy-950 hover:bg-brand-600"
          >
            Take another exam
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-navy-800 dark:bg-navy-900">
          <h3 className="mb-3 font-bold">By domain</h3>
          <div className="space-y-3">
            {Object.entries(results.byDomain).map(([d, v]) => {
              const meta = domainById(d as MCQ["domain"]);
              const pct = v.t ? Math.round((v.c / v.t) * 100) : 0;
              return (
                <div key={d}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium">{meta.nameEn}</span>
                    <span style={{ color: meta.color }} className="font-bold">
                      {v.c}/{v.t} ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-navy-800">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, backgroundColor: meta.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold">Review answers</h3>
          {exam.map((q, i) => {
            const ok = isCorrect(answers[i], q.correct);
            const open = reviewOpen[i];
            return (
              <div
                key={q.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-900"
              >
                <button
                  onClick={() => setReviewOpen((o) => ({ ...o, [i]: !o[i] }))}
                  className="flex w-full items-start gap-3 p-4 text-left"
                >
                  <span className={ok ? "text-green-600" : "text-red-600"}>
                    {ok ? "✓" : "✗"}
                  </span>
                  <span className="flex-1 text-sm font-medium">
                    {i + 1}. {q.question}
                  </span>
                  <span className="text-slate-400">{open ? "−" : "+"}</span>
                </button>
                {open && (
                  <div className="space-y-2 border-t border-slate-100 px-4 pb-4 pt-3 dark:border-navy-800">
                    {q.options.map((opt, oi) => {
                      const isAns = q.correct.includes(oi);
                      const isSel = (answers[i] ?? []).includes(oi);
                      return (
                        <div
                          key={oi}
                          className={`rounded-lg border p-2 text-sm ${
                            isAns
                              ? "border-green-500 bg-green-50 dark:bg-green-500/10"
                              : isSel
                                ? "border-red-500 bg-red-50 dark:bg-red-500/10"
                                : "border-slate-200 dark:border-navy-700"
                          }`}
                        >
                          <span className="font-bold">{LETTERS[oi]}.</span> {opt}
                          {isAns && <span className="ml-1 text-green-600">✓</span>}
                          {isSel && !isAns && (
                            <span className="ml-1 text-red-600">✗ your answer</span>
                          )}
                        </div>
                      );
                    })}
                    <p className="pt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {q.explanationEn}
                    </p>
                    {showAr && (
                      <p className="ar text-sm leading-loose text-slate-700 dark:text-slate-200">
                        {q.explanationAr}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- RUNNING ----------
  if (!current) return null;
  const sel = answers[idx] ?? [];
  return (
    <div className="space-y-4">
      <div className="sticky top-14 z-10 -mx-4 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/90 px-4 py-2 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90">
        <span className="text-sm text-slate-500">
          Q {idx + 1}/{exam.length} · {answeredCount} answered
        </span>
        <span
          className={`rounded-lg px-3 py-1 font-mono text-sm font-bold ${
            secondsLeft < 300
              ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300"
              : "bg-slate-100 dark:bg-navy-800"
          }`}
        >
          ⏱ {fmt(secondsLeft)}
        </span>
        <button
          onClick={() => {
            if (confirm("Finish the exam now and see your results?")) finish();
          }}
          className="rounded-lg bg-brand px-3 py-1 text-sm font-semibold text-navy-950 hover:bg-brand-600"
        >
          Finish
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-navy-800 dark:bg-navy-900">
        <div className="mb-3 flex items-center gap-2">
          <DomainBadge domain={current.domain} />
          {current.type === "multi" && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
              Multiple answers
            </span>
          )}
          <button
            onClick={() => setFlags((f) => ({ ...f, [idx]: !f[idx] }))}
            className={`ml-auto rounded-md px-2 py-0.5 text-sm ${
              flags[idx] ? "text-amber-500" : "text-slate-300 dark:text-slate-600"
            }`}
            title="Flag (F)"
          >
            ⚑
          </button>
        </div>
        <p className="mb-4 text-[15px] font-medium leading-relaxed">
          {current.question}
        </p>
        <div className="space-y-2">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => pick(i)}
              className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${
                sel.includes(i)
                  ? "border-brand bg-brand/10"
                  : "border-slate-200 hover:border-brand dark:border-navy-700 dark:bg-navy-950"
              }`}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                {LETTERS[i]}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          disabled={idx === 0}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium disabled:opacity-40 dark:border-navy-700"
        >
          ← Prev
        </button>
        <button
          onClick={() => go(1)}
          disabled={idx >= exam.length - 1}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-navy-700"
        >
          Next →
        </button>
      </div>

      {/* Question navigator */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-navy-800 dark:bg-navy-900">
        <div className="mb-2 text-xs text-slate-400">
          Navigator — answered ● · flagged ⚑ · keys A–E · F flag · ←/→
        </div>
        <div className="grid grid-cols-10 gap-1.5 sm:grid-cols-12">
          {exam.map((_, i) => {
            const isAns = (answers[i] ?? []).length > 0;
            const isFlag = flags[i];
            return (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`relative h-8 rounded text-xs font-semibold transition ${
                  i === idx
                    ? "ring-2 ring-brand"
                    : ""
                } ${
                  isAns
                    ? "bg-brand/20 text-brand"
                    : "bg-slate-100 text-slate-500 dark:bg-navy-800 dark:text-slate-400"
                }`}
              >
                {i + 1}
                {isFlag && (
                  <span className="absolute -right-0.5 -top-1 text-[10px] text-amber-500">
                    ⚑
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
