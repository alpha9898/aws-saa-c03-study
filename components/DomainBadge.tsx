import { domainById } from "@/data/domains";
import type { Domain } from "@/data/types";

export function DomainBadge({ domain }: { domain: Domain }) {
  const d = domainById(domain);
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold text-white"
      style={{ backgroundColor: d.color }}
    >
      {d.nameEn}
    </span>
  );
}

export function ServiceTags({ services }: { services?: string[] }) {
  if (!services?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {services.map((s) => (
        <span
          key={s}
          className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[11px] text-slate-600 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-300"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
