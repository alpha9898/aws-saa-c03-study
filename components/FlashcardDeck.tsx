"use client";

import { useEffect, useMemo, useState } from "react";
import { FLASHCARDS } from "@/data/flashcards";
import type { Flashcard } from "@/data/types";
import { DOMAINS } from "@/data/domains";
import { shuffle } from "@/lib/shuffle";
import { useLanguage } from "@/lib/language";
import { useProgress } from "@/lib/progress";
import { DomainFilter, type DomainValue } from "./DomainFilter";
import { SearchBar } from "./SearchBar";
import { DomainBadge, ServiceTags } from "./DomainBadge";

function matchSearch(c: Flashcard, q: string) {
  if (!q) return true;
  const hay = (
    c.front +
    " " +
    c.backEn +
    " " +
    c.backAr +
    " " +
    (c.services?.join(" ") ?? "")
  ).toLowerCase();
  return hay.includes(q.toLowerCase());
}

export function FlashcardDeck() {
  const { showAr } = useLanguage();
  const { state, setFlash } = useProgress();

  const [domain, setDomain] = useState<DomainValue>("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<Flashcard[]>(() => FLASHCARDS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const next = FLASHCARDS.filter(
      (c) => (domain === "all" || c.domain === domain) && matchSearch(c, search)
    );
    setItems(next);
    setIndex(0);
    setFlipped(false);
  }, [domain, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: FLASHCARDS.filter((x) => matchSearch(x, search)).length,
    };
    for (const d of DOMAINS) {
      c[d.id] = FLASHCARDS.filter(
        (x) => x.domain === d.id && matchSearch(x, search)
      ).length;
    }
    return c;
  }, [search]);

  const knownCount = items.filter((c) => state.flash[c.id] === "known").length;
  const reviewCount = items.filter((c) => state.flash[c.id] === "review").length;

  const current = items[index];
  const status = current ? state.flash[current.id] : undefined;

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => Math.min(Math.max(i + delta, 0), items.length - 1));
  };

  const reshuffle = () => {
    setItems((prev) => shuffle(prev));
    setIndex(0);
    setFlipped(false);
  };

  const mark = (s: "known" | "review") => {
    if (!current) return;
    setFlash(current.id, s);
    // auto-advance for a study-flow feel
    if (index < items.length - 1) setTimeout(() => go(1), 150);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search flashcards…" />
        <DomainFilter value={domain} onChange={setDomain} counts={counts} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="text-slate-500 dark:text-slate-400">
          {items.length > 0 ? (
            <>
              Card{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {index + 1}
              </span>{" "}
              of {items.length}
            </>
          ) : (
            "No cards match your filters."
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 dark:bg-green-500/15 dark:text-green-300">
            Known {knownCount}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
            Review {reviewCount}
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
        <>
          <div
            className="card-flip h-72 cursor-pointer select-none sm:h-80"
            onClick={() => setFlipped((f) => !f)}
          >
            <div className={`card-inner ${flipped ? "flipped" : ""}`}>
              {/* Front */}
              <div className="card-face flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-navy-800 dark:bg-navy-900">
                <div className="mb-3">
                  <DomainBadge domain={current.domain} />
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-center text-xl font-bold leading-snug">
                    {current.front}
                  </p>
                </div>
                <p className="text-center text-xs text-slate-400">
                  Tap to reveal answer
                </p>
              </div>

              {/* Back */}
              <div className="card-face card-back flex flex-col overflow-auto rounded-2xl border border-brand/40 bg-white p-6 shadow-sm dark:bg-navy-900">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-100">
                  {current.backEn}
                </p>
                {showAr && (
                  <p className="ar mt-3 border-t border-black/5 pt-3 text-sm leading-loose text-slate-700 dark:border-white/10 dark:text-slate-100">
                    {current.backAr}
                  </p>
                )}
                <div className="mt-3">
                  <ServiceTags services={current.services} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => go(-1)}
              disabled={index === 0}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium disabled:opacity-40 dark:border-navy-700"
            >
              ←
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => mark("review")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  status === "review"
                    ? "bg-amber-500 text-white"
                    : "border border-amber-400 text-amber-600 hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-amber-500/10"
                }`}
              >
                ↺ Review
              </button>
              <button
                onClick={() => mark("known")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  status === "known"
                    ? "bg-green-600 text-white"
                    : "border border-green-500 text-green-600 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-500/10"
                }`}
              >
                ✓ Known
              </button>
            </div>
            <button
              onClick={() => go(1)}
              disabled={index >= items.length - 1}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium disabled:opacity-40 dark:border-navy-700"
            >
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
