"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type FlashStatus = "known" | "review";

export interface ProgressState {
  /** mcq id -> whether last answer was correct */
  mcq: Record<string, boolean>;
  /** flashcard id -> known/review */
  flash: Record<string, FlashStatus>;
}

const EMPTY: ProgressState = { mcq: {}, flash: {} };
const KEY = "saa-progress-v1";

type ProgressCtx = {
  state: ProgressState;
  recordMcq: (id: string, correct: boolean) => void;
  setFlash: (id: string, status: FlashStatus) => void;
  clearFlash: (id: string) => void;
  reset: () => void;
};

const Ctx = createContext<ProgressCtx | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(EMPTY);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...EMPTY, ...JSON.parse(raw) });
    } catch {}
  }, []);

  const persist = (next: ProgressState) => {
    setState(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const recordMcq = (id: string, correct: boolean) =>
    persist({ ...state, mcq: { ...state.mcq, [id]: correct } });

  const setFlash = (id: string, status: FlashStatus) =>
    persist({ ...state, flash: { ...state.flash, [id]: status } });

  const clearFlash = (id: string) => {
    const flash = { ...state.flash };
    delete flash[id];
    persist({ ...state, flash });
  };

  const reset = () => persist(EMPTY);

  return (
    <Ctx.Provider value={{ state, recordMcq, setFlash, clearFlash, reset }}>
      {children}
    </Ctx.Provider>
  );
}

export function useProgress() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useProgress must be used within ProgressProvider");
  return c;
}
