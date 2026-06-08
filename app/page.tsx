"use client";

import Link from "next/link";
import { MCQS } from "@/data/mcqs";
import { FLASHCARDS } from "@/data/flashcards";
import { QAS } from "@/data/qa";
import { DOMAINS } from "@/data/domains";
import { useProgress } from "@/lib/progress";
import { useLanguage } from "@/lib/language";
import { ProgressBar } from "@/components/ProgressBar";
import { StatsPanel } from "@/components/StatsPanel";

const modes = [
  {
    href: "/quiz",
    icon: "📝",
    title: "Practice Quiz",
    titleAr: "أسئلة اختيار من متعدد",
    desc: "Scenario MCQs with instant answers, explanations & bookmarks.",
    count: `${MCQS.length} questions`,
  },
  {
    href: "/exam",
    icon: "⏱️",
    title: "Timed Mock Exam",
    titleAr: "امتحان تجريبي بوقت",
    desc: "65 questions · 130 min · scored with a per-domain breakdown.",
    count: "Full simulation",
    featured: true,
  },
  {
    href: "/flashcards",
    icon: "🃏",
    title: "Flashcards",
    titleAr: "البطاقات التعليمية",
    desc: "Flip cards for key comparisons & facts. Track known/review.",
    count: `${FLASHCARDS.length} cards`,
  },
  {
    href: "/qa",
    icon: "💡",
    title: "Concept Q&A",
    titleAr: "أسئلة وأجوبة",
    desc: "Searchable 'when do you use…?' concept explanations.",
    count: `${QAS.length} Q&A`,
  },
  {
    href: "/cheatsheet",
    icon: "📋",
    title: "Cheat Sheet",
    titleAr: "ورقة المراجعة",
    desc: "Golden keywords + every X-vs-Y comparison on one page.",
    count: "Quick reference",
  },
];

export default function Home() {
  const { reset } = useProgress();
  const { showAr } = useLanguage();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 dark:border-navy-800 dark:from-navy-900 dark:to-navy-950 sm:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
          AWS Certified Solutions Architect – Associate
        </p>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          SAA-C03 Study Hub
        </h1>
        {showAr && (
          <p className="ar mt-2 text-lg text-slate-500 dark:text-slate-300">
            مذاكرة شهادة AWS Solutions Architect — أسئلة سيناريو، امتحان بوقت، بطاقات، وشرح بالعربي
          </p>
        )}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Real-exam-style scenario questions, a timed mock exam, flashcards, and
          concept Q&A across all four domains — English questions with optional
          Arabic explanations.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: "4", l: "Domains" },
            { n: "65", l: "Exam questions" },
            { n: "130", l: "Minutes" },
            { n: "720", l: "Pass / 1000" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-navy-700 dark:bg-navy-900"
            >
              <div className="text-2xl font-extrabold text-brand">{s.n}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Study modes */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Study modes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`group rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-navy-900 ${
                m.featured
                  ? "border-brand/60 ring-1 ring-brand/30"
                  : "border-slate-200 hover:border-brand dark:border-navy-800"
              }`}
            >
              <div className="text-3xl">{m.icon}</div>
              <div className="mt-3 flex items-center gap-2">
                <h3 className="font-bold">{m.title}</h3>
              </div>
              {showAr && <p className="ar text-sm text-slate-400">{m.titleAr}</p>}
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {m.desc}
              </p>
              <p className="mt-3 text-xs font-semibold text-brand">{m.count} →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Exam domains &amp; weights</h2>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-navy-800 dark:bg-navy-900">
          {DOMAINS.filter((d) => d.weight > 0).map((d) => (
            <div key={d.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{d.nameEn}</span>
                <span className="font-bold" style={{ color: d.color }}>
                  {d.weight}%
                </span>
              </div>
              <ProgressBar value={d.weight} max={30} color={d.color} />
              {showAr && (
                <p className="ar mt-1 text-xs text-slate-400">{d.descAr}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Progress / stats */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Your progress</h2>
        <StatsPanel />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              if (confirm("Reset all saved progress?")) reset();
            }}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-red-400 hover:text-red-600 dark:border-navy-700 dark:text-slate-300"
          >
            Reset progress
          </button>
          <a
            href="/guide/AWS_SAA-C03_Study_Guide_AR_3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-brand hover:text-brand dark:border-navy-700 dark:text-slate-300"
          >
            📄 Open the full PDF guide
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-navy-800">
        Built from the AWS SAA-C03 study guide · Real-exam scenario style ·
        Bilingual EN / AR · Installable (PWA)
      </footer>
    </div>
  );
}
