"use client";

import { createContext, useContext, useEffect, useState } from "react";

type LanguageCtx = {
  showAr: boolean;
  toggle: () => void;
  setShowAr: (v: boolean) => void;
};
const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [showAr, setShowAr] = useState(true);

  useEffect(() => {
    try {
      const s = localStorage.getItem("saa-show-ar");
      if (s !== null) setShowAr(s === "1");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("saa-show-ar", showAr ? "1" : "0");
    } catch {}
  }, [showAr]);

  return (
    <LanguageContext.Provider
      value={{ showAr, toggle: () => setShowAr((v) => !v), setShowAr }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLanguage must be used within LanguageProvider");
  return c;
}
