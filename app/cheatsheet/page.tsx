"use client";

import { FLASHCARDS } from "@/data/flashcards";
import { DOMAINS } from "@/data/domains";
import { useLanguage } from "@/lib/language";

const KEYWORDS: { clue: string; pick: string }[] = [
  { clue: "highly available / fault tolerant", pick: "Multi-AZ" },
  { clue: "most cost-effective / cheapest", pick: "Spot · Serverless · S3 tiers" },
  { clue: "disaster recovery / another Region", pick: "Multi-Region (Aurora Global · DynamoDB Global Tables)" },
  { clue: "decouple components", pick: "SQS / SNS" },
  { clue: "without managing servers", pick: "Lambda / Fargate" },
  { clue: "exactly-once + strict ordering", pick: "SQS FIFO" },
  { clue: "one event → many consumers", pick: "SNS → SQS fan-out" },
  { clue: "intelligent threat detection", pick: "GuardDuty" },
  { clue: "sensitive data / PII in S3", pick: "Macie" },
  { clue: "vulnerability / CVE scanning", pick: "Inspector" },
  { clue: "who did what — API audit", pick: "CloudTrail" },
  { clue: "config compliance / drift", pick: "AWS Config" },
  { clue: "central security findings view", pick: "Security Hub" },
  { clue: "microsecond cache for DynamoDB", pick: "DAX" },
  { clue: "general in-memory cache", pick: "ElastiCache (Redis/Memcached)" },
  { clue: "serverless SQL on S3", pick: "Athena" },
  { clue: "data warehouse / OLAP / BI", pick: "Redshift" },
  { clue: "graph / relationships", pick: "Neptune" },
  { clue: "time-series / IoT", pick: "Timestream" },
  { clue: "immutable ledger", pick: "QLDB" },
  { clue: "shared file system across instances", pick: "EFS" },
  { clue: "block storage, one instance", pick: "EBS (gp3 default)" },
  { clue: "lowest latency between instances", pick: "Cluster placement group" },
  { clue: "real-time stream + replay", pick: "Kinesis Data Streams" },
  { clue: "easiest load to S3/Redshift", pick: "Kinesis Data Firehose" },
  { clue: "private access to S3 (no internet)", pick: "Gateway VPC Endpoint (free)" },
  { clue: "private access to many AWS/SaaS APIs", pick: "Interface Endpoint (PrivateLink)" },
  { clue: "many VPCs + on-prem, transitive", pick: "Transit Gateway" },
  { clue: "dedicated private link to on-prem", pick: "Direct Connect (+ VPN backup)" },
  { clue: "block SQL injection / XSS (L7)", pick: "AWS WAF" },
  { clue: "DDoS protection", pick: "Shield (Advanced = DRT + cost protection)" },
  { clue: "automatic DB rotation (passwords)", pick: "Secrets Manager" },
  { clue: "cheap config + simple secrets", pick: "SSM Parameter Store" },
];

export default function CheatSheetPage() {
  const { showAr } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold">Cheat Sheet</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Golden keyword → service shortcuts, plus every X-vs-Y comparison.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:border-brand dark:border-navy-700"
        >
          🖨 Print
        </button>
      </div>

      {/* Golden keywords */}
      <section>
        <h2 className="mb-3 text-lg font-bold">🔑 Golden keywords</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-navy-800">
              <tr>
                <th className="p-3 font-semibold">If the question says…</th>
                <th className="p-3 font-semibold">Think…</th>
              </tr>
            </thead>
            <tbody>
              {KEYWORDS.map((k, i) => (
                <tr
                  key={k.clue}
                  className={
                    i % 2
                      ? "bg-white dark:bg-navy-900"
                      : "bg-slate-50 dark:bg-navy-950"
                  }
                >
                  <td className="p-3 text-slate-600 dark:text-slate-300">
                    {k.clue}
                  </td>
                  <td className="p-3 font-semibold text-brand">{k.pick}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparisons by domain */}
      {DOMAINS.map((d) => {
        const cards = FLASHCARDS.filter((c) => c.domain === d.id);
        if (!cards.length) return null;
        return (
          <section key={d.id}>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              {d.nameEn}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 dark:border-navy-800 dark:bg-navy-900"
                >
                  <p className="font-semibold">{c.front}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {c.backEn}
                  </p>
                  {showAr && (
                    <p className="ar mt-2 border-t border-black/5 pt-2 text-sm leading-loose text-slate-600 dark:border-white/10 dark:text-slate-300">
                      {c.backAr}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
