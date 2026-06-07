import type { MCQ } from "../types";

export const patternsMcqs: MCQ[] = [
  {
    id: "pat-001",
    domain: "patterns",
    type: "single",
    question:
      "A company is designing a classic web application and wants to separate presentation, business logic, and data into independently scalable and securable layers. The data layer must never be directly reachable from the internet. Which architecture should they use?",
    options: [
      "Three-tier architecture: public web tier (ALB/EC2), private app tier (ASG/EC2), private data tier (RDS Multi-AZ).",
      "A single EC2 instance running everything.",
      "Put the database in a public subnet for easy access.",
      "Two-tier with the database on the web servers.",
    ],
    correct: [0],
    explanationEn:
      "A three-tier design puts the web tier in public subnets behind an ALB, the app tier in private subnets (Auto Scaling), and the data tier (e.g., RDS Multi-AZ) in isolated private subnets—so the database is never internet-facing and each tier scales independently.",
    explanationAr:
      "تصميم الـ Three-tier بيحط الـ web tier في public subnets ورا ALB، والـ app tier في private subnets (Auto Scaling)، والـ data tier (زي RDS Multi-AZ) في private subnets معزولة — فقاعدة البيانات مش مكشوفة للإنترنت وكل طبقة بتـ scale لوحدها.",
    services: ["Three-Tier", "ALB", "Auto Scaling", "RDS Multi-AZ"],
    difficulty: "easy",
  },
  {
    id: "pat-002",
    domain: "patterns",
    type: "single",
    question:
      "A team wants a fully serverless backend that automatically scales, has zero server management, and bills only for usage. Which combination of services represents this pattern?",
    options: [
      "API Gateway + AWS Lambda + Amazon DynamoDB",
      "ALB + EC2 + RDS",
      "CloudFront + EC2 + EBS",
      "NLB + ECS on EC2 + Aurora",
    ],
    correct: [0],
    explanationEn:
      "The canonical serverless stack is API Gateway (entry point) + Lambda (logic) + DynamoDB (data). It scales automatically, requires no server management, and bills per use—ideal for intermittent/unpredictable workloads.",
    explanationAr:
      "الـ stack الـ serverless الكلاسيكي هو API Gateway (المدخل) + Lambda (المنطق) + DynamoDB (الداتا). بيتوسّع تلقائيًا، بدون إدارة سيرفرات، وبيتحاسب بالاستخدام — مثالي للأحمال المتقطّعة/غير المتوقّعة.",
    services: ["API Gateway", "Lambda", "DynamoDB", "Serverless"],
    difficulty: "easy",
  },
  {
    id: "pat-003",
    domain: "patterns",
    type: "single",
    question:
      "A company must gradually migrate a legacy monolith to a new system without a risky 'big bang' rewrite, routing each feature to the old or new system as it is rebuilt. Which migration pattern describes this?",
    options: [
      "Strangler Fig pattern (route via API Gateway/ALB, replace feature by feature)",
      "Lift-and-shift everything at once",
      "Big bang rewrite",
      "Rip and replace the database first",
    ],
    correct: [0],
    explanationEn:
      "The Strangler Fig pattern incrementally replaces a monolith feature by feature, typically routing through an API Gateway/ALB to the old or new system. It is safer and reversible, avoiding a risky big-bang rewrite.",
    explanationAr:
      "نمط الـ Strangler Fig بيستبدل الـ monolith تدريجيًا feature بـ feature، وغالبًا بيوجّه عبر API Gateway/ALB للنظام القديم أو الجديد. أأمن وقابل للتراجع، وبيتجنّب الـ big-bang rewrite الخطر.",
    services: ["Strangler Fig", "API Gateway", "ALB", "Migration"],
    difficulty: "medium",
  },
  {
    id: "pat-004",
    domain: "patterns",
    type: "single",
    question:
      "A company needs zero-downtime deployments with instant rollback by switching all traffic between two identical environments (old and new). Which deployment strategy is this?",
    options: [
      "Blue/Green deployment",
      "All at once deployment",
      "Rolling deployment",
      "In-place patching",
    ],
    correct: [0],
    explanationEn:
      "Blue/Green keeps two full environments; traffic switches from blue (old) to green (new) at once, giving zero downtime and instant rollback (switch back to blue). It costs more because two environments run during the switch.",
    explanationAr:
      "الـ Blue/Green بيحتفظ ببيئتين كاملتين؛ الترافيك بيتبدّل من الـ blue (القديم) للـ green (الجديد) دفعة واحدة، فصفر downtime و rollback فوري (ارجع للـ blue). أغلى لأن بيئتين بيشتغلوا وقت التبديل.",
    services: ["Blue/Green", "Deployment"],
    difficulty: "medium",
  },
  {
    id: "pat-005",
    domain: "patterns",
    type: "single",
    question:
      "A team wants to release a new version to a small percentage of users first, monitor it, and gradually increase traffic if healthy—minimizing blast radius. Which deployment strategy is this?",
    options: [
      "Canary deployment",
      "All at once",
      "Blue/Green with full cutover only",
      "Recreate",
    ],
    correct: [0],
    explanationEn:
      "Canary deployments shift a small percentage of traffic to the new version, monitor, then gradually ramp up. This detects issues early with minimal blast radius. Route 53 weighted records or load balancer rules can implement it.",
    explanationAr:
      "الـ Canary بيوجّه نسبة صغيرة من الترافيك للنسخة الجديدة، يراقب، وبعدين يزوّد تدريجيًا. ده بيكتشف المشاكل بدري بأقل تأثير. ممكن تنفيذه بـ Route 53 weighted أو قواعد الـ load balancer.",
    services: ["Canary", "Deployment", "Route 53"],
    difficulty: "medium",
  },
  {
    id: "pat-006",
    domain: "patterns",
    type: "single",
    question:
      "An e-commerce system wants components to communicate through events rather than direct synchronous calls, so each service can scale and fail independently. Which architectural approach should they adopt?",
    options: [
      "Event-driven architecture using SNS/SQS/EventBridge for decoupling",
      "Tightly coupled synchronous REST calls between all services",
      "A single shared database with direct writes from every component",
      "A monolith with in-process function calls",
    ],
    correct: [0],
    explanationEn:
      "Event-driven architecture decouples components via events (SNS, SQS, EventBridge), so producers and consumers scale and fail independently and the system is more resilient. Direct synchronous coupling reduces resilience.",
    explanationAr:
      "الـ Event-driven بيفصل المكوّنات عبر events (SNS، SQS، EventBridge)، فالمنتِج والمستهلك بيـ scale ويفشلوا باستقلال والنظام أكثر مرونة. الربط المتزامن المباشر بيقلّل المرونة.",
    services: ["EventBridge", "SNS", "SQS", "Event-Driven"],
    difficulty: "medium",
  },
  {
    id: "pat-007",
    domain: "patterns",
    type: "single",
    question:
      "A read-heavy system has far more reads than writes and wants to optimize each path separately—writes to one model/store and reads from a different, read-optimized store (e.g., DynamoDB writes with OpenSearch/read replicas for reads). Which pattern is this?",
    options: [
      "CQRS (Command Query Responsibility Segregation)",
      "Strangler Fig",
      "Fan-out",
      "Three-tier",
    ],
    correct: [0],
    explanationEn:
      "CQRS separates the write path (commands) from the read path (queries) using different models/stores, letting each be optimized and scaled independently—useful when reads vastly outnumber writes.",
    explanationAr:
      "الـ CQRS بيفصل مسار الكتابة (commands) عن مسار القراءة (queries) باستخدام models/مخازن مختلفة، فكل واحد يتحسّن ويـ scale لوحده — مفيد لما القراءات أكتر بكتير من الكتابة.",
    services: ["CQRS", "DynamoDB", "OpenSearch"],
    difficulty: "hard",
  },
  {
    id: "pat-008",
    domain: "patterns",
    type: "single",
    question:
      "Within the AWS Well-Architected Framework, which pillar focuses on protecting data and systems through least privilege, encryption, and traceability?",
    options: [
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
    ],
    correct: [0],
    explanationEn:
      "The Security pillar covers identity and access (least privilege), data protection (encryption), and traceability (logging/auditing with services like IAM, KMS, CloudTrail, GuardDuty).",
    explanationAr:
      "ركن الـ Security بيغطي الهوية والوصول (least privilege)، حماية البيانات (التشفير)، والتتبّع (logging/auditing بخدمات زي IAM و KMS و CloudTrail و GuardDuty).",
    services: ["Well-Architected", "Security", "IAM", "KMS"],
    difficulty: "easy",
  },
  {
    id: "pat-009",
    domain: "patterns",
    type: "single",
    question:
      "Which Well-Architected pillar is most concerned with the ability to recover from failures and meet demand through Multi-AZ, Auto Scaling, and backups?",
    options: [
      "Reliability",
      "Operational Excellence",
      "Cost Optimization",
      "Sustainability",
    ],
    correct: [0],
    explanationEn:
      "The Reliability pillar focuses on recovering from failures and meeting demand—using Multi-AZ, Auto Scaling, health checks, and backups. Operational Excellence is about running and improving operations (e.g., IaC, runbooks).",
    explanationAr:
      "ركن الـ Reliability بيركّز على التعافي من الأعطال وتلبية الطلب — بـ Multi-AZ و Auto Scaling و health checks و backups. الـ Operational Excellence عن تشغيل وتحسين العمليات (زي IaC و runbooks).",
    services: ["Well-Architected", "Reliability", "Multi-AZ", "Auto Scaling"],
    difficulty: "easy",
  },
  {
    id: "pat-010",
    domain: "patterns",
    type: "single",
    question:
      "A single order event must be delivered to multiple independent downstream services (billing, shipping, analytics), each with its own queue for independent, parallel processing. Which pattern and services implement this best?",
    options: [
      "Fan-out using an SNS topic publishing to multiple SQS queues",
      "A single SQS queue shared by all three services",
      "Direct synchronous HTTP calls to all three services",
      "Writing the event to one DynamoDB item read by all",
    ],
    correct: [0],
    explanationEn:
      "The fan-out pattern (SNS to multiple SQS queues) delivers a copy of each event to every subscribed queue, so each downstream service processes independently and in parallel with full decoupling.",
    explanationAr:
      "نمط الـ Fan-out (SNS لعدة SQS queues) بيوصّل نسخة من كل حدث لكل طابور مشترك، فكل خدمة downstream بتعالج باستقلال وبالتوازي مع فصل كامل.",
    services: ["Fan-out", "SNS", "SQS"],
    difficulty: "medium",
  },
];
