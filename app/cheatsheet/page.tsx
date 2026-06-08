"use client";

import { useState } from "react";
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

type Tab = "all" | "keywords" | "security" | "resilient" | "performance" | "cost" | "patterns";

const TABS: { id: Tab; label: string; color?: string }[] = [
  { id: "all",         label: "All" },
  { id: "keywords",    label: "🔑 Keywords" },
  { id: "security",    label: "Security",    color: "#e0533d" },
  { id: "resilient",   label: "Resilient",   color: "#2f6fd0" },
  { id: "performance", label: "Performance", color: "#e08a1e" },
  { id: "cost",        label: "Cost",        color: "#2e9e5b" },
  { id: "patterns",    label: "Patterns",    color: "#8b5cf6" },
];

export default function CheatSheetPage() {
  const { showAr } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <div className="space-y-8">

      {/* HERO HEADER */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 dark:border-navy-800 dark:from-navy-900 dark:to-navy-950 sm:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
          AWS SAA-C03
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Cheat Sheet
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Golden keyword → service shortcuts, plus every X-vs-Y comparison
              across all four exam domains.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium transition hover:border-brand hover:text-brand dark:border-navy-700 dark:text-slate-300"
          >
            🖨 Print
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: String(KEYWORDS.length),   l: "Keywords" },
            { n: String(FLASHCARDS.length), l: "Comparison cards" },
            { n: "5",                       l: "Domains" },
            { n: "65",                      l: "Exam questions" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-navy-700 dark:bg-navy-900"
            >
              <div className="text-2xl font-extrabold text-brand">{s.n}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAIN TAB FILTER BAR */}
      <div className="sticky top-14 z-30 -mx-4 bg-white/90 px-4 py-3 backdrop-blur dark:bg-navy-950/90 sm:rounded-2xl sm:border sm:border-slate-200 sm:dark:border-navy-800">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "border-transparent text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand dark:border-navy-700 dark:bg-navy-900 dark:text-slate-300"
                }`}
                style={active ? { backgroundColor: tab.color ?? "#ff9900" } : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* KEYWORDS GRID */}
      {(activeTab === "all" || activeTab === "keywords") && (
        <section>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800" />
            <span className="rounded-full bg-brand/15 px-3 py-1 text-sm font-bold text-brand">
              🔑 Golden Keywords
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {KEYWORDS.map((k) => (
              <div
                key={k.clue}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-navy-800 dark:bg-navy-900"
              >
                <p className="text-xs italic leading-relaxed text-slate-400 dark:text-slate-500">
                  If you see…
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {k.clue}
                </p>
                <p className="mt-3 text-base font-extrabold leading-snug text-brand">
                  {k.pick}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DOMAIN COMPARISON SECTIONS */}
      {DOMAINS.map((d) => {
        if (activeTab !== "all" && activeTab !== d.id) return null;
        const cards = FLASHCARDS.filter((c) => c.domain === d.id);
        if (!cards.length) return null;
        return (
          <section key={d.id}>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800" />
              <span
                className="rounded-full px-3 py-1 text-sm font-bold text-white"
                style={{ backgroundColor: d.color }}
              >
                {d.nameEn}
              </span>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {cards.length} cards
              </span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-navy-800 dark:bg-navy-900"
                  style={{ borderLeftWidth: "4px", borderLeftColor: d.color }}
                >
                  <p className="text-base font-bold leading-snug text-slate-900 dark:text-slate-100">
                    {c.front}
                  </p>
                  <div className="my-3 h-px bg-slate-100 dark:bg-navy-800" />
                  <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {c.backEn}
                  </p>
                  {showAr && (
                    <p className="ar mt-3 border-t border-black/5 pt-3 text-sm leading-loose text-slate-600 dark:border-white/10 dark:text-slate-300">
                      {c.backAr}
                    </p>
                  )}
                  {c.services?.length ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border px-2 py-0.5 text-[11px] font-medium"
                          style={{
                            borderColor: d.color + "55",
                            color: d.color,
                            backgroundColor: d.color + "12",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        );
      })}

    </div>
  );
}
