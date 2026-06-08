import type { MCQ } from "../types";

export const patterns2Mcqs: MCQ[] = [
  {
    id: "pat-101",
    domain: "patterns",
    type: "single",
    question:
      "A team wants repeatable, version-controlled, automated provisioning of their AWS infrastructure to avoid manual console drift. Which approach aligns with the Operational Excellence pillar?",
    options: [
      "Infrastructure as Code with AWS CloudFormation (or CDK)",
      "Manually clicking through the console for each environment",
      "Emailing setup steps to teammates",
      "Editing resources ad hoc in production",
    ],
    correct: [0],
    explanationEn:
      "Infrastructure as Code (CloudFormation/CDK) makes provisioning repeatable, reviewable, and automated — a core Operational Excellence practice that prevents configuration drift.",
    explanationAr:
      "الـ Infrastructure as Code (CloudFormation/CDK) بيخلّي التجهيز قابل للتكرار والمراجعة ومؤتمت — ممارسة أساسية في Operational Excellence وبتمنع الـ drift.",
    whyWrongEn:
      "Manual console steps, emailed instructions, and ad-hoc prod edits cause drift and aren't repeatable or auditable.",
    whyWrongAr:
      "الخطوات اليدوية والتعليمات بالإيميل والتعديل العشوائي في الإنتاج بتسبب drift ومش قابلة للتكرار أو التدقيق.",
    services: ["CloudFormation", "CDK", "IaC", "Well-Architected"],
    difficulty: "easy",
  },
  {
    id: "pat-102",
    domain: "patterns",
    type: "single",
    question:
      "A startup is building event-driven microservices with sporadic traffic and wants the least operational overhead, paying only when code runs. Which compute model fits best?",
    options: [
      "AWS Lambda functions per microservice",
      "A large always-on EKS cluster",
      "One monolithic EC2 instance",
      "Self-managed Kubernetes on-prem",
    ],
    correct: [0],
    explanationEn:
      "Lambda fits event-driven, sporadic microservices with no servers to manage and pay-per-use billing — the lowest operational overhead for this profile.",
    explanationAr:
      "الـ Lambda بيناسب microservices event-driven متقطّعة بدون سيرفرات تديرها وبدفع حسب الاستخدام — أقل overhead تشغيلي.",
    whyWrongEn:
      "An always-on EKS cluster or EC2 monolith pays for idle and adds ops burden; on-prem Kubernetes is the opposite of low overhead.",
    whyWrongAr:
      "كلاستر EKS دائم أو monolith على EC2 بيدفع للخمول ويزوّد العبء؛ وKubernetes on-prem عكس قلّة الـ overhead.",
    services: ["Lambda", "Microservices"],
    difficulty: "medium",
  },
  {
    id: "pat-103",
    domain: "patterns",
    type: "single",
    question:
      "A distributed order workflow spans payment, inventory, and shipping services and must handle partial failures by running compensating actions (e.g., refund if shipping fails). Which approach implements this saga reliably?",
    options: [
      "AWS Step Functions orchestrating the steps with error handling and compensation",
      "A single synchronous chain of HTTP calls with no rollback",
      "A cron job that retries everything",
      "Storing all state in one EC2 instance's memory",
    ],
    correct: [0],
    explanationEn:
      "Step Functions can orchestrate a saga: it coordinates steps, catches failures, and invokes compensating actions (refunds/rollbacks) reliably with visible state.",
    explanationAr:
      "الـ Step Functions تقدر تنسّق الـ saga: بتنسّق الخطوات وتمسك الأعطال وتنفّذ إجراءات تعويضية (refunds/rollbacks) بثبات وبحالة مرئية.",
    whyWrongEn:
      "A synchronous chain with no rollback can't compensate; a blunt cron retry risks duplicate side effects; in-memory state is lost on failure.",
    whyWrongAr:
      "سلسلة متزامنة بدون rollback مبتعوّضش؛ وretry بالـ cron بيخاطر بتكرار التأثيرات؛ والحالة في الذاكرة بتضيع عند العطل.",
    services: ["Step Functions", "Saga"],
    difficulty: "hard",
  },
  {
    id: "pat-104",
    domain: "patterns",
    type: "single",
    question:
      "Two services are tightly coupled by direct synchronous calls, so an outage in one cascades to the other. Which change best reduces this blast radius?",
    options: [
      "Introduce asynchronous messaging (SQS/SNS/EventBridge) to loosely couple them",
      "Merge them into one monolith",
      "Call the dependency twice for reliability",
      "Increase the instance size",
    ],
    correct: [0],
    explanationEn:
      "Loose coupling via asynchronous messaging lets each service operate and recover independently, so one failing component doesn't immediately take down the other.",
    explanationAr:
      "الـ loose coupling عبر الرسائل غير المتزامنة بيخلّي كل خدمة تشتغل وتتعافى لوحدها، فعطل واحدة مايوقّعش التانية فورًا.",
    whyWrongEn:
      "A monolith increases coupling; calling twice adds load; a bigger instance doesn't address coupling.",
    whyWrongAr:
      "الـ monolith بيزوّد الترابط؛ والنداء مرتين بيزوّد الحمل؛ وinstance أكبر مالوش علاقة بالترابط.",
    services: ["SQS", "SNS", "EventBridge", "Decoupling"],
    difficulty: "medium",
  },
  {
    id: "pat-105",
    domain: "patterns",
    type: "single",
    question:
      "A company wants many services to react independently to events without a central controller dictating the flow (favoring choreography over orchestration). Which service best supports event choreography?",
    options: [
      "Amazon EventBridge (event bus with rules and many targets)",
      "AWS Step Functions as a central orchestrator",
      "A single Lambda calling every service in order",
      "Amazon RDS triggers",
    ],
    correct: [0],
    explanationEn:
      "EventBridge enables choreography: producers emit events and any number of consumers react via rules, with no central controller — flexible, loosely coupled.",
    explanationAr:
      "الـ EventBridge بيمكّن الـ choreography: المنتِجون يطلّعوا events وأي عدد مستهلكين يتفاعلوا عبر rules، بدون متحكّم مركزي — مرن وloosely coupled.",
    whyWrongEn:
      "Step Functions and a single sequential Lambda are orchestration (central control); RDS triggers run in the database.",
    whyWrongAr:
      "الـ Step Functions و Lambda المتسلسل orchestration (تحكّم مركزي)؛ وtriggers الـ RDS بتشتغل في الداتابيز.",
    services: ["EventBridge", "Choreography", "Step Functions"],
    difficulty: "medium",
  },
  {
    id: "pat-106",
    domain: "patterns",
    type: "single",
    question:
      "An at-least-once messaging system may deliver duplicate messages. To prevent double-processing (e.g., charging a customer twice), which design practice should the consumer apply?",
    options: [
      "Idempotent processing (e.g., dedupe by a unique message/idempotency key)",
      "Process every message as fast as possible without checks",
      "Disable retries entirely",
      "Store nothing about processed messages",
    ],
    correct: [0],
    explanationEn:
      "Designing consumers to be idempotent (tracking a unique key so re-delivered messages have no extra effect) safely handles at-least-once delivery and duplicates.",
    explanationAr:
      "تصميم المستهلك ليكون idempotent (يتتبّع مفتاح فريد فالرسالة المعادة مالهاش تأثير زيادة) بيتعامل بأمان مع التسليم at-least-once والتكرار.",
    whyWrongEn:
      "Processing blindly causes double effects; disabling retries drops transient failures; tracking nothing makes dedupe impossible.",
    whyWrongAr:
      "المعالجة العمياء بتسبب تأثير مزدوج؛ وتعطيل الـ retries بيضيّع الأعطال المؤقتة؛ وعدم التتبّع بيمنع الـ dedupe.",
    services: ["SQS", "Idempotency"],
    difficulty: "hard",
  },
  {
    id: "pat-107",
    domain: "patterns",
    type: "single",
    question:
      "A web application's EC2 servers spend significant CPU serving static assets (images, CSS, JS). Which pattern offloads this and improves scalability and cost?",
    options: [
      "Serve static assets from S3 + CloudFront, leaving EC2 for dynamic logic",
      "Add more EBS volumes to the servers",
      "Store static assets in RDS",
      "Increase the NACL rules",
    ],
    correct: [0],
    explanationEn:
      "Offloading static content to S3 and caching it at the CloudFront edge frees the compute tier for dynamic work and scales globally at low cost.",
    explanationAr:
      "نقل المحتوى الثابت لـ S3 وعمل cache في CloudFront بيفضّي طبقة الحوسبة للشغل الديناميكي وبيتوسّع عالميًا بتكلفة قليلة.",
    whyWrongEn:
      "More EBS doesn't reduce serving load; RDS is for relational data, not static files; NACLs are network ACLs.",
    whyWrongAr:
      "EBS أكتر مبيقلّلش حمل التقديم؛ والـ RDS لبيانات علائقية مش ملفات ثابتة؛ والـ NACL ACLs شبكية.",
    services: ["S3", "CloudFront", "Three-Tier"],
    difficulty: "easy",
  },
  {
    id: "pat-108",
    domain: "patterns",
    type: "single",
    question:
      "Within the Well-Architected Framework, choosing the right instance/database type, using caching, and matching resources to workload demand primarily serves which pillar?",
    options: [
      "Performance Efficiency",
      "Security",
      "Cost Optimization",
      "Operational Excellence",
    ],
    correct: [0],
    explanationEn:
      "Selecting the right resource types, using caching, and right-matching capacity to demand are core Performance Efficiency practices.",
    explanationAr:
      "اختيار الأنواع الصح واستخدام الـ caching ومطابقة السعة للطلب من ممارسات Performance Efficiency الأساسية.",
    whyWrongEn:
      "Security is about protection; Cost Optimization is about spend; Operational Excellence is about running/improving operations.",
    whyWrongAr:
      "الـ Security عن الحماية؛ والـ Cost Optimization عن الإنفاق؛ والـ Operational Excellence عن تشغيل وتحسين العمليات.",
    services: ["Well-Architected", "Performance Efficiency"],
    difficulty: "easy",
  },
  {
    id: "pat-109",
    domain: "patterns",
    type: "single",
    question:
      "A company wants to reduce its environmental impact by maximizing utilization, using managed/serverless services, and right-sizing. Which Well-Architected pillar does this map to?",
    options: [
      "Sustainability",
      "Reliability",
      "Security",
      "Operational Excellence",
    ],
    correct: [0],
    explanationEn:
      "The Sustainability pillar focuses on minimizing environmental impact through efficient resource use, serverless/managed services, and right-sizing.",
    explanationAr:
      "ركن الـ Sustainability بيركّز على تقليل الأثر البيئي عبر الاستخدام الكفء للموارد والخدمات serverless/المُدارة والـ right-sizing.",
    whyWrongEn:
      "Reliability is about recovery; Security is protection; Operational Excellence is operations — none specifically target environmental impact.",
    whyWrongAr:
      "الـ Reliability عن التعافي؛ والـ Security حماية؛ والـ Operational Excellence عمليات — محدش بيستهدف الأثر البيئي تحديدًا.",
    services: ["Well-Architected", "Sustainability"],
    difficulty: "easy",
  },
  {
    id: "pat-110",
    domain: "patterns",
    type: "single",
    question:
      "A team wants deployments to never modify running servers in place; instead each release launches fresh, pre-baked instances and the old ones are discarded. Which practice is this?",
    options: [
      "Immutable infrastructure (e.g., blue/green with new AMIs/instances)",
      "SSHing in to patch live servers",
      "Manually editing config on production",
      "Hotfixing the running containers by hand",
    ],
    correct: [0],
    explanationEn:
      "Immutable infrastructure replaces servers with new pre-built ones each deploy (often via blue/green), avoiding configuration drift and enabling clean rollbacks.",
    explanationAr:
      "الـ immutable infrastructure بتستبدل السيرفرات بجديدة مجهّزة مسبقًا كل نشر (غالبًا blue/green)، فبتتجنّب الـ drift وتتيح rollback نظيف.",
    whyWrongEn:
      "SSH patching, manual edits, and hand hotfixes are mutable, drift-prone anti-patterns.",
    whyWrongAr:
      "الـ SSH patching والتعديل اليدوي والـ hotfix باليد كلها mutable وanti-patterns بتسبب drift.",
    services: ["Blue/Green", "Immutable Infrastructure"],
    difficulty: "medium",
  },
  {
    id: "pat-111",
    domain: "patterns",
    type: "single",
    question:
      "To make a web tier horizontally scalable and resilient, the application should avoid storing user session data on individual servers. Where should session state go?",
    options: [
      "An external shared store like Amazon ElastiCache or DynamoDB",
      "On each instance's local disk",
      "In a single server's RAM",
      "In the load balancer",
    ],
    correct: [0],
    explanationEn:
      "Externalizing session state (ElastiCache/DynamoDB) makes the web tier stateless, so any instance can serve any user and scaling/failures don't drop sessions.",
    explanationAr:
      "نقل حالة الـ session لمخزن خارجي (ElastiCache/DynamoDB) بيخلّي الطبقة stateless، فأي instance يخدم أي مستخدم والتوسّع/الأعطال مايضيّعوش الـ sessions.",
    whyWrongEn:
      "Local disk or single-server RAM ties sessions to one instance; load balancers don't store session state.",
    whyWrongAr:
      "القرص المحلي أو RAM سيرفر واحد بيربط الـ session بـ instance واحد؛ والـ load balancer مبيخزّنش حالة session.",
    services: ["ElastiCache", "DynamoDB", "Stateless"],
    difficulty: "medium",
  },
  {
    id: "pat-112",
    domain: "patterns",
    type: "single",
    question:
      "Clients calling a downstream API should handle transient throttling/errors gracefully without overwhelming it. Which retry strategy is recommended?",
    options: [
      "Exponential backoff with jitter",
      "Immediate, unlimited retries in a tight loop",
      "Never retry",
      "Retry all requests at the exact same interval",
    ],
    correct: [0],
    explanationEn:
      "Exponential backoff with jitter spaces out retries and randomizes timing, recovering from transient errors without creating a thundering-herd of synchronized retries.",
    explanationAr:
      "الـ exponential backoff مع jitter بيباعد الـ retries ويعشوِش التوقيت، فبيتعافى من الأعطال المؤقتة من غير موجة retries متزامنة.",
    whyWrongEn:
      "Tight unlimited retries amplify load; never retrying drops recoverable calls; fixed-interval retries synchronize and overwhelm the service.",
    whyWrongAr:
      "الـ retries الكثيفة غير المحدودة بتزوّد الحمل؛ وعدم الـ retry بيضيّع نداءات قابلة للتعافي؛ والـ retries بفاصل ثابت بتتزامن وتغرق الخدمة.",
    services: ["Resilience", "Exponential Backoff"],
    difficulty: "medium",
  },
];
