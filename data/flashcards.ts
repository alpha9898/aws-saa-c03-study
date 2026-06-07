import type { Flashcard } from "./types";

export const FLASHCARDS: Flashcard[] = [
  // ---------------- Security ----------------
  {
    id: "fc-sec-01",
    domain: "security",
    front: "IAM User vs IAM Role",
    backEn:
      "User = a person/app identity with permanent credentials. Role = a temporary identity assumed via STS (short-lived credentials). Use roles for EC2, Lambda, and cross-account access — never embed access keys.",
    backAr:
      "User = هوية لشخص/تطبيق بـ credentials دائمة. Role = هوية مؤقتة بتتاخد عبر STS (credentials قصيرة العمر). استخدم الـ roles لـ EC2 و Lambda والوصول cross-account — وما تحطّش access keys.",
    services: ["IAM", "STS"],
  },
  {
    id: "fc-sec-02",
    domain: "security",
    front: "sts:AssumeRole — what is it for?",
    backEn:
      "Lets an identity assume a role and receive temporary credentials. It's the recommended way to do cross-account access: create a role in the resource account with a trust policy for the other account.",
    backAr:
      "بيخلّي هوية تاخد role وتحصل على credentials مؤقتة. ده الأسلوب الموصى به للـ cross-account: اعمل role في حساب المورد بـ trust policy للحساب التاني.",
    services: ["STS", "AssumeRole", "Cross-Account"],
  },
  {
    id: "fc-sec-03",
    domain: "security",
    front: "AWS Managed vs Customer Managed vs Inline policy",
    backEn:
      "AWS Managed = ready-made, auto-updated (quick start). Customer Managed = your own, reusable + versioned (best for reuse). Inline = 1:1 strictly bound to a single identity.",
    backAr:
      "AWS Managed = جاهزة وبتتحدّث تلقائيًا (بداية سريعة). Customer Managed = بتاعتك، قابلة لإعادة الاستخدام + versioning (الأفضل). Inline = علاقة 1:1 مربوطة بهوية واحدة.",
    services: ["IAM", "Policies"],
  },
  {
    id: "fc-sec-04",
    domain: "security",
    front: "Permission Boundary",
    backEn:
      "A ceiling on the maximum permissions an IAM user/role can have. It limits, never grants. Effective permission = identity policy ∩ boundary.",
    backAr:
      "سقف لأقصى صلاحيات ممكن يوصلها user/role. بيحدّ ومش بيمنح. الصلاحية الفعلية = الـ identity policy ∩ الـ boundary.",
    services: ["IAM", "Permission Boundary"],
  },
  {
    id: "fc-sec-05",
    domain: "security",
    front: "Service Control Policy (SCP)",
    backEn:
      "Org/OU-level guardrail that sets the MAX permissions for accounts. It restricts, never grants — an explicit Deny can't be overridden by any IAM policy inside the account.",
    backAr:
      "guardrail على مستوى الـ Org/OU بيحدّد أقصى صلاحيات للحسابات. بيقيّد مش بيمنح — والـ Deny الصريح مفيش IAM policy جوّه الحساب تتغلّب عليه.",
    services: ["Organizations", "SCP"],
  },
  {
    id: "fc-sec-06",
    domain: "security",
    front: "How is an effective permission calculated?",
    backEn:
      "Effective = (Identity policy) ∩ (Permission Boundary) ∩ (SCP). Any explicit Deny in ANY layer always wins over an Allow.",
    backAr:
      "الفعلية = (Identity policy) ∩ (Permission Boundary) ∩ (SCP). وأي Explicit Deny في أي طبقة دايمًا بيغلب الـ Allow.",
    services: ["IAM", "SCP", "Permission Boundary"],
  },
  {
    id: "fc-sec-07",
    domain: "security",
    front: "IAM Identity Center (formerly AWS SSO)",
    backEn:
      "Central single sign-on across all Organization accounts, integrated with external IdP / Active Directory. Best for managing workforce access to many accounts.",
    backAr:
      "single sign-on مركزي لكل حسابات الـ Organization، متكامل مع IdP خارجي/Active Directory. الأنسب لإدارة وصول الموظفين على حسابات كتير.",
    services: ["IAM Identity Center", "Federation"],
  },
  {
    id: "fc-sec-08",
    domain: "security",
    front: "AWS KMS / CMK",
    backEn:
      "Central key management. The CMK never leaves KMS. Customer-managed keys support rotation + key policies and log every use in CloudTrail. Integrates with most AWS services.",
    backAr:
      "إدارة مفاتيح مركزية. الـ CMK مبيخرجش من KMS. الـ customer-managed keys بتدعم rotation + key policies وبتسجّل كل استخدام في CloudTrail. بتتكامل مع معظم الخدمات.",
    services: ["KMS", "CMK"],
  },
  {
    id: "fc-sec-09",
    domain: "security",
    front: "Envelope Encryption",
    backEn:
      "KMS generates a data key: the plaintext copy encrypts data locally, the encrypted copy is stored next to it. Avoids the 4 KB KMS limit and is fast for large files.",
    backAr:
      "الـ KMS بيطلّع data key: النسخة الـ plaintext بتشفّر الداتا محليًا، والنسخة المشفّرة بتتخزّن جنبها. بيتجنّب حد الـ 4KB وسريع للملفات الكبيرة.",
    services: ["KMS", "Envelope Encryption"],
  },
  {
    id: "fc-sec-10",
    domain: "security",
    front: "AWS KMS vs CloudHSM",
    backEn:
      "KMS = multi-tenant, AWS-managed hardware, default for most cases. CloudHSM = single-tenant dedicated HSM you fully control (FIPS 140-2 Level 3) — for strict compliance / BYO-key control.",
    backAr:
      "KMS = multi-tenant، عتاد مُدار من AWS، الافتراضي لمعظم الحالات. CloudHSM = HSM مخصّص single-tenant إنت بتتحكّم فيه بالكامل (FIPS 140-2 L3) — للـ compliance الصارم.",
    services: ["KMS", "CloudHSM"],
  },
  {
    id: "fc-sec-11",
    domain: "security",
    front: "S3 SSE-S3 vs SSE-KMS vs SSE-C",
    backEn:
      "SSE-S3 = AWS-managed AES-256, simplest, free, default. SSE-KMS = your KMS key, CloudTrail audit + rotation control. SSE-C = you supply the key on every request (you manage it).",
    backAr:
      "SSE-S3 = مفاتيح AWS (AES-256)، الأبسط ومجاني وافتراضي. SSE-KMS = مفتاح KMS بتاعك، audit في CloudTrail + تحكّم في الـ rotation. SSE-C = إنت بتبعت المفتاح في كل request.",
    services: ["S3", "Encryption"],
  },
  {
    id: "fc-sec-12",
    domain: "security",
    front: "Secrets Manager vs Parameter Store",
    backEn:
      "Secrets Manager = secrets (DB passwords, API keys) with built-in automatic rotation + RDS integration (paid). Parameter Store = config + simple secrets, free Standard tier, no native rotation.",
    backAr:
      "Secrets Manager = أسرار (DB passwords، API keys) برotation تلقائي + تكامل RDS (مدفوع). Parameter Store = config + أسرار بسيطة، Standard مجاني، بدون rotation تلقائي.",
    services: ["Secrets Manager", "Parameter Store"],
  },
  {
    id: "fc-sec-13",
    domain: "security",
    front: "AWS Certificate Manager (ACM) — key exam fact",
    backEn:
      "Free, auto-renewing public SSL/TLS certs. Integrates with CloudFront, ALB, and API Gateway — NOT directly on EC2. A CloudFront cert must be in us-east-1.",
    backAr:
      "شهادات SSL/TLS عامة مجانية وبتتجدّد تلقائيًا. بتتكامل مع CloudFront و ALB و API Gateway — مش على EC2 مباشرة. وشهادة CloudFront لازم تكون في us-east-1.",
    services: ["ACM", "CloudFront"],
  },
  {
    id: "fc-sec-14",
    domain: "security",
    front: "Security Group vs NACL",
    backEn:
      "SG = instance/ENI level, stateful (return traffic auto-allowed), allow rules only. NACL = subnet level, stateless (allow both directions), supports explicit Deny, evaluated by rule number.",
    backAr:
      "SG = على مستوى الـ instance/ENI، stateful (الرد بيتسمح تلقائيًا)، allow بس. NACL = على مستوى الـ subnet، stateless (لازم تسمح للاتجاهين)، بتدعم Deny، بتتقيّم بالترتيب رقمًا.",
    services: ["Security Group", "NACL", "VPC"],
  },
  {
    id: "fc-sec-15",
    domain: "security",
    front: "VPC Flow Logs",
    backEn:
      "Capture IP traffic metadata (src/dst, ports, ACCEPT/REJECT) at VPC/subnet/ENI level → CloudWatch Logs or S3. First tool for connectivity + security analysis. Does NOT capture packet contents.",
    backAr:
      "بتسجّل metadata للـ IP traffic (مصدر/وجهة، بورتات، ACCEPT/REJECT) على مستوى VPC/subnet/ENI → CloudWatch Logs أو S3. أول أداة لتشخيص الاتصال والأمان. مش بتشوف محتوى الـ packets.",
    services: ["VPC Flow Logs"],
  },
  {
    id: "fc-sec-16",
    domain: "security",
    front: "AWS WAF vs Shield",
    backEn:
      "WAF = Layer 7 (HTTP) — blocks SQL injection, XSS, bots, rate limits; attaches to ALB/CloudFront/API GW. Shield = DDoS protection (L3/L4); Standard is free/automatic, Advanced adds DRT + cost protection.",
    backAr:
      "WAF = Layer 7 (HTTP) — بيمنع SQL injection و XSS و bots والـ rate؛ بيتركّب على ALB/CloudFront/API GW. Shield = حماية DDoS (L3/L4)؛ Standard مجاني/تلقائي، Advanced بيزوّد DRT + تعويض تكلفة.",
    services: ["WAF", "Shield"],
  },
  {
    id: "fc-sec-17",
    domain: "security",
    front: "Gateway Endpoint vs Interface Endpoint (PrivateLink)",
    backEn:
      "Gateway = S3 & DynamoDB only, route-table entry, FREE. Interface (PrivateLink) = most AWS services + partner/SaaS, an ENI with a private IP, billed per hour + per GB.",
    backAr:
      "Gateway = S3 و DynamoDB بس، entry في الـ route table، مجاني. Interface (PrivateLink) = معظم خدمات AWS + شركاء/SaaS، ENI بـ private IP، مدفوع بالساعة + بالـ GB.",
    services: ["VPC Endpoint", "PrivateLink"],
  },
  {
    id: "fc-sec-18",
    domain: "security",
    front: "Amazon GuardDuty",
    backEn:
      "Intelligent, agentless threat detection. Analyzes CloudTrail + VPC Flow Logs + DNS logs with ML to find suspicious activity (crypto-mining, compromised creds). Keyword: 'threat detection'.",
    backAr:
      "كشف تهديدات ذكي بدون agents. بيحلّل CloudTrail + VPC Flow Logs + DNS logs بالـ ML لكشف النشاط المشبوه. الكلمة المفتاحية: 'threat detection'.",
    services: ["GuardDuty"],
  },
  {
    id: "fc-sec-19",
    domain: "security",
    front: "Inspector vs Macie",
    backEn:
      "Inspector = vulnerability/CVE scanning of EC2, ECR images, Lambda. Macie = discovers & classifies sensitive data (PII) in S3 using ML. Keywords: 'vulnerability' vs 'sensitive data in S3'.",
    backAr:
      "Inspector = فحص vulnerabilities/CVE لـ EC2 و ECR و Lambda. Macie = اكتشاف وتصنيف البيانات الحساسة (PII) في S3 بالـ ML. الكلمات: 'vulnerability' مقابل 'sensitive data in S3'.",
    services: ["Inspector", "Macie"],
  },
  {
    id: "fc-sec-20",
    domain: "security",
    front: "CloudTrail vs CloudWatch vs Config",
    backEn:
      "CloudTrail = WHO did WHAT API call (audit). CloudWatch = resource performance (metrics, logs, alarms). Config = resource configuration history + compliance/drift rules.",
    backAr:
      "CloudTrail = مين عمل أنهي API call (تدقيق). CloudWatch = أداء الموارد (metrics، logs، alarms). Config = تاريخ إعدادات الموارد + قواعد الامتثال/الـ drift.",
    services: ["CloudTrail", "CloudWatch", "Config"],
  },
  {
    id: "fc-sec-21",
    domain: "security",
    front: "Cognito User Pools vs Identity Pools",
    backEn:
      "User Pools = authentication (sign-up/sign-in, user directory, JWT tokens). Identity Pools = authorization (exchange a token for temporary AWS credentials via STS to call AWS services).",
    backAr:
      "User Pools = authentication (تسجيل/دخول + directory + JWT). Identity Pools = authorization (تبديل توكن بـ AWS credentials مؤقتة عبر STS لاستدعاء خدمات AWS).",
    services: ["Cognito"],
  },
  {
    id: "fc-sec-22",
    domain: "security",
    front: "Detective vs Security Hub",
    backEn:
      "Security Hub = aggregates & prioritizes findings from GuardDuty/Inspector/Macie across accounts (central view). Detective = builds a graph to investigate root cause of an incident.",
    backAr:
      "Security Hub = بيجمّع ويرتّب نتائج GuardDuty/Inspector/Macie عبر الحسابات (رؤية مركزية). Detective = بيبني graph للتحقيق في السبب الجذري للحادثة.",
    services: ["Security Hub", "Detective"],
  },

  // ---------------- Resilient ----------------
  {
    id: "fc-res-01",
    domain: "resilient",
    front: "RTO vs RPO",
    backEn:
      "RTO = how long you can be DOWN ('when are we back up?') — reduced by ready failover/standby. RPO = how much DATA (in time) you can lose ('to what point do we recover?') — reduced by more frequent backups/replication.",
    backAr:
      "RTO = قد إيه تستحمل تكون down ('إمتى نرجع؟') — بيقل بـ standby/failover جاهز. RPO = قد إيه داتا (بالزمن) تستحمل تخسرها ('نرجع لأي نقطة؟') — بيقل بالـ backups/replication الأكثر تكرارًا.",
    services: ["DR", "RTO", "RPO"],
  },
  {
    id: "fc-res-02",
    domain: "resilient",
    front: "The 4 DR strategies (cheapest → fastest)",
    backEn:
      "Backup & Restore (hours, cheapest) → Pilot Light (tens of min, core/DB running) → Warm Standby (minutes, scaled-down full env) → Multi-Site Active/Active (~0 RTO/RPO, most expensive).",
    backAr:
      "Backup & Restore (ساعات، الأرخص) → Pilot Light (عشرات الدقائق، الـ core/DB شغّال) → Warm Standby (دقائق، بيئة مصغّرة شغّالة) → Multi-Site Active/Active (RTO/RPO ≈ صفر، الأغلى).",
    services: ["DR"],
  },
  {
    id: "fc-res-03",
    domain: "resilient",
    front: "ALB vs NLB",
    backEn:
      "ALB = Layer 7 (HTTP/S), path/host routing, WAF, targets EC2/IP/Lambda. NLB = Layer 4 (TCP/UDP), ultra-low latency, millions of req/s, static IP.",
    backAr:
      "ALB = Layer 7 (HTTP/S)، routing بالـ path/host، WAF، أهداف EC2/IP/Lambda. NLB = Layer 4 (TCP/UDP)، latency منخفض جدًا، ملايين req/s، static IP.",
    services: ["ALB", "NLB"],
  },
  {
    id: "fc-res-04",
    domain: "resilient",
    front: "Gateway Load Balancer (GWLB)",
    backEn:
      "Layer 3 load balancer to deploy, scale, and chain third-party virtual appliances (firewalls, IDS/IPS) transparently in the traffic path.",
    backAr:
      "Load balancer على Layer 3 لنشر وتوسيع وتمرير الترافيك على أجهزة أمان طرف ثالث (firewalls، IDS/IPS) بشكل شفّاف.",
    services: ["GWLB"],
  },
  {
    id: "fc-res-05",
    domain: "resilient",
    front: "Sticky Sessions",
    backEn:
      "Session affinity that pins a client to the same target — useful for stateful apps. Better long-term fix: externalize session state (e.g., to ElastiCache).",
    backAr:
      "session affinity بتربط العميل بنفس الـ target — مفيدة للتطبيقات stateful. الحل الأفضل: نقل الـ session لتخزين خارجي (زي ElastiCache).",
    services: ["ALB", "Sticky Sessions"],
  },
  {
    id: "fc-res-06",
    domain: "resilient",
    front: "Connection Draining (Deregistration Delay)",
    backEn:
      "Lets in-flight requests finish before an instance is deregistered/terminated — prevents dropped connections during scale-in or deployments.",
    backAr:
      "بيخلّي الطلبات الجارية تخلص قبل ما الـ instance يتشال — فمنع قطع الاتصالات وقت الـ scale-in أو النشر.",
    services: ["ALB", "Connection Draining"],
  },
  {
    id: "fc-res-07",
    domain: "resilient",
    front: "Auto Scaling Group (ASG)",
    backEn:
      "Maintains a desired instance count across AZs and auto-replaces unhealthy instances (self-healing). Use Launch Templates (versioned, recommended) over Launch Configurations.",
    backAr:
      "بيحافظ على عدد instances مطلوب عبر الـ AZs وبيستبدل غير السليم تلقائيًا (self-healing). استخدم Launch Templates (versioned، موصى بها) بدل Launch Configurations.",
    services: ["Auto Scaling", "Launch Template"],
  },
  {
    id: "fc-res-08",
    domain: "resilient",
    front: "Scaling policies: Target Tracking / Step / Scheduled / Predictive",
    backEn:
      "Target Tracking = keep a metric at a target (simplest). Step = adjust by breach size. Scheduled = known time patterns. Predictive = ML forecasts recurring demand.",
    backAr:
      "Target Tracking = حافظ على metric عند هدف (الأبسط). Step = ظبط حسب شدة التجاوز. Scheduled = أنماط بالوقت المعروف. Predictive = ML بيتنبّأ بالطلب المتكرّر.",
    services: ["Auto Scaling"],
  },
  {
    id: "fc-res-09",
    domain: "resilient",
    front: "RDS Multi-AZ vs Read Replicas",
    backEn:
      "Multi-AZ = synchronous standby, automatic failover, HA/DR, standby does NOT serve reads. Read Replicas = asynchronous, scale reads, can be cross-Region, manual promotion.",
    backAr:
      "Multi-AZ = standby متزامن، failover تلقائي، HA/DR، الـ standby مبيخدمش قراءة. Read Replicas = غير متزامنة، توسيع القراءة، ممكن cross-Region، ترقية يدوية.",
    services: ["RDS", "Multi-AZ", "Read Replicas"],
  },
  {
    id: "fc-res-10",
    domain: "resilient",
    front: "Amazon Aurora",
    backEn:
      "MySQL/PostgreSQL-compatible; stores 6 copies of data across 3 AZs automatically; higher performance than standard RDS. Aurora Serverless v2 auto-scales capacity.",
    backAr:
      "متوافق مع MySQL/PostgreSQL؛ بيخزّن 6 نسخ عبر 3 AZs تلقائيًا؛ أداء أعلى من RDS العادي. Aurora Serverless v2 بيوزّع السعة تلقائيًا.",
    services: ["Aurora"],
  },
  {
    id: "fc-res-11",
    domain: "resilient",
    front: "Aurora Global Database",
    backEn:
      "Cross-Region replication with ~1s RPO and <1 min RTO, plus low-latency local reads. Best choice for global relational DR.",
    backAr:
      "تناسخ عبر الـ regions بـ RPO حوالي ثانية و RTO أقل من دقيقة، مع قراءات محلية منخفضة الـ latency. الأفضل للـ DR العالمي للقواعد العلائقية.",
    services: ["Aurora Global Database"],
  },
  {
    id: "fc-res-12",
    domain: "resilient",
    front: "DynamoDB Global Tables",
    backEn:
      "Multi-Region, active-active replication — read & write in any Region with low latency for global apps.",
    backAr:
      "تناسخ multi-Region active-active — قراءة وكتابة في أي region بـ latency قليل للتطبيقات العالمية.",
    services: ["DynamoDB", "Global Tables"],
  },
  {
    id: "fc-res-13",
    domain: "resilient",
    front: "DynamoDB PITR",
    backEn:
      "Point-in-time recovery: restore a table to any second within the last 35 days. Protects against accidental writes/deletes.",
    backAr:
      "Point-in-Time Recovery: ترجّع جدول لأي لحظة في آخر 35 يوم. بيحميك من الحذف/الكتابة بالغلط.",
    services: ["DynamoDB", "PITR"],
  },
  {
    id: "fc-res-14",
    domain: "resilient",
    front: "ElastiCache Redis vs Memcached",
    backEn:
      "Redis = replication, Multi-AZ failover, persistence, rich data types (leaderboards/queues). Memcached = simple, multi-threaded, horizontally scalable cache, no persistence/replication.",
    backAr:
      "Redis = replication، Multi-AZ failover، persistence، هياكل بيانات غنية (leaderboards/queues). Memcached = كاش بسيط multi-threaded قابل للتوسّع أفقيًا، بدون persistence/replication.",
    services: ["ElastiCache", "Redis", "Memcached"],
  },
  {
    id: "fc-res-15",
    domain: "resilient",
    front: "S3 Versioning + MFA Delete",
    backEn:
      "Versioning keeps every version (recover from overwrite/delete). MFA Delete requires MFA before any version is permanently deleted.",
    backAr:
      "الـ Versioning بيحتفظ بكل نسخة (يرجّعك من الكتابة فوقه/الحذف). MFA Delete بيفرض MFA قبل أي حذف نهائي لأي نسخة.",
    services: ["S3", "Versioning"],
  },
  {
    id: "fc-res-16",
    domain: "resilient",
    front: "S3 Object Lock (WORM) — Governance vs Compliance",
    backEn:
      "Write Once Read Many. Governance = privileged users can override. Compliance = NO ONE (even root) can delete/modify until retention expires.",
    backAr:
      "Write Once Read Many. Governance = صاحب صلاحية يقدر يتجاوز. Compliance = محدش (حتى الـ root) يقدر يحذف/يعدّل حتى تنتهي مدة الاحتفاظ.",
    services: ["S3", "Object Lock"],
  },
  {
    id: "fc-res-17",
    domain: "resilient",
    front: "S3 CRR vs SRR",
    backEn:
      "CRR = Cross-Region Replication (DR, lower global latency, compliance). SRR = Same-Region Replication (log aggregation, environment separation).",
    backAr:
      "CRR = تناسخ عبر الـ regions (DR، تقليل latency عالميًا، امتثال). SRR = تناسخ داخل نفس الـ region (تجميع logs، فصل البيئات).",
    services: ["S3", "CRR", "SRR"],
  },
  {
    id: "fc-res-18",
    domain: "resilient",
    front: "Amazon EFS",
    backEn:
      "Managed, elastic, shared file system (NFS/POSIX) mounted by many instances across AZs at once. Use when multiple instances need shared files (EBS is single-instance).",
    backAr:
      "نظام ملفات مُدار مرن مشترك (NFS/POSIX) بيتركّب على instances كتير عبر الـ AZs في نفس الوقت. استخدمه لما instances كتير محتاجة ملفات مشتركة (EBS لـ instance واحد).",
    services: ["EFS"],
  },
  {
    id: "fc-res-19",
    domain: "resilient",
    front: "Route 53 routing policies",
    backEn:
      "Simple, Weighted (A/B, canary), Latency-based (lowest latency Region), Failover (active/passive + health check), Geolocation (by user location), Geoproximity (with bias), Multivalue answer.",
    backAr:
      "Simple، Weighted (A/B وcanary)، Latency-based (أقل latency)، Failover (active/passive + health check)، Geolocation (حسب موقع المستخدم)، Geoproximity (مع bias)، Multivalue answer.",
    services: ["Route 53"],
  },
  {
    id: "fc-res-20",
    domain: "resilient",
    front: "Global Accelerator vs CloudFront",
    backEn:
      "CloudFront = CDN caching HTTP content at the edge. Global Accelerator = 2 static anycast IPs routing TCP/UDP over the AWS backbone with fast failover (no caching).",
    backAr:
      "CloudFront = CDN بيعمل cache لمحتوى HTTP في الـ edge. Global Accelerator = IP ثابتين (anycast) بيوجّهوا TCP/UDP على شبكة AWS مع failover سريع (بدون cache).",
    services: ["CloudFront", "Global Accelerator"],
  },
  {
    id: "fc-res-21",
    domain: "resilient",
    front: "SQS Standard vs FIFO",
    backEn:
      "Standard = nearly unlimited throughput, best-effort ordering, at-least-once (possible duplicates). FIFO = strict ordering + exactly-once, limited throughput (hundreds/thousands per sec).",
    backAr:
      "Standard = throughput شبه غير محدود، ترتيب best-effort، at-least-once (ممكن تكرار). FIFO = ترتيب صارم + exactly-once، throughput محدود (مئات/آلاف بالثانية).",
    services: ["SQS", "FIFO"],
  },
  {
    id: "fc-res-22",
    domain: "resilient",
    front: "SNS fan-out (SNS → multiple SQS)",
    backEn:
      "Pub/sub: one message to an SNS topic is delivered to many subscribed SQS queues — each consumer processes a copy independently (decoupling + parallelism).",
    backAr:
      "Pub/sub: رسالة واحدة لـ SNS topic بتتوزّع على عدة SQS queues — كل consumer بيعالج نسخة باستقلال (فصل + توازي).",
    services: ["SNS", "SQS", "Fan-out"],
  },
  {
    id: "fc-res-23",
    domain: "resilient",
    front: "SQS Visibility Timeout & DLQ",
    backEn:
      "Visibility timeout = how long a received message is hidden so it isn't processed twice. DLQ = holds messages that repeatedly fail (exceed max receives) for later analysis.",
    backAr:
      "Visibility timeout = مدة إخفاء الرسالة بعد استلامها عشان متتعالجش مرتين. DLQ = بتحتفظ بالرسائل اللي فشلت متكرّر (تجاوزت الحد) للتحليل بعدين.",
    services: ["SQS", "DLQ"],
  },
  {
    id: "fc-res-24",
    domain: "resilient",
    front: "EventBridge vs Step Functions",
    backEn:
      "EventBridge = serverless event bus routing events (AWS/SaaS/custom) to targets via rules + schedules. Step Functions = orchestrate multi-step workflows as a visual state machine (retries, branching, human approval).",
    backAr:
      "EventBridge = event bus بيوجّه الأحداث (AWS/SaaS/مخصّصة) لأهداف بقواعد + جدولة. Step Functions = تنسيق workflows متعدّدة الخطوات كـ state machine مرئية (retries، تفرّع، موافقة بشرية).",
    services: ["EventBridge", "Step Functions"],
  },

  // ---------------- Performance ----------------
  {
    id: "fc-perf-01",
    domain: "performance",
    front: "EC2 instance families (C/R/I/M/T/G)",
    backEn:
      "C = Compute optimized, R = RAM/memory optimized, I/D = storage optimized, M = general purpose (balanced), T = burstable, G/P = GPU. Pick by the workload's bottleneck.",
    backAr:
      "C = معالجة، R = ذاكرة، I/D = تخزين، M = متوازن (عام)، T = burstable، G/P = GPU. اختار حسب عنق الزجاجة في الحمل.",
    services: ["EC2"],
  },
  {
    id: "fc-perf-02",
    domain: "performance",
    front: "Placement groups: Cluster / Spread / Partition",
    backEn:
      "Cluster = packed in one AZ, lowest latency (HPC). Spread = each on a distinct rack, highest availability (few critical instances). Partition = grouped partitions for large distributed systems (Hadoop/Kafka).",
    backAr:
      "Cluster = متجمّعة في AZ واحدة، أقل latency (HPC). Spread = كل واحدة على rack مختلف، أعلى توافر (instances قليلة حرجة). Partition = مجموعات للأنظمة الموزّعة الكبيرة (Hadoop/Kafka).",
    services: ["EC2", "Placement Groups"],
  },
  {
    id: "fc-perf-03",
    domain: "performance",
    front: "Lambda: memory, limits",
    backEn:
      "Memory = power: more memory → proportionally more CPU/network. Max timeout 15 min, max memory 10 GB. Use Power Tuning to find the optimal memory/cost point.",
    backAr:
      "الذاكرة = القوة: ذاكرة أكتر → CPU/شبكة أكتر بالتناسب. أقصى مدة 15 دقيقة، أقصى ذاكرة 10GB. استخدم Power Tuning لإيجاد أفضل نقطة memory/تكلفة.",
    services: ["Lambda"],
  },
  {
    id: "fc-perf-04",
    domain: "performance",
    front: "Lambda Provisioned Concurrency",
    backEn:
      "Pre-initializes execution environments so they stay warm and respond without cold-start latency — for latency-sensitive APIs and traffic bursts.",
    backAr:
      "بتجهّز بيئات التنفيذ مسبقًا فتفضل دافية وترد بدون cold start — للـ APIs الحسّاسة للـ latency وموجات الترافيك.",
    services: ["Lambda", "Provisioned Concurrency"],
  },
  {
    id: "fc-perf-05",
    domain: "performance",
    front: "ECS vs EKS vs Fargate",
    backEn:
      "ECS = AWS-native container orchestrator. EKS = managed Kubernetes (portability). Fargate = serverless launch type for ECS/EKS (no servers to manage, pay per task).",
    backAr:
      "ECS = منسّق containers خاص بـ AWS. EKS = Kubernetes مُدار (portability). Fargate = launch type بدون سيرفرات لـ ECS/EKS (مفيش إدارة، تدفع لكل task).",
    services: ["ECS", "EKS", "Fargate"],
  },
  {
    id: "fc-perf-06",
    domain: "performance",
    front: "EBS volume types: gp3 / io2 / st1 / sc1",
    backEn:
      "gp3 = general SSD default (IOPS/throughput independent of size). io2 Block Express = highest-perf SSD for critical DBs. st1 = throughput HDD (big data/logs). sc1 = cold HDD (cheapest, rare access).",
    backAr:
      "gp3 = SSD عام افتراضي (IOPS/throughput مستقلين عن الحجم). io2 Block Express = أعلى أداء للقواعد الحرجة. st1 = HDD throughput (big data/logs). sc1 = HDD بارد (الأرخص، وصول نادر).",
    services: ["EBS"],
  },
  {
    id: "fc-perf-07",
    domain: "performance",
    front: "IOPS vs Throughput",
    backEn:
      "IOPS = operations/sec (databases, small random files). Throughput = MB/s (large sequential files, big data, logs). Choose the volume type by which one matters.",
    backAr:
      "IOPS = عمليات/ثانية (قواعد بيانات، ملفات صغيرة عشوائية). Throughput = MB/s (ملفات كبيرة تسلسلية، big data، logs). اختار نوع الـ volume حسب الأهم.",
    services: ["EBS"],
  },
  {
    id: "fc-perf-08",
    domain: "performance",
    front: "EBS Multi-Attach",
    backEn:
      "io1/io2 only: attach a single volume to multiple instances in the SAME AZ. For cross-AZ shared access use EFS instead.",
    backAr:
      "io1/io2 بس: تركيب volume واحد على أكثر من instance في نفس الـ AZ. للوصول المشترك عبر AZs استخدم EFS.",
    services: ["EBS", "Multi-Attach"],
  },
  {
    id: "fc-perf-09",
    domain: "performance",
    front: "Instance Store",
    backEn:
      "Ephemeral, physically attached storage — very high IOPS but data is LOST on stop/terminate. Use for caches/scratch, never for durable data.",
    backAr:
      "تخزين مؤقت ملاصق فيزيائيًا — IOPS عالي جدًا بس الداتا بتضيع عند الـ stop/terminate. استخدمه للكاش/المؤقت، مش للبيانات الدائمة.",
    services: ["Instance Store", "EBS"],
  },
  {
    id: "fc-perf-10",
    domain: "performance",
    front: "DynamoDB DAX",
    backEn:
      "Fully managed in-memory cache built for DynamoDB — microsecond read latency with minimal code changes (DynamoDB-native, unlike generic ElastiCache).",
    backAr:
      "كاش in-memory مُدار بالكامل مخصّص لـ DynamoDB — latency بالميكروثانية مع تعديلات بسيطة (خاص بـ DynamoDB عكس ElastiCache العام).",
    services: ["DynamoDB", "DAX"],
  },
  {
    id: "fc-perf-11",
    domain: "performance",
    front: "Caching: Lazy Loading vs Write-Through",
    backEn:
      "Lazy Loading = cache only on a read miss (only stores requested data, but first read is slow / risk of stale). Write-Through = update cache on every write (always fresh, but caches unused data; TTL helps).",
    backAr:
      "Lazy Loading = cache عند الـ miss بس (بيخزّن المطلوب فقط، لكن أول قراءة بطيئة/احتمال بيانات قديمة). Write-Through = تحديث الكاش مع كل كتابة (دايمًا حديث، لكن بيخزّن بيانات مش مستخدمة؛ TTL بيساعد).",
    services: ["ElastiCache", "Caching"],
  },
  {
    id: "fc-perf-12",
    domain: "performance",
    front: "RDS Proxy",
    backEn:
      "Managed connection pooling that reduces open DB connections and handles connection storms — especially valuable for Lambda/serverless apps hitting RDS.",
    backAr:
      "connection pooling مُدار بيقلّل الاتصالات المفتوحة ويتعامل مع connection storms — مفيد جدًا لتطبيقات Lambda/serverless مع RDS.",
    services: ["RDS Proxy", "Lambda"],
  },
  {
    id: "fc-perf-13",
    domain: "performance",
    front: "DynamoDB Partition Key (hot partition)",
    backEn:
      "Choose a high-cardinality partition key to spread traffic evenly. A poorly chosen key concentrates traffic on one partition → throttling (hot partition).",
    backAr:
      "اختار partition key بـ cardinality عالية عشان توزّع الترافيك. المفتاح السيّئ بيكدّس الترافيك على partition واحد → throttling (hot partition).",
    services: ["DynamoDB", "Partition Key"],
  },
  {
    id: "fc-perf-14",
    domain: "performance",
    front: "Purpose-built DBs: Redshift / Neptune / Timestream / QLDB",
    backEn:
      "Redshift = OLAP data warehouse (columnar). Neptune = graph (relationships). Timestream = time-series (IoT). QLDB = immutable ledger. DocumentDB = MongoDB-compatible. Keyspaces = Cassandra-compatible.",
    backAr:
      "Redshift = data warehouse OLAP (columnar). Neptune = graph (علاقات). Timestream = time-series (IoT). QLDB = ledger غير قابل للتعديل. DocumentDB = متوافق MongoDB. Keyspaces = متوافق Cassandra.",
    services: ["Redshift", "Neptune", "Timestream", "QLDB"],
  },
  {
    id: "fc-perf-15",
    domain: "performance",
    front: "Athena",
    backEn:
      "Serverless SQL directly on data in S3, pay-per-query. No servers, no loading. Keyword: 'SQL on files in S3 without servers'.",
    backAr:
      "SQL serverless مباشرة على داتا في S3، تدفع لكل query. بدون سيرفرات أو تحميل. الكلمة: 'SQL على ملفات في S3 بدون سيرفرات'.",
    services: ["Athena", "S3"],
  },
  {
    id: "fc-perf-16",
    domain: "performance",
    front: "Kinesis Data Streams vs Firehose",
    backEn:
      "Data Streams = real-time, shard control, custom consumers, replay. Firehose = easiest near-real-time delivery to S3/Redshift/OpenSearch, no code, no replay.",
    backAr:
      "Data Streams = real-time، تحكّم بالـ shards، consumers مخصّصة، replay. Firehose = أسهل تسليم near-real-time لـ S3/Redshift/OpenSearch، بدون كود، بدون replay.",
    services: ["Kinesis Data Streams", "Kinesis Firehose"],
  },
  {
    id: "fc-perf-17",
    domain: "performance",
    front: "NAT Gateway vs NAT Instance",
    backEn:
      "NAT Gateway = managed, highly available, auto-scaling (preferred). NAT Instance = a self-managed EC2 you must scale/patch. Both give private subnets outbound internet access only.",
    backAr:
      "NAT Gateway = مُدار، عالي التوافر، بيتوسّع تلقائيًا (المفضّل). NAT Instance = EC2 بتديره وتـ scale/patch بنفسك. الاتنين بيدّوا الـ private subnets خروج للإنترنت بس.",
    services: ["NAT Gateway"],
  },
  {
    id: "fc-perf-18",
    domain: "performance",
    front: "VPC Peering vs Transit Gateway",
    backEn:
      "Peering = 1:1, non-transitive — doesn't scale to many VPCs. Transit Gateway = hub-and-spoke with transitive routing connecting hundreds of VPCs + on-prem.",
    backAr:
      "Peering = 1:1 وغير متعدّي — مبيوسّعش لـ VPCs كتير. Transit Gateway = hub-and-spoke بـ transitive routing بيربط مئات الـ VPCs + on-prem.",
    services: ["VPC Peering", "Transit Gateway"],
  },
  {
    id: "fc-perf-19",
    domain: "performance",
    front: "Direct Connect vs Site-to-Site VPN",
    backEn:
      "Direct Connect = dedicated physical link, consistent low-latency bandwidth (no internet). VPN = encrypted tunnel over the internet (cheaper, quick, or a DX backup → DX + VPN).",
    backAr:
      "Direct Connect = وصلة فيزيائية مخصّصة، bandwidth ثابت وlatency قليل (بدون إنترنت). VPN = نفق مشفّر على الإنترنت (أرخص/أسرع، أو احتياطي للـ DX → DX + VPN).",
    services: ["Direct Connect", "Site-to-Site VPN"],
  },
  {
    id: "fc-perf-20",
    domain: "performance",
    front: "API Gateway: REST vs HTTP vs WebSocket",
    backEn:
      "REST = full features (API keys, usage plans, caching, validation). HTTP = simpler/cheaper/faster for most Lambda/HTTP cases. WebSocket = persistent two-way (chat, live notifications).",
    backAr:
      "REST = مميزات كاملة (API keys، usage plans، caching، validation). HTTP = أبسط/أرخص/أسرع لمعظم حالات Lambda/HTTP. WebSocket = اتصال دائم ثنائي (شات، إشعارات لحظية).",
    services: ["API Gateway"],
  },

  // ---------------- Cost ----------------
  {
    id: "fc-cost-01",
    domain: "cost",
    front: "EC2 pricing: On-Demand / Reserved / Savings Plans / Spot",
    backEn:
      "On-Demand = no commit, most expensive (dev/unpredictable). Reserved = 1/3-yr commit to an instance type (steady). Savings Plans = commit to $/hr, flexible across families + Fargate/Lambda. Spot = up to 90% off, interruptible.",
    backAr:
      "On-Demand = بدون التزام، الأغلى (تطوير/غير متوقّع). Reserved = التزام 1/3 سنة لنوع instance (ثابت). Savings Plans = التزام $/ساعة، مرن عبر العائلات + Fargate/Lambda. Spot = خصم لـ 90%، قابل للانقطاع.",
    services: ["EC2", "Reserved Instances", "Savings Plans", "Spot Instances"],
  },
  {
    id: "fc-cost-02",
    domain: "cost",
    front: "When do you use Spot Instances?",
    backEn:
      "Fault-tolerant, interruptible workloads: batch, big data, CI/CD, stateless web behind an ASG. Up to ~90% savings. Never for jobs that can't be interrupted.",
    backAr:
      "أحمال متحمّلة للانقطاع: batch، big data، CI/CD، web stateless ورا ASG. توفير لـ ~90%. مينفعش لشغل مينفعش يتقطع.",
    services: ["Spot Instances"],
  },
  {
    id: "fc-cost-03",
    domain: "cost",
    front: "Savings Plans flexibility",
    backEn:
      "Compute Savings Plans give RI-level discounts but apply across instance families, sizes, Regions, and to Fargate + Lambda — best when you want a discount without locking to one instance type.",
    backAr:
      "الـ Compute Savings Plans بتدّي خصم زي الـ RI لكن عبر العائلات والأحجام والـ regions وكمان Fargate + Lambda — الأفضل لما عايز خصم من غير ما تقفل على نوع instance واحد.",
    services: ["Savings Plans"],
  },
  {
    id: "fc-cost-04",
    domain: "cost",
    front: "Dedicated Hosts — when?",
    backEn:
      "Bring-Your-Own-License (BYOL) tied to physical sockets/cores, or strict compliance requiring single-tenant physical hardware (e.g., some Windows/Oracle licenses).",
    backAr:
      "ترخيص BYOL مربوط بعدد sockets/cores فيزيائية، أو compliance صارم بيفرض عتاد single-tenant (زي بعض تراخيص Windows/Oracle).",
    services: ["Dedicated Hosts", "BYOL"],
  },
  {
    id: "fc-cost-05",
    domain: "cost",
    front: "S3 storage classes (overview)",
    backEn:
      "Standard (frequent) → Standard-IA (infrequent, ms) → One Zone-IA (infrequent, single AZ, cheaper) → Glacier Instant (archive, ms) → Glacier Flexible (min–hrs) → Deep Archive (12 hrs, cheapest).",
    backAr:
      "Standard (متكرّر) → Standard-IA (نادر، ms) → One Zone-IA (نادر، AZ واحدة، أرخص) → Glacier Instant (أرشيف، ms) → Glacier Flexible (دقائق–ساعات) → Deep Archive (12 ساعة، الأرخص).",
    services: ["S3"],
  },
  {
    id: "fc-cost-06",
    domain: "cost",
    front: "S3 Intelligent-Tiering",
    backEn:
      "Automatically moves objects between access tiers based on usage, no retrieval fees for tier changes — best for unknown/changing access patterns.",
    backAr:
      "بينقل الأوبجكتس تلقائيًا بين طبقات الوصول حسب الاستخدام، بدون رسوم استرجاع لتغيير الطبقة — الأفضل للأنماط المجهولة/المتغيّرة.",
    services: ["S3", "Intelligent-Tiering"],
  },
  {
    id: "fc-cost-07",
    domain: "cost",
    front: "S3 Glacier tiers: Instant / Flexible / Deep Archive",
    backEn:
      "Instant Retrieval = ms retrieval, rarely accessed. Flexible Retrieval = minutes–hours. Deep Archive = ~12 hrs, cheapest, long-term compliance (min 180 days).",
    backAr:
      "Instant = استرجاع بالملّي ثانية، نادر الوصول. Flexible = دقائق–ساعات. Deep Archive = ~12 ساعة، الأرخص، امتثال طويل الأمد (أقل مدة 180 يوم).",
    services: ["S3", "Glacier"],
  },
  {
    id: "fc-cost-08",
    domain: "cost",
    front: "S3 Lifecycle policies",
    backEn:
      "Rules that auto-transition objects to colder/cheaper classes after a set time and can expire (delete) them. One of the highest-ROI cost-saving tools.",
    backAr:
      "قواعد بتنقل الأوبجكتس تلقائيًا لطبقات أبرد/أرخص بعد مدة وتقدر تحذفها (expiration). من أعلى أدوات توفير التكلفة عائدًا.",
    services: ["S3", "Lifecycle Policies"],
  },
  {
    id: "fc-cost-09",
    domain: "cost",
    front: "Cost Explorer vs Budgets",
    backEn:
      "Cost Explorer = visualize, analyze, forecast spend over time. Budgets = set thresholds and get alerts when costs/usage approach or exceed a limit (incl. forecasted).",
    backAr:
      "Cost Explorer = تصوّر وتحلّل وتتنبّأ بالإنفاق. Budgets = تحدّد حدود وتاخد تنبيهات لما التكلفة/الاستخدام تقرب أو تتجاوز الحد (بما فيها المتوقّع).",
    services: ["Cost Explorer", "Budgets"],
  },
  {
    id: "fc-cost-10",
    domain: "cost",
    front: "Trusted Advisor vs Compute Optimizer",
    backEn:
      "Trusted Advisor = recommendations across 5 areas (cost, security, performance, fault tolerance, limits). Compute Optimizer = ML right-sizing for EC2/EBS/Lambda/ASG.",
    backAr:
      "Trusted Advisor = توصيات في 5 مجالات (تكلفة، أمان، أداء، توافر، حدود). Compute Optimizer = right-sizing بالـ ML لـ EC2/EBS/Lambda/ASG.",
    services: ["Trusted Advisor", "Compute Optimizer"],
  },
  {
    id: "fc-cost-11",
    domain: "cost",
    front: "Golden rule: right-size before you commit",
    backEn:
      "Right-size instances first (e.g., Compute Optimizer), THEN buy Reserved Instances / Savings Plans — so you don't lock in over-provisioned capacity.",
    backAr:
      "صغّر الحجم الأول (مثلًا Compute Optimizer)، وبعدين اشتري Reserved/Savings Plans — عشان متقفلش على سعة أكبر من اللازم.",
    services: ["Reserved Instances", "Savings Plans", "Compute Optimizer"],
  },
  {
    id: "fc-cost-12",
    domain: "cost",
    front: "Data transfer cost rule",
    backEn:
      "Inbound to AWS = free. Outbound to internet + cross-Region + cross-AZ = charged. Use CloudFront to cut egress and minimize unnecessary cross-Region/AZ movement.",
    backAr:
      "الدخول لـ AWS = مجاني. الخروج للإنترنت + cross-Region + cross-AZ = مدفوع. استخدم CloudFront لتقليل الـ egress وقلّل النقل غير الضروري cross-Region/AZ.",
    services: ["Data Transfer", "CloudFront"],
  },
  {
    id: "fc-cost-13",
    domain: "cost",
    front: "S3 vs EBS vs EFS (cost angle)",
    backEn:
      "S3 = cheapest for objects (no block/file needs). EBS = block storage for ONE instance. EFS = shared file storage across instances (higher cost). Pick the cheapest that fits the access pattern.",
    backAr:
      "S3 = الأرخص للـ objects (مفيش حاجة block/file). EBS = block لـ instance واحد. EFS = ملفات مشتركة بين instances (أغلى). اختار الأرخص اللي يناسب نمط الوصول.",
    services: ["S3", "EBS", "EFS"],
  },
  {
    id: "fc-cost-14",
    domain: "cost",
    front: "Serverless / Lambda vs EC2 for bursty workloads",
    backEn:
      "Lambda bills only per request + duration (zero cost when idle) — cheaper for bursty/intermittent workloads. Always-on EC2 (even reserved) pays for idle time.",
    backAr:
      "Lambda بتتحاسب على الـ requests + المدة بس (صفر تكلفة وقت الخمول) — أرخص للأحمال المتقطّعة. الـ EC2 الدائم (حتى reserved) بيدفع وقت الخمول.",
    services: ["Lambda", "EC2"],
  },

  // ---------------- Patterns ----------------
  {
    id: "fc-pat-01",
    domain: "patterns",
    front: "Three-tier architecture",
    backEn:
      "Web tier (public subnet, ALB/CloudFront) → App tier (private subnet, ASG/EC2) → DB tier (private subnet, RDS Multi-AZ). Each tier scales & is secured independently; DB never internet-facing.",
    backAr:
      "Web tier (public، ALB/CloudFront) → App tier (private، ASG/EC2) → DB tier (private، RDS Multi-AZ). كل طبقة بتـ scale وتتأمّن لوحدها؛ والـ DB مش مكشوفة للإنترنت.",
    services: ["Three-Tier"],
  },
  {
    id: "fc-pat-02",
    domain: "patterns",
    front: "Strangler Fig migration pattern",
    backEn:
      "Incrementally replace a monolith feature-by-feature, routing via API Gateway/ALB to old or new system. Safe, reversible — avoids a risky big-bang rewrite.",
    backAr:
      "استبدال الـ monolith تدريجيًا feature-by-feature، بالتوجيه عبر API Gateway/ALB للنظام القديم أو الجديد. آمن وقابل للتراجع — بيتجنّب الـ big-bang rewrite.",
    services: ["Strangler Fig", "Migration"],
  },
  {
    id: "fc-pat-03",
    domain: "patterns",
    front: "Deployment: All-at-once / Rolling / Blue-Green / Canary",
    backEn:
      "All-at-once = fast/cheap, downtime. Rolling = batches, no extra env. Blue/Green = two envs, zero downtime + instant rollback. Canary = small % first, ramp up, least blast radius.",
    backAr:
      "All-at-once = سريع/أرخص، فيه downtime. Rolling = دفعات، بدون بيئة إضافية. Blue/Green = بيئتين، صفر downtime + rollback فوري. Canary = نسبة صغيرة الأول ثم زيادة، أقل تأثير.",
    services: ["Deployment"],
  },
  {
    id: "fc-pat-04",
    domain: "patterns",
    front: "Event-Driven / Fan-out / CQRS",
    backEn:
      "Event-Driven = components talk via events (SNS/SQS/EventBridge), decoupled. Fan-out = one event → many SQS queues. CQRS = separate read store from write store when reads ≫ writes.",
    backAr:
      "Event-Driven = المكوّنات بتتكلّم بالأحداث (SNS/SQS/EventBridge)، مفصولة. Fan-out = حدث واحد → عدة SQS queues. CQRS = فصل مخزن القراءة عن الكتابة لما القراءة ≫ الكتابة.",
    services: ["EventBridge", "SNS", "SQS", "CQRS"],
  },
  {
    id: "fc-pat-05",
    domain: "patterns",
    front: "Well-Architected: the 6 pillars",
    backEn:
      "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. The exam ties scenarios to these — understand each pillar's focus.",
    backAr:
      "Operational Excellence، Security، Reliability، Performance Efficiency، Cost Optimization، Sustainability. الامتحان بيربط السيناريوهات بيها — افهم تركيز كل ركن.",
    services: ["Well-Architected"],
  },
  {
    id: "fc-pat-06",
    domain: "patterns",
    front: "Exam golden keywords → service",
    backEn:
      "'highly available/fault tolerant' → Multi-AZ. 'most cost-effective' → Spot/Serverless/S3 tiers. 'disaster recovery/another region' → Multi-Region. 'decouple' → SQS/SNS. 'without managing servers' → Lambda/Fargate.",
    backAr:
      "'highly available/fault tolerant' → Multi-AZ. 'most cost-effective' → Spot/Serverless/S3 tiers. 'DR/another region' → Multi-Region. 'decouple' → SQS/SNS. 'without managing servers' → Lambda/Fargate.",
    services: ["Exam Tips"],
  },
];
