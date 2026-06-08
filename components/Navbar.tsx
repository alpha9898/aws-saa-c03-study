"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/language";

const links = [
  { href: "/", label: "Home" },
  { href: "/quiz", label: "Quiz" },
  { href: "/exam", label: "Exam" },
  { href: "/flashcards", label: "Cards" },
  { href: "/qa", label: "Q&A" },
  { href: "/cheatsheet", label: "Cheat" },
];

export function Navbar() {
  const pathname = usePathname();
  const { dark, toggle } = useTheme();
  const { showAr, toggle: toggleAr } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-navy-800 dark:bg-navy-950/85">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight">
          <span className="rounded bg-brand px-1.5 py-0.5 text-sm text-navy-950">AWS</span>
          <span className="hidden text-sm sm:inline">SAA-C03 Study</span>
        </Link>

        <div className="flex min-w-0 items-center gap-0.5 overflow-x-auto">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition sm:px-3 ${
                  active
                    ? "bg-brand/15 text-brand"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-800"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            onClick={toggleAr}
            title="Toggle Arabic explanations"
            className={`rounded-md border px-2 py-1 text-xs font-semibold transition ${
              showAr
                ? "border-brand bg-brand/15 text-brand"
                : "border-slate-200 text-slate-500 dark:border-navy-700 dark:text-slate-400"
            }`}
          >
            ع
          </button>
          <button
            onClick={toggle}
            title="Toggle theme"
            className="rounded-md border border-slate-200 px-2 py-1 text-sm dark:border-navy-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
