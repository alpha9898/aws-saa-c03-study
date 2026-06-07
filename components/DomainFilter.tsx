"use client";

import { DOMAINS } from "@/data/domains";
import type { Domain } from "@/data/types";

export type DomainValue = Domain | "all";

export function DomainFilter({
  value,
  onChange,
  counts,
}: {
  value: DomainValue;
  onChange: (d: DomainValue) => void;
  counts?: Record<string, number>;
}) {
  const items: { id: DomainValue; name: string; color?: string }[] = [
    { id: "all", name: "All" },
    ...DOMAINS.map((d) => ({ id: d.id as DomainValue, name: d.nameEn, color: d.color })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => {
        const active = value === it.id;
        const count = counts?.[it.id];
        return (
          <button
            key={it.id}
            onClick={() => onChange(it.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
              active
                ? "border-transparent text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand dark:border-navy-700 dark:bg-navy-900 dark:text-slate-300"
            }`}
            style={active ? { backgroundColor: it.color ?? "#ec7211" } : undefined}
          >
            {it.name}
            {count != null ? ` (${count})` : ""}
          </button>
        );
      })}
    </div>
  );
}
