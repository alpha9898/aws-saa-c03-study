"use client";

import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/language";
import { ProgressProvider } from "@/lib/progress";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>{children}</ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
