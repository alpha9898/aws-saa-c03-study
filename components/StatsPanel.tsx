"use client";

import { useMemo } from "react";
import { MCQS } from "@/data/mcqs";
import { FLASHCARDS } from "@/data/flashcards";
import { DOMAINS } from "@/data/domains";
import { useProgress, computeStreak } from "@/lib/progress";

export function StatsPanel() {
  const { state } = useProgress();

  const byId = useMemo(
    () => Object.fromEntries(MCQS.map((m) => [m.id, m])),
    []
  );

  const answeredIds = Object.keys(state.mcq);
  const answered = answeredIds.length;
  const correct = answeredIds.filter((id) => state.mcq[id]).length;
  const accuracy = answered ? correct / answered : 0;
  const known = Object.values(state.flash).filter((s) => s === "known").length;
  const streak = computeStreak(state.studyDays);

  const perDomain = useMemo(() => {
    const m: Record<string, { a: number; c: number; total: number }> = {};
    for (const d of DOMAINS) m[d.id] = { a: 0, c: 0, total: 0 };
    for (const q of MCQS) m[q.domain].total++;
    for (const id of answeredIds) {
      const q = byId[id];
      if (!q) continue;
      m[q.domain].a++;
      if (state.mcq[id]) m[q.domain].c++;
    }
    return m;
  }, [answeredIds, byId, state.mcq]);

  const ready =
    answered < 25
      ? { label: "Keep practicing", color: "#64748b" }
      : accuracy >= 0.8
        ? { label: "Exam ready 🎯", color: "#16a34a" }
        : accuracy >= 0.68
          ? { label: "Almost there", color: "#e08a1e" }
          : { label: "Needs work", color: "#e0533d" };

  const tiles = [
    {
      label: "Readiness",
      value: `${Math.round(accuracy * 100)}%`,
      sub: ready.label,
      color: ready.color,
    },
    {
      label: "Day streak",
      value: `${streak}🔥`,
      sub: `${state.studyDays.length} days studied`,
    },
    {
      label: "MCQs answered",
      value: `${answered}`,
      sub: `of ${MCQS.length}`,
    },
    {
      label: "Flashcards known",
      value: `${known}`,
      sub: `of ${FLASHCARDS.length}`,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-navy-800 dark:bg-navy-900"
          >
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.label}
            </div>
            <div
              className="mt-1 text-2xl font-extrabold"
              style={t.color ? { color: t.color } : undefined}
            >
              {t.value}
            </div>
            <div className="text-xs text-slate-400">{t.sub}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-navy-800 dark:bg-navy-900">
        <h3 className="mb-3 text-sm font-bold">Accuracy by domain</h3>
        <div className="space-y-3">
          {DOMAINS.filter((d) => perDomain[d.id].total > 0).map((d) => {
            const s = perDomain[d.id];
            const pct = s.a ? Math.round((s.c / s.a) * 100) : 0;
            return (
              <div key={d.id}>
                <div className="mb-1 flex justify-between text-xs sm:text-sm">
                  <span className="font-medium">{d.nameEn}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {s.a > 0 ? (
                      <>
                        <span className="font-bold" style={{ color: d.color }}>
                          {pct}%
                        </span>{" "}
                        · {s.c}/{s.a} of {s.total}
                      </>
                    ) : (
                      <span className="text-slate-400">not started · {s.total} Qs</span>
                    )}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-navy-800">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: d.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
