"use client";

import { useMemo, useState } from "react";
import { QAS } from "@/data/qa";
import type { QA } from "@/data/types";
import { DOMAINS } from "@/data/domains";
import { useLanguage } from "@/lib/language";
import { DomainFilter, type DomainValue } from "./DomainFilter";
import { SearchBar } from "./SearchBar";
import { DomainBadge, ServiceTags } from "./DomainBadge";

function matchSearch(q: QA, term: string) {
  if (!term) return true;
  const hay = (
    q.questionEn +
    " " +
    q.answerEn +
    " " +
    q.answerAr +
    " " +
    (q.services?.join(" ") ?? "")
  ).toLowerCase();
  return hay.includes(term.toLowerCase());
}

export function QABrowser() {
  const { showAr } = useLanguage();
  const [domain, setDomain] = useState<DomainValue>("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const items = useMemo(
    () =>
      QAS.filter(
        (q) => (domain === "all" || q.domain === domain) && matchSearch(q, search)
      ),
    [domain, search]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: QAS.filter((q) => matchSearch(q, search)).length,
    };
    for (const d of DOMAINS) {
      c[d.id] = QAS.filter(
        (q) => q.domain === d.id && matchSearch(q, search)
      ).length;
    }
    return c;
  }, [search]);

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search Q&A…" />
        <DomainFilter value={domain} onChange={setDomain} counts={counts} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {items.length} question{items.length === 1 ? "" : "s"}
      </p>

      <div className="space-y-3">
        {items.map((q) => {
          const isOpen = !!open[q.id];
          return (
            <div
              key={q.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-navy-800 dark:bg-navy-900"
            >
              <button
                onClick={() => toggle(q.id)}
                className="flex w-full items-start gap-3 p-4 text-left"
              >
                <DomainBadge domain={q.domain} />
                <span className="flex-1 text-[15px] font-semibold leading-snug">
                  {q.questionEn}
                </span>
                <span className="mt-0.5 text-slate-400">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="space-y-3 border-t border-slate-100 px-4 pb-4 pt-3 dark:border-navy-800">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {q.answerEn}
                  </p>
                  {showAr && (
                    <p className="ar border-t border-black/5 pt-3 text-sm leading-loose text-slate-700 dark:border-white/10 dark:text-slate-200">
                      {q.answerAr}
                    </p>
                  )}
                  <ServiceTags services={q.services} />
                </div>
              )}
            </div>
          );
        })}
        {items.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-navy-700">
            No questions match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
