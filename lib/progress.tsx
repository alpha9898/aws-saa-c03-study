"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type FlashStatus = "known" | "review";

export interface ProgressState {
  /** mcq id -> whether last answer was correct */
  mcq: Record<string, boolean>;
  /** flashcard id -> known/review */
  flash: Record<string, FlashStatus>;
  /** mcq id -> bookmarked */
  bookmarks: Record<string, boolean>;
  /** unique ISO yyyy-mm-dd dates the user answered something */
  studyDays: string[];
}

const EMPTY: ProgressState = { mcq: {}, flash: {}, bookmarks: {}, studyDays: [] };
const KEY = "saa-progress-v2";

function today(): string {
  // Runs only in the browser (client component) — safe to use Date here.
  return new Date().toISOString().slice(0, 10);
}

type ProgressCtx = {
  state: ProgressState;
  recordMcq: (id: string, correct: boolean) => void;
  recordMcqBatch: (entries: Record<string, boolean>) => void;
  setFlash: (id: string, status: FlashStatus) => void;
  clearFlash: (id: string) => void;
  toggleBookmark: (id: string) => void;
  reset: () => void;
};

const Ctx = createContext<ProgressCtx | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(EMPTY);

  useEffect(() => {
    try {
      const raw =
        localStorage.getItem(KEY) ?? localStorage.getItem("saa-progress-v1");
      if (raw) setState({ ...EMPTY, ...JSON.parse(raw) });
    } catch {}
  }, []);

  const persist = (next: ProgressState) => {
    setState(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const recordMcq = (id: string, correct: boolean) => {
    const d = today();
    const studyDays = state.studyDays.includes(d)
      ? state.studyDays
      : [...state.studyDays, d];
    persist({ ...state, mcq: { ...state.mcq, [id]: correct }, studyDays });
  };

  const recordMcqBatch = (entries: Record<string, boolean>) => {
    const d = today();
    const studyDays = state.studyDays.includes(d)
      ? state.studyDays
      : [...state.studyDays, d];
    persist({ ...state, mcq: { ...state.mcq, ...entries }, studyDays });
  };

  const setFlash = (id: string, status: FlashStatus) =>
    persist({ ...state, flash: { ...state.flash, [id]: status } });

  const clearFlash = (id: string) => {
    const flash = { ...state.flash };
    delete flash[id];
    persist({ ...state, flash });
  };

  const toggleBookmark = (id: string) => {
    const bookmarks = { ...state.bookmarks };
    if (bookmarks[id]) delete bookmarks[id];
    else bookmarks[id] = true;
    persist({ ...state, bookmarks });
  };

  const reset = () => persist(EMPTY);

  return (
    <Ctx.Provider
      value={{
        state,
        recordMcq,
        recordMcqBatch,
        setFlash,
        clearFlash,
        toggleBookmark,
        reset,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useProgress() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useProgress must be used within ProgressProvider");
  return c;
}

/** Longest run of consecutive days ending today (or yesterday). */
export function computeStreak(studyDays: string[]): number {
  if (!studyDays.length) return 0;
  const set = new Set(studyDays);
  const dayMs = 86400000;
  const start = new Date();
  // allow streak to count if they studied today OR yesterday
  let cursor = new Date(start);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  if (!set.has(iso(cursor))) {
    cursor = new Date(start.getTime() - dayMs);
    if (!set.has(iso(cursor))) return 0;
  }
  let streak = 0;
  while (set.has(iso(cursor))) {
    streak++;
    cursor = new Date(cursor.getTime() - dayMs);
  }
  return streak;
}
