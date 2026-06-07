import type { Domain } from "./types";

export interface DomainMeta {
  id: Domain;
  nameEn: string;
  nameAr: string;
  /** Exam weight (%). 0 = cross-domain (not a scored domain). */
  weight: number;
  color: string;
  descEn: string;
  descAr: string;
}

export const DOMAINS: DomainMeta[] = [
  {
    id: "security",
    nameEn: "Secure Architectures",
    nameAr: "تصميم بنى آمنة",
    weight: 30,
    color: "#e0533d",
    descEn: "IAM, encryption (KMS), network security, threat detection, federation.",
    descAr: "إدارة الصلاحيات، التشفير، أمان الشبكة، كشف التهديدات، والربط الموحّد.",
  },
  {
    id: "resilient",
    nameEn: "Resilient Architectures",
    nameAr: "تصميم بنى مرنة",
    weight: 26,
    color: "#2f6fd0",
    descEn: "Multi-AZ/Region, DR, load balancing, auto scaling, decoupling, DNS.",
    descAr: "التوافر العالي، التعافي من الكوارث، توزيع الأحمال، التوسّع، والفصل.",
  },
  {
    id: "performance",
    nameEn: "High-Performing Architectures",
    nameAr: "تصميم بنى عالية الأداء",
    weight: 24,
    color: "#e08a1e",
    descEn: "Compute, storage & DB performance, caching, analytics, networking.",
    descAr: "الحوسبة، أداء التخزين وقواعد البيانات، الـ caching، التحليلات، الشبكة.",
  },
  {
    id: "cost",
    nameEn: "Cost-Optimized Architectures",
    nameAr: "تصميم بنى موفّرة للتكلفة",
    weight: 20,
    color: "#2e9e5b",
    descEn: "EC2 pricing, S3 classes & lifecycle, serverless savings, cost tools.",
    descAr: "تسعير EC2، فئات S3 ودورة الحياة، توفير الـ serverless، أدوات التكلفة.",
  },
  {
    id: "patterns",
    nameEn: "Patterns & Well-Architected",
    nameAr: "الأنماط المعمارية و Well-Architected",
    weight: 0,
    color: "#8b5cf6",
    descEn: "Three-tier, event-driven, Strangler Fig, deployments, the 6 pillars.",
    descAr: "الطبقات الثلاث، event-driven، Strangler Fig، أنماط النشر، الأركان الستة.",
  },
];

export const domainById = (id: Domain): DomainMeta =>
  DOMAINS.find((d) => d.id === id) ?? DOMAINS[DOMAINS.length - 1];
