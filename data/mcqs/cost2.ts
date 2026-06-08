import type { MCQ } from "../types";

export const cost2Mcqs: MCQ[] = [
  {
    id: "cost-101",
    domain: "cost",
    type: "single",
    question:
      "A company commits to a steady EC2 workload but is willing to lock to a specific instance family in one Region for the deepest discount. Which purchase option gives the largest savings for that commitment?",
    options: [
      "EC2 Instance Savings Plans (or Standard RIs) for that family/Region",
      "Compute Savings Plans with full flexibility",
      "On-Demand",
      "Spot",
    ],
    correct: [0],
    explanationEn:
      "EC2 Instance Savings Plans (and Standard RIs) give the deepest discount in exchange for committing to a specific instance family in a Region. Compute Savings Plans trade some discount for flexibility.",
    explanationAr:
      "الـ EC2 Instance Savings Plans (والـ Standard RIs) بتدّي أعمق خصم مقابل الالتزام بعائلة instance في region. الـ Compute Savings Plans بتتنازل عن جزء من الخصم مقابل المرونة.",
    whyWrongEn:
      "Compute Savings Plans are slightly less discounted (more flexible); On-Demand is most expensive; Spot can't be used for steady, uninterruptible workloads.",
    whyWrongAr:
      "الـ Compute Savings Plans خصمها أقل شوية (أكثر مرونة)؛ والـ On-Demand الأغلى؛ والـ Spot مينفعش للأحمال الثابتة غير القابلة للانقطاع.",
    services: ["EC2 Instance Savings Plans", "Reserved Instances"],
    difficulty: "medium",
  },
  {
    id: "cost-102",
    domain: "cost",
    type: "single",
    question:
      "Containerized batch jobs are fault-tolerant and the team wants the cheapest way to run them on Fargate. Which option should they use?",
    options: [
      "AWS Fargate Spot",
      "Fargate on-demand sized for peak",
      "Dedicated Hosts",
      "Reserved EC2",
    ],
    correct: [0],
    explanationEn:
      "Fargate Spot runs interruption-tolerant containers at a large discount (similar to EC2 Spot) — ideal for fault-tolerant batch work.",
    explanationAr:
      "الـ Fargate Spot بيشغّل containers متحمّلة للانقطاع بخصم كبير (زي EC2 Spot) — مثالي للـ batch المتحمّل للأعطال.",
    whyWrongEn:
      "On-demand Fargate is more expensive; Dedicated Hosts and Reserved EC2 don't apply to cheap, interruptible Fargate batch.",
    whyWrongAr:
      "الـ Fargate on-demand أغلى؛ والـ Dedicated Hosts و Reserved EC2 مالهمش علاقة بـ batch Fargate الرخيص القابل للانقطاع.",
    services: ["Fargate Spot", "ECS"],
    difficulty: "medium",
  },
  {
    id: "cost-103",
    domain: "cost",
    type: "single",
    question:
      "Developers leave non-production EC2 instances running 24/7, but they're only needed during business hours. What is the most cost-effective fix?",
    options: [
      "Automatically stop/start instances off-hours (e.g., Instance Scheduler or an EventBridge + Lambda schedule)",
      "Buy 3-year Reserved Instances for them",
      "Move them to Dedicated Hosts",
      "Upsize the instances",
    ],
    correct: [0],
    explanationEn:
      "Scheduling stop/start so non-prod instances run only during business hours eliminates paying for idle nights/weekends — large savings on dev/test.",
    explanationAr:
      "جدولة stop/start فالـ non-prod تشتغل في ساعات العمل بس بيلغي الدفع لليالي/الويك إند — توفير كبير للـ dev/test.",
    whyWrongEn:
      "Reserving idle instances pays for unused time; Dedicated Hosts and upsizing increase cost, not reduce it.",
    whyWrongAr:
      "حجز instances خاملة بيدفع لوقت غير مستخدم؛ والـ Dedicated Hosts والتكبير بيزوّدوا التكلفة مش يقلّلوها.",
    services: ["EC2", "Instance Scheduler", "EventBridge"],
    difficulty: "medium",
  },
  {
    id: "cost-104",
    domain: "cost",
    type: "single",
    question:
      "EC2 instances in private subnets download large volumes of data from Amazon S3 through a NAT gateway, generating high NAT data-processing charges. What reduces these costs?",
    options: [
      "Add a Gateway VPC endpoint for S3 so traffic bypasses the NAT gateway (free)",
      "Use a bigger NAT gateway",
      "Add a second internet gateway",
      "Enable S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "A Gateway VPC endpoint for S3 routes traffic privately without the NAT gateway, eliminating NAT data-processing charges for S3 access (and it's free).",
    explanationAr:
      "الـ Gateway VPC endpoint لـ S3 بيمرّر الترافيك بشكل خاص من غير NAT، فبيلغي رسوم معالجة بيانات الـ NAT لوصول S3 (وهو مجاني).",
    whyWrongEn:
      "A bigger NAT still charges per GB; a second internet gateway doesn't reduce NAT cost; Versioning is unrelated.",
    whyWrongAr:
      "NAT أكبر لسه بيتحاسب بالـ GB؛ وinternet gateway تاني مبيقلّلش تكلفة الـ NAT؛ والـ Versioning مالوش علاقة.",
    services: ["VPC Endpoint", "NAT Gateway", "S3"],
    difficulty: "hard",
  },
  {
    id: "cost-105",
    domain: "cost",
    type: "single",
    question:
      "A company wants automatic alerts when its spend shows an unusual spike pattern, beyond fixed budget thresholds, using ML. Which service should they use?",
    options: [
      "AWS Cost Anomaly Detection",
      "AWS Budgets fixed threshold only",
      "Amazon CloudWatch CPU alarms",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "AWS Cost Anomaly Detection uses machine learning to detect unusual spend patterns and alerts you — catching anomalies a fixed budget threshold would miss.",
    explanationAr:
      "الـ AWS Cost Anomaly Detection بيستخدم ML لكشف أنماط إنفاق غير عادية وينبّهك — بيمسك الشذوذ اللي الحد الثابت مش هيمسكه.",
    whyWrongEn:
      "Fixed Budgets only catch known thresholds; CloudWatch CPU alarms are performance, not spend; Config is configuration compliance.",
    whyWrongAr:
      "الـ Budgets الثابتة بتمسك الحدود المعروفة بس؛ وCloudWatch CPU للأداء مش الإنفاق؛ والـ Config للامتثال.",
    services: ["Cost Anomaly Detection", "Budgets"],
    difficulty: "medium",
  },
  {
    id: "cost-106",
    domain: "cost",
    type: "single",
    question:
      "Trusted Advisor reports many unattached EBS volumes and old snapshots accumulating cost. What is the appropriate cost action?",
    options: [
      "Identify and delete unused volumes/snapshots (and automate cleanup)",
      "Convert them all to io2",
      "Move them to a larger instance",
      "Enable Multi-AZ on them",
    ],
    correct: [0],
    explanationEn:
      "Deleting unattached volumes and obsolete snapshots removes ongoing storage charges; automate the cleanup (e.g., DLM retention) to prevent recurrence.",
    explanationAr:
      "حذف الـ volumes غير المربوطة والـ snapshots القديمة بيشيل رسوم تخزين مستمرة؛ وأتمت التنظيف (زي DLM retention) عشان ما يتكرّرش.",
    whyWrongEn:
      "Converting to io2 raises cost; volumes aren't attached to instances for sizing; Multi-AZ doesn't apply to idle volumes.",
    whyWrongAr:
      "التحويل لـ io2 بيرفع التكلفة؛ والـ volumes مش مربوطة بـ instances؛ والـ Multi-AZ مالوش علاقة بـ volumes خاملة.",
    services: ["EBS", "Trusted Advisor", "Snapshots"],
    difficulty: "easy",
  },
  {
    id: "cost-107",
    domain: "cost",
    type: "single",
    question:
      "A company runs a steady production RDS database 24/7 for the next 3 years and wants to reduce its cost. Which option is most cost-effective?",
    options: [
      "Purchase RDS Reserved Instances",
      "Run it On-Demand",
      "Use Spot for the database",
      "Switch to a larger instance",
    ],
    correct: [0],
    explanationEn:
      "RDS Reserved Instances significantly discount a steady, long-running database compared to On-Demand. (Spot isn't available for RDS.)",
    explanationAr:
      "الـ RDS Reserved Instances بتخصم بشكل كبير لقاعدة بيانات ثابتة طويلة المدى مقارنة بالـ On-Demand. (الـ Spot مش متاح لـ RDS.)",
    whyWrongEn:
      "On-Demand is most expensive for steady use; Spot isn't offered for RDS; upsizing increases cost.",
    whyWrongAr:
      "الـ On-Demand الأغلى للاستخدام الثابت؛ والـ Spot مش متاح لـ RDS؛ والتكبير بيزوّد التكلفة.",
    services: ["RDS", "Reserved Instances"],
    difficulty: "easy",
  },
  {
    id: "cost-108",
    domain: "cost",
    type: "single",
    question:
      "A company isn't sure which S3 objects are good candidates to move to cheaper storage classes. Which feature recommends transitions based on access patterns?",
    options: [
      "S3 Storage Class Analysis",
      "S3 Transfer Acceleration",
      "S3 Object Lock",
      "S3 Requester Pays",
    ],
    correct: [0],
    explanationEn:
      "S3 Storage Class Analysis observes access patterns and recommends when to transition objects to S3 Standard-IA, helping design lifecycle rules.",
    explanationAr:
      "الـ S3 Storage Class Analysis بيراقب أنماط الوصول ويوصّي إمتى تنقل الأوبجكتس لـ Standard-IA، فبيساعد في تصميم قواعد الـ lifecycle.",
    whyWrongEn:
      "Transfer Acceleration speeds uploads; Object Lock is WORM; Requester Pays shifts download cost to requesters.",
    whyWrongAr:
      "الـ Transfer Acceleration بيسرّع الرفع؛ والـ Object Lock WORM؛ والـ Requester Pays بينقل تكلفة التنزيل للطالب.",
    services: ["S3", "Storage Class Analysis"],
    difficulty: "medium",
  },
  {
    id: "cost-109",
    domain: "cost",
    type: "single",
    question:
      "A public dataset in S3 is downloaded heavily by external users, and the bucket owner doesn't want to pay the data-transfer costs. Which feature shifts download costs to the requester?",
    options: [
      "S3 Requester Pays",
      "S3 Intelligent-Tiering",
      "CloudFront",
      "S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "With S3 Requester Pays enabled, the requester (not the bucket owner) pays for request and data-transfer costs — common for shared public datasets.",
    explanationAr:
      "مع S3 Requester Pays، الطالب (مش صاحب الـ bucket) بيدفع تكلفة الطلبات والنقل — شائع للـ datasets العامة المشتركة.",
    whyWrongEn:
      "Intelligent-Tiering optimizes storage cost, not transfer ownership; CloudFront reduces but still bills the owner; Versioning is unrelated.",
    whyWrongAr:
      "الـ Intelligent-Tiering بيحسّن تكلفة التخزين مش ملكية النقل؛ والـ CloudFront بيقلّل لكن لسه بيحاسب المالك؛ والـ Versioning مالوش علاقة.",
    services: ["S3", "Requester Pays"],
    difficulty: "medium",
  },
  {
    id: "cost-110",
    domain: "cost",
    type: "single",
    question:
      "A company has many AWS accounts and wants combined volume discounts and one bill across them. Which AWS feature provides this?",
    options: [
      "Consolidated billing in AWS Organizations",
      "Separate invoices per account",
      "EC2 Reserved Instances only",
      "S3 lifecycle policies",
    ],
    correct: [0],
    explanationEn:
      "AWS Organizations consolidated billing aggregates usage across accounts for combined volume tiering and a single payer — and shares RIs/Savings Plans benefits.",
    explanationAr:
      "الـ consolidated billing في AWS Organizations بيجمّع الاستخدام عبر الحسابات لخصومات الحجم وفاتورة واحدة — وبيشارك مزايا الـ RIs/Savings Plans.",
    whyWrongEn:
      "Separate invoices forfeit volume discounts; RIs alone aren't account aggregation; S3 lifecycle is storage cost only.",
    whyWrongAr:
      "فواتير منفصلة بتضيّع خصومات الحجم؛ والـ RIs لوحدها مش تجميع حسابات؛ والـ S3 lifecycle لتكلفة التخزين بس.",
    services: ["Organizations", "Consolidated Billing"],
    difficulty: "easy",
  },
  {
    id: "cost-111",
    domain: "cost",
    type: "single",
    question:
      "A company wants the cheapest EBS volume type that still meets general-purpose SSD needs, noting gp3 pricing vs gp2. What should they choose for most workloads?",
    options: [
      "gp3 (cheaper per GB than gp2 with baseline IOPS/throughput included)",
      "io2 Block Express",
      "Provisioned IOPS for everything",
      "Magnetic (standard) legacy volumes",
    ],
    correct: [0],
    explanationEn:
      "gp3 is cheaper per GB than gp2 and includes a baseline of IOPS/throughput you can adjust independently — the default cost-effective SSD choice.",
    explanationAr:
      "الـ gp3 أرخص لكل GB من gp2 وبيشمل baseline من الـ IOPS/throughput تقدر تظبطها مستقلة — الاختيار الافتراضي الموفّر.",
    whyWrongEn:
      "io2/Provisioned IOPS cost more (only for high-end DBs); legacy magnetic is outdated and not recommended.",
    whyWrongAr:
      "الـ io2/Provisioned IOPS أغلى (للقواعد الراقية بس)؛ والـ magnetic القديم متقادم وغير موصى به.",
    services: ["EBS", "gp3", "gp2"],
    difficulty: "medium",
  },
  {
    id: "cost-112",
    domain: "cost",
    type: "single",
    question:
      "A company wants to reduce the cost of rarely accessed EBS snapshots kept for long-term retention. Which option helps?",
    options: [
      "Move them to the EBS Snapshots Archive tier",
      "Convert snapshots to io2",
      "Attach them to running instances",
      "Enable Multi-AZ",
    ],
    correct: [0],
    explanationEn:
      "The EBS Snapshots Archive tier lowers storage cost for snapshots you rarely need to restore, kept for long-term retention.",
    explanationAr:
      "الـ EBS Snapshots Archive tier بيقلّل تكلفة تخزين الـ snapshots اللي نادرًا تحتاج ترجعها، للاحتفاظ طويل الأمد.",
    whyWrongEn:
      "Snapshots aren't io2 volumes; you don't attach snapshots; Multi-AZ doesn't apply to snapshot storage cost.",
    whyWrongAr:
      "الـ snapshots مش volumes io2؛ ومتقدرش تركّب snapshot؛ والـ Multi-AZ مالوش علاقة بتكلفة تخزين الـ snapshots.",
    services: ["EBS", "Snapshots Archive"],
    difficulty: "medium",
  },
  {
    id: "cost-113",
    domain: "cost",
    type: "single",
    question:
      "A company wants to lower compute cost across EC2, Lambda, and Fargate while keeping flexibility to change instance types and services over a 1-year commitment. Which option fits best?",
    options: [
      "Compute Savings Plans",
      "Standard Reserved Instances tied to one type",
      "On-Demand only",
      "Dedicated Hosts",
    ],
    correct: [0],
    explanationEn:
      "Compute Savings Plans apply a discount across EC2 families/sizes/Regions and to Fargate and Lambda — maximum flexibility with a $/hour commitment.",
    explanationAr:
      "الـ Compute Savings Plans بتطبّق خصم عبر عائلات/أحجام/regions الـ EC2 وكمان Fargate و Lambda — أقصى مرونة بالتزام $/ساعة.",
    whyWrongEn:
      "Standard RIs lock to one instance type; On-Demand has no discount; Dedicated Hosts are for licensing/compliance, not flexible discounts.",
    whyWrongAr:
      "الـ Standard RIs بتقفل على نوع واحد؛ والـ On-Demand بدون خصم؛ والـ Dedicated Hosts للترخيص/الامتثال مش خصم مرن.",
    services: ["Savings Plans", "Lambda", "Fargate"],
    difficulty: "medium",
  },
  {
    id: "cost-114",
    domain: "cost",
    type: "single",
    question:
      "A steady-traffic DynamoDB table currently uses on-demand capacity and the team finds it more expensive than necessary for its predictable load. What is the more cost-effective choice?",
    options: [
      "Provisioned capacity with auto scaling (and consider reserved capacity)",
      "Keep on-demand for predictable steady load",
      "Move to RDS",
      "Use S3 instead",
    ],
    correct: [0],
    explanationEn:
      "For predictable, steady traffic, provisioned capacity with auto scaling (optionally reserved capacity) is cheaper than on-demand, which suits spiky/unpredictable loads.",
    explanationAr:
      "للترافيك الثابت المتوقّع، الـ provisioned capacity مع auto scaling (واختياريًا reserved capacity) أرخص من الـ on-demand اللي بيناسب الأحمال المتقطّعة.",
    whyWrongEn:
      "On-demand is best for unpredictable spikes (pricier for steady load); RDS/S3 are different data models, not a cost fix here.",
    whyWrongAr:
      "الـ on-demand الأفضل للموجات غير المتوقّعة (أغلى للحمل الثابت)؛ والـ RDS/S3 نماذج بيانات مختلفة مش حل تكلفة هنا.",
    services: ["DynamoDB", "Provisioned Capacity"],
    difficulty: "medium",
  },
  {
    id: "cost-115",
    domain: "cost",
    type: "single",
    question:
      "An archive must be retained for 10 years and is essentially never read. Which S3 storage class minimizes cost?",
    options: [
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Instant Retrieval",
    ],
    correct: [0],
    explanationEn:
      "Glacier Deep Archive is the lowest-cost class for long-term archives that are almost never accessed (retrieval in ~12 hours is acceptable).",
    explanationAr:
      "الـ Glacier Deep Archive الأرخص للأرشيف طويل الأمد نادر الوصول (استرجاع ~12 ساعة مقبول).",
    whyWrongEn:
      "Standard/Standard-IA cost far more for never-read data; Glacier Instant Retrieval costs more than Deep Archive (for ms access you don't need here).",
    whyWrongAr:
      "الـ Standard/Standard-IA أغلى بكتير لبيانات مش بتتقري؛ والـ Glacier Instant أغلى من Deep Archive (لوصول ms مش محتاجه).",
    services: ["S3", "Glacier Deep Archive"],
    difficulty: "easy",
  },
  {
    id: "cost-116",
    domain: "cost",
    type: "single",
    question:
      "A company wants to cut Lambda cost for a steady, high-volume function without hurting performance. Which two levers are most effective?",
    options: [
      "Tune memory with Power Tuning and run on Graviton (arm64)",
      "Always set memory to the maximum",
      "Add a NAT gateway",
      "Increase the timeout to 15 minutes",
    ],
    correct: [0],
    explanationEn:
      "Right-sizing memory (Power Tuning) finds the cheapest fast configuration, and Graviton/arm64 typically improves Lambda price-performance.",
    explanationAr:
      "ضبط الذاكرة (Power Tuning) بيلاقي أرخص إعداد سريع، والـ Graviton/arm64 بيحسّن price-performance للـ Lambda عادةً.",
    whyWrongEn:
      "Max memory overpays; NAT adds cost; a longer timeout doesn't reduce per-invocation cost.",
    whyWrongAr:
      "أقصى ذاكرة بيدفع زيادة؛ والـ NAT بيزوّد التكلفة؛ وtimeout أطول مبيقلّلش تكلفة الاستدعاء.",
    services: ["Lambda", "Power Tuning", "Graviton"],
    difficulty: "hard",
  },
  {
    id: "cost-117",
    domain: "cost",
    type: "single",
    question:
      "An Aurora database is I/O-intensive and the per-request I/O charges dominate the bill. Which configuration can make costs more predictable and potentially lower for high-I/O workloads?",
    options: [
      "Aurora I/O-Optimized cluster configuration",
      "Switch to Glacier",
      "Add a NAT gateway",
      "Use Spot Instances for the DB",
    ],
    correct: [0],
    explanationEn:
      "Aurora I/O-Optimized removes per-I/O charges in favor of predictable pricing — cost-effective for I/O-heavy workloads.",
    explanationAr:
      "الـ Aurora I/O-Optimized بيشيل رسوم الـ I/O لكل عملية لصالح تسعير ثابت — موفّر للأحمال كثيفة الـ I/O.",
    whyWrongEn:
      "Glacier is archival storage; NAT is networking; Spot isn't available for Aurora.",
    whyWrongAr:
      "الـ Glacier تخزين أرشيفي؛ والـ NAT شبكات؛ والـ Spot مش متاح لـ Aurora.",
    services: ["Aurora", "I/O-Optimized"],
    difficulty: "hard",
  },
  {
    id: "cost-118",
    domain: "cost",
    type: "single",
    question:
      "A web app serving a global audience from S3 incurs high cross-region/internet egress. Beyond CloudFront caching, which architectural habit reduces data-transfer cost between services?",
    options: [
      "Keep communicating services in the same Region/AZ and use VPC endpoints to avoid internet/NAT paths",
      "Spread every component across as many Regions as possible",
      "Always route internal traffic over the public internet",
      "Disable CloudFront",
    ],
    correct: [0],
    explanationEn:
      "Minimizing cross-Region/cross-AZ transfer and using VPC endpoints keeps traffic on the private AWS network, reducing data-transfer charges.",
    explanationAr:
      "تقليل النقل cross-Region/cross-AZ واستخدام VPC endpoints بيخلّي الترافيك على شبكة AWS الخاصة، فبيقلّل رسوم النقل.",
    whyWrongEn:
      "Spreading everything across Regions increases cross-Region transfer; routing internal traffic over the internet adds egress; disabling CloudFront raises origin egress.",
    whyWrongAr:
      "نشر كل حاجة عبر regions بيزوّد النقل؛ وتمرير الترافيك الداخلي على الإنترنت بيزوّد الـ egress؛ وتعطيل CloudFront بيرفع egress الأصل.",
    services: ["Data Transfer", "VPC Endpoint", "CloudFront"],
    difficulty: "medium",
  },
  {
    id: "cost-119",
    domain: "cost",
    type: "single",
    question:
      "A startup's traffic is unpredictable and often near zero between bursts. Which architecture minimizes cost by charging only for actual usage?",
    options: [
      "Serverless: API Gateway + Lambda + DynamoDB on-demand",
      "A fleet of always-on EC2 instances",
      "A 24/7 Multi-AZ RDS sized for peak",
      "Dedicated Hosts",
    ],
    correct: [0],
    explanationEn:
      "A serverless stack scales to zero and bills per request/usage, so idle periods cost almost nothing — ideal for unpredictable, bursty traffic.",
    explanationAr:
      "الـ stack الـ serverless بينزل لصفر وبيتحاسب بالاستخدام، فأوقات الخمول بتكلّف تقريبًا صفر — مثالي للترافيك المتقطّع غير المتوقّع.",
    whyWrongEn:
      "Always-on EC2, peak-sized Multi-AZ RDS, and Dedicated Hosts all pay for idle capacity.",
    whyWrongAr:
      "الـ EC2 الدائم و Multi-AZ RDS للذروة و Dedicated Hosts كلها بتدفع للسعة الخاملة.",
    services: ["Lambda", "API Gateway", "DynamoDB"],
    difficulty: "easy",
  },
  {
    id: "cost-120",
    domain: "cost",
    type: "single",
    question:
      "A company wants to break down its AWS bill by team and project to enforce accountability, and to filter these in Cost Explorer. What must be set up first?",
    options: [
      "Apply cost allocation tags and activate them in the billing console",
      "Create one account per employee",
      "Enable S3 Versioning",
      "Buy Reserved Instances",
    ],
    correct: [0],
    explanationEn:
      "Cost allocation tags (activated in billing) let you group and filter costs by team/project across the bill and Cost Explorer.",
    explanationAr:
      "الـ cost allocation tags (المفعّلة في الفوترة) بتخلّيك تجمّع وتفلتر التكلفة حسب الفريق/المشروع في الفاتورة و Cost Explorer.",
    whyWrongEn:
      "An account per employee is overkill; Versioning and RIs don't categorize spend by team/project.",
    whyWrongAr:
      "حساب لكل موظف مبالغة؛ والـ Versioning و RIs مبيصنّفوش الإنفاق حسب الفريق/المشروع.",
    services: ["Cost Allocation Tags", "Cost Explorer"],
    difficulty: "easy",
  },
  {
    id: "cost-121",
    domain: "cost",
    type: "multi",
    question:
      "A company runs a fault-tolerant, stateless web fleet and a large nightly batch job and wants to cut compute cost aggressively. Which TWO actions fit best? (Select TWO.)",
    options: [
      "Run the stateless web fleet largely on Spot via an Auto Scaling mixed-instances policy (with On-Demand baseline).",
      "Run the interruption-tolerant nightly batch on Spot.",
      "Run the entire production database on Spot.",
      "Use On-Demand for everything to be safe.",
      "Move all workloads to Dedicated Hosts.",
    ],
    correct: [0, 1],
    explanationEn:
      "Both the stateless fleet and the interruption-tolerant batch are ideal for Spot's deep discounts. Databases shouldn't run on Spot, and all-On-Demand or Dedicated Hosts maximize cost.",
    explanationAr:
      "الـ fleet الـ stateless والـ batch المتحمّل للانقطاع الاتنين مثاليين لخصومات الـ Spot. القواعد مينفعش على Spot، والـ On-Demand للكل أو Dedicated Hosts بيكبّروا التكلفة.",
    whyWrongEn:
      "Production databases can't tolerate Spot interruptions; all-On-Demand or Dedicated Hosts are the most expensive choices.",
    whyWrongAr:
      "قواعد الإنتاج مبتستحملش انقطاع الـ Spot؛ والـ On-Demand للكل أو Dedicated Hosts أغلى الخيارات.",
    services: ["Spot Instances", "Auto Scaling", "Fargate Spot"],
    difficulty: "medium",
  },
  {
    id: "cost-122",
    domain: "cost",
    type: "single",
    question:
      "A company over-provisioned its EC2 fleet 'to be safe' and now wants concrete, data-driven downsizing recommendations to cut cost. Which tool should they consult?",
    options: [
      "AWS Compute Optimizer (right-sizing recommendations)",
      "AWS WAF",
      "Amazon Macie",
      "AWS Shield",
    ],
    correct: [0],
    explanationEn:
      "Compute Optimizer analyzes real utilization and recommends smaller/cheaper instance types where you're over-provisioned.",
    explanationAr:
      "الـ Compute Optimizer بيحلّل الاستخدام الفعلي ويوصّي بأنواع أصغر/أرخص حيث في over-provisioning.",
    whyWrongEn:
      "WAF, Macie, and Shield are security services — they don't recommend right-sizing.",
    whyWrongAr:
      "الـ WAF و Macie و Shield خدمات أمان — مبيوصّوش بالـ right-sizing.",
    services: ["Compute Optimizer", "EC2"],
    difficulty: "easy",
  },
];
