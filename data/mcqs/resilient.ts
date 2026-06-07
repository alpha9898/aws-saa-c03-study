import type { MCQ } from "../types";

export const resilientMcqs: MCQ[] = [
  {
    id: "res-001",
    domain: "resilient",
    type: "single",
    question:
      "A company runs a critical relational database on Amazon RDS and needs automatic failover to a standby in another Availability Zone with no data loss if the primary fails. Which configuration meets this requirement?",
    options: [
      "Create an RDS Read Replica in another AZ.",
      "Enable RDS Multi-AZ deployment.",
      "Take manual snapshots every hour.",
      "Use a larger instance class.",
    ],
    correct: [1],
    explanationEn:
      "RDS Multi-AZ keeps a synchronous standby in a different AZ and fails over automatically, providing high availability with no data loss. Read Replicas are asynchronous and used to scale reads, not for automatic HA failover.",
    explanationAr:
      "الـ RDS Multi-AZ بيحتفظ بنسخة standby متزامنة (synchronous) في AZ تانية وبيعمل failover تلقائي، فبيدّي توافر عالي بدون فقدان بيانات. الـ Read Replicas غير متزامنة وبتُستخدم لتوسيع القراءة مش للـ HA التلقائي.",
    services: ["RDS", "Multi-AZ", "High Availability"],
    difficulty: "easy",
  },
  {
    id: "res-002",
    domain: "resilient",
    type: "single",
    question:
      "An application's read traffic on Amazon RDS is very heavy and is slowing down writes. The company wants to offload read queries. What should the solutions architect implement?",
    options: [
      "Enable Multi-AZ and read from the standby instance.",
      "Create one or more RDS Read Replicas and direct read traffic to them.",
      "Increase the backup retention period.",
      "Convert the database to a NoSQL store.",
    ],
    correct: [1],
    explanationEn:
      "Read Replicas provide asynchronous, scalable read endpoints to offload read traffic from the primary. The Multi-AZ standby cannot serve reads—it exists only for failover.",
    explanationAr:
      "الـ Read Replicas بتدّي endpoints قراءة قابلة للتوسّع لتخفيف القراءة عن الـ primary. الـ standby بتاع Multi-AZ مبيخدمش قراءة — موجود للـ failover بس.",
    services: ["RDS", "Read Replicas"],
    difficulty: "easy",
  },
  {
    id: "res-003",
    domain: "resilient",
    type: "single",
    question:
      "A company needs the lowest-cost disaster recovery strategy and can tolerate several hours of recovery time (RTO of hours). Only backups are kept; infrastructure is rebuilt during a disaster. Which DR strategy is this?",
    options: [
      "Backup & Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active/Active",
    ],
    correct: [0],
    explanationEn:
      "Backup & Restore is the cheapest DR option: you keep backups and rebuild infrastructure when disaster strikes, accepting an RTO measured in hours. The other strategies cost more to achieve faster recovery.",
    explanationAr:
      "الـ Backup & Restore هو الأرخص في الـ DR: بتحتفظ بالـ backups وتبني البنية وقت الكارثة، وبتقبل RTO بالساعات. باقي الاستراتيجيات أغلى عشان تعافي أسرع.",
    services: ["DR", "Backup & Restore", "RTO"],
    difficulty: "medium",
  },
  {
    id: "res-004",
    domain: "resilient",
    type: "single",
    question:
      "A company keeps a minimal core (such as a replicated database) always running in a second Region, while the rest of the stack stays switched off until needed. This achieves recovery in tens of minutes. Which DR strategy is described?",
    options: [
      "Backup & Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active/Active",
    ],
    correct: [1],
    explanationEn:
      "Pilot Light keeps the critical core (e.g., the database) running/replicated while other components are off and started on demand. RTO is tens of minutes—faster than Backup & Restore, cheaper than Warm Standby.",
    explanationAr:
      "الـ Pilot Light بيخلّي الـ core الحرج (زي قاعدة البيانات) شغّال/متناسخ والباقي مطفّي وبيتشغّل عند الحاجة. الـ RTO بعشرات الدقائق — أسرع من Backup & Restore وأرخص من Warm Standby.",
    services: ["DR", "Pilot Light"],
    difficulty: "medium",
  },
  {
    id: "res-005",
    domain: "resilient",
    type: "single",
    question:
      "A company requires near-zero RTO and RPO for a mission-critical workload, with two fully running environments in different Regions both serving live traffic. Which DR strategy meets this, at the highest cost?",
    options: [
      "Backup & Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active/Active",
    ],
    correct: [3],
    explanationEn:
      "Multi-Site Active/Active runs two full environments serving traffic simultaneously, giving an RTO/RPO near zero. It is the most expensive option but offers the fastest recovery and no data loss.",
    explanationAr:
      "الـ Multi-Site Active/Active بيشغّل بيئتين كاملتين بيخدموا الترافيك في نفس الوقت، فالـ RTO/RPO بيقرب من صفر. هو الأغلى لكنه الأسرع تعافيًا وبدون فقدان بيانات.",
    services: ["DR", "Multi-Site", "Active-Active"],
    difficulty: "medium",
  },
  {
    id: "res-006",
    domain: "resilient",
    type: "single",
    question:
      "An exam scenario states: 'How much data, measured in time, can the business afford to lose?' Which disaster recovery metric does this define?",
    options: [
      "RTO (Recovery Time Objective)",
      "RPO (Recovery Point Objective)",
      "MTTR",
      "SLA",
    ],
    correct: [1],
    explanationEn:
      "RPO is the maximum acceptable amount of data loss measured in time ('to what point in time do we recover?'). RTO is how long the system can be down ('when are we back up?'). RPO is reduced with more frequent backups/replication.",
    explanationAr:
      "الـ RPO هو أقصى فقدان بيانات مقبول مقيس بالزمن ('نرجع لأي نقطة زمنية؟'). الـ RTO هو قد إيه الوقت اللي النظام يستحمل يكون down ('إمتى نرجع نشتغل؟'). الـ RPO بيقل بالـ backups/replication الأكثر تكرارًا.",
    services: ["RPO", "RTO", "DR"],
    difficulty: "easy",
  },
  {
    id: "res-007",
    domain: "resilient",
    type: "single",
    question:
      "A company wants to centrally manage and automate backups across Amazon EBS, RDS, DynamoDB, and EFS using one policy and schedule, across multiple accounts and Regions. Which service should they use?",
    options: [
      "AWS Backup",
      "Amazon S3 lifecycle policies",
      "Manual EBS snapshots",
      "AWS DataSync",
    ],
    correct: [0],
    explanationEn:
      "AWS Backup centrally manages and automates backups across many services (EBS, RDS, DynamoDB, EFS, and more) using unified backup plans and policies across accounts and Regions.",
    explanationAr:
      "الـ AWS Backup بيدير ويأتمت الـ backups مركزيًا عبر خدمات كتير (EBS، RDS، DynamoDB، EFS وغيرها) بخطط وسياسات موحّدة عبر الحسابات والـ regions.",
    services: ["AWS Backup", "EBS", "RDS", "DynamoDB", "EFS"],
    difficulty: "easy",
  },
  {
    id: "res-008",
    domain: "resilient",
    type: "single",
    question:
      "A web application needs to route HTTP/HTTPS traffic to different target groups based on the URL path (for example, /api to one group and /images to another). Which load balancer should be used?",
    options: [
      "Network Load Balancer (NLB)",
      "Application Load Balancer (ALB)",
      "Classic Load Balancer (CLB)",
      "Gateway Load Balancer (GWLB)",
    ],
    correct: [1],
    explanationEn:
      "The ALB operates at Layer 7 and supports content-based routing by path or host, integrates with WAF, and targets EC2/IP/Lambda. NLB is Layer 4 (TCP/UDP) for ultra-low latency and static IP, without path-based routing.",
    explanationAr:
      "الـ ALB بيشتغل على Layer 7 وبيدعم routing حسب الـ path أو الـ host، وبيتكامل مع WAF، وأهدافه EC2/IP/Lambda. الـ NLB على Layer 4 (TCP/UDP) للـ latency المنخفض جدًا و IP ثابت، بدون path-based routing.",
    services: ["ALB", "NLB", "Load Balancing"],
    difficulty: "easy",
  },
  {
    id: "res-009",
    domain: "resilient",
    type: "single",
    question:
      "A high-performance application requires millions of requests per second at ultra-low latency, a static IP address, and Layer 4 (TCP/UDP) load balancing. Which load balancer is most appropriate?",
    options: [
      "Application Load Balancer (ALB)",
      "Network Load Balancer (NLB)",
      "Classic Load Balancer (CLB)",
      "Amazon CloudFront",
    ],
    correct: [1],
    explanationEn:
      "The NLB operates at Layer 4, handles millions of requests per second at very low latency, and provides a static IP. ALB is Layer 7 (HTTP) and does not provide a static IP per node by default.",
    explanationAr:
      "الـ NLB بيشتغل على Layer 4، بيتعامل مع ملايين الطلبات بالثانية بـ latency قليل جدًا، وبيدّي static IP. الـ ALB على Layer 7 (HTTP) ومبيدّيش static IP افتراضيًا.",
    services: ["NLB", "ALB", "Load Balancing"],
    difficulty: "easy",
  },
  {
    id: "res-010",
    domain: "resilient",
    type: "single",
    question:
      "A company needs to transparently insert third-party virtual firewall/IDS/IPS appliances into the traffic path at Layer 3. Which load balancer is designed for chaining such appliances?",
    options: [
      "Application Load Balancer",
      "Gateway Load Balancer (GWLB)",
      "Network Load Balancer",
      "Classic Load Balancer",
    ],
    correct: [1],
    explanationEn:
      "The Gateway Load Balancer (Layer 3) is used to deploy, scale, and chain third-party network virtual appliances such as firewalls and IDS/IPS transparently in the traffic path.",
    explanationAr:
      "الـ Gateway Load Balancer (Layer 3) بيُستخدم لنشر وتوسيع وتمرير الترافيك على أجهزة أمان طرف ثالث زي الـ firewalls و IDS/IPS بشكل شفّاف في مسار الترافيك.",
    services: ["GWLB", "Load Balancing"],
    difficulty: "medium",
  },
  {
    id: "res-011",
    domain: "resilient",
    type: "single",
    question:
      "An application running behind an ALB stores user session state in instance memory, and users are being logged out when routed to different instances. Without re-architecting to external session storage, which feature keeps a user pinned to the same target?",
    options: [
      "Connection draining",
      "Sticky sessions (session affinity)",
      "Cross-zone load balancing",
      "Health checks",
    ],
    correct: [1],
    explanationEn:
      "Sticky sessions (session affinity) bind a client to the same target, which is useful for stateful apps. A more scalable fix is to externalize session state (e.g., to ElastiCache), but sticky sessions solve the immediate issue.",
    explanationAr:
      "الـ Sticky Sessions بتربط العميل بنفس الـ target، مفيدة للتطبيقات stateful. الحل الأفضل توسعًا هو نقل الـ session لتخزين خارجي (زي ElastiCache)، لكن الـ sticky sessions بتحل المشكلة فورًا.",
    services: ["ALB", "Sticky Sessions", "ElastiCache"],
    difficulty: "medium",
  },
  {
    id: "res-012",
    domain: "resilient",
    type: "single",
    question:
      "During scale-in, an Auto Scaling group is terminating instances while they still have in-flight requests, causing errors. Which load balancer feature lets existing requests finish before the instance is removed?",
    options: [
      "Connection draining (deregistration delay)",
      "Sticky sessions",
      "Predictive scaling",
      "Multi-AZ",
    ],
    correct: [0],
    explanationEn:
      "Connection draining (deregistration delay) keeps an instance in 'draining' state so in-flight requests complete before it is deregistered/terminated, preventing dropped connections during scale-in or deployments.",
    explanationAr:
      "الـ Connection Draining (Deregistration Delay) بيخلّي الـ instance في حالة draining عشان الطلبات الجارية تخلص قبل ما يتشال، فمنع قطع الاتصالات وقت الـ scale-in أو النشر.",
    services: ["ALB", "Connection Draining", "Auto Scaling"],
    difficulty: "medium",
  },
  {
    id: "res-013",
    domain: "resilient",
    type: "single",
    question:
      "A company wants its fleet of EC2 instances to automatically replace any unhealthy instance and maintain a desired count across multiple Availability Zones. Which service provides this self-healing behavior?",
    options: [
      "Amazon EC2 Auto Scaling group (ASG)",
      "AWS Elastic Beanstalk only",
      "Amazon CloudWatch alarms only",
      "Elastic Load Balancing only",
    ],
    correct: [0],
    explanationEn:
      "An Auto Scaling group maintains the desired number of instances across AZs and replaces unhealthy ones automatically (self-healing). It uses Launch Templates (recommended over Launch Configurations) to define instances.",
    explanationAr:
      "الـ Auto Scaling Group بيحافظ على العدد المطلوب من الـ instances عبر الـ AZs وبيستبدل غير السليم تلقائيًا (self-healing). بيستخدم Launch Templates (موصى بها بدل Launch Configurations).",
    services: ["Auto Scaling", "ASG", "Launch Template"],
    difficulty: "easy",
  },
  {
    id: "res-014",
    domain: "resilient",
    type: "single",
    question:
      "A company wants the simplest Auto Scaling policy that keeps average CPU utilization at around 50% by automatically adding or removing instances. Which scaling policy should they choose?",
    options: [
      "Target tracking scaling",
      "Step scaling",
      "Scheduled scaling",
      "Manual scaling",
    ],
    correct: [0],
    explanationEn:
      "Target tracking is the simplest and most common policy: you set a metric target (e.g., CPU 50%) and ASG adjusts capacity to maintain it. Step scaling gives finer control by breach size; scheduled scaling handles known time-based patterns.",
    explanationAr:
      "الـ Target Tracking هو الأبسط والأشهر: بتحدّد هدف للـ metric (زي CPU 50%) والـ ASG بيظبط السعة عشان يحافظ عليه. الـ Step Scaling بيدّي تحكّم أدق حسب شدة التجاوز، والـ Scheduled للأنماط المعروفة بالوقت.",
    services: ["Auto Scaling", "Target Tracking"],
    difficulty: "easy",
  },
  {
    id: "res-015",
    domain: "resilient",
    type: "single",
    question:
      "An application has a predictable spike in traffic every weekday at 9 AM. The company wants capacity added before the spike rather than reacting to it. Which scaling approach is best?",
    options: [
      "Scheduled scaling",
      "Target tracking only",
      "Manual scaling each morning",
      "Spot Fleet",
    ],
    correct: [0],
    explanationEn:
      "Scheduled scaling adds capacity at known times (e.g., 9 AM every weekday) so resources are ready before the predictable spike. Predictive scaling (ML-based) is another option for recurring patterns.",
    explanationAr:
      "الـ Scheduled Scaling بيضيف سعة في أوقات معروفة (زي 9 صباحًا كل يوم شغل) فالموارد تكون جاهزة قبل الذروة المتوقّعة. الـ Predictive Scaling (بالـ ML) خيار تاني للأنماط المتكرّرة.",
    services: ["Auto Scaling", "Scheduled Scaling", "Predictive Scaling"],
    difficulty: "medium",
  },
  {
    id: "res-016",
    domain: "resilient",
    type: "single",
    question:
      "A globally used relational database needs cross-Region disaster recovery with an RPO of about 1 second and an RTO under 1 minute, plus low-latency local reads in multiple Regions. Which solution fits best?",
    options: [
      "Amazon RDS Multi-AZ",
      "Amazon Aurora Global Database",
      "A single RDS Read Replica",
      "DynamoDB Streams",
    ],
    correct: [1],
    explanationEn:
      "Aurora Global Database replicates across Regions with ~1s RPO and <1 min RTO and serves low-latency reads in secondary Regions—the best choice for global relational DR. RDS Multi-AZ is single-Region HA.",
    explanationAr:
      "الـ Aurora Global Database بتتناسخ عبر الـ regions بـ RPO حوالي ثانية و RTO أقل من دقيقة وبتخدم قراءات منخفضة الـ latency في الـ regions الثانوية — الأفضل للـ DR العالمي للقواعد العلائقية. الـ RDS Multi-AZ توافر داخل region واحدة.",
    services: ["Aurora", "Aurora Global Database", "DR"],
    difficulty: "medium",
  },
  {
    id: "res-017",
    domain: "resilient",
    type: "single",
    question:
      "A serverless application uses Amazon DynamoDB and must serve and accept writes with low latency to users in multiple Regions simultaneously (active-active, multi-Region). Which feature provides this?",
    options: [
      "DynamoDB Global Tables",
      "DynamoDB point-in-time recovery (PITR)",
      "DynamoDB Accelerator (DAX)",
      "A single-Region table with backups",
    ],
    correct: [0],
    explanationEn:
      "DynamoDB Global Tables provide multi-Region, active-active replication, letting users read and write in any Region with low latency. PITR is for restore/backup; DAX is an in-memory cache for reads.",
    explanationAr:
      "الـ DynamoDB Global Tables بتدّي تناسخ multi-Region active-active، فالمستخدم يكتب ويقرأ في أي region بـ latency قليل. الـ PITR للاسترجاع/الـ backup، والـ DAX كاش في الذاكرة للقراءة.",
    services: ["DynamoDB", "Global Tables", "Multi-Region"],
    difficulty: "medium",
  },
  {
    id: "res-018",
    domain: "resilient",
    type: "single",
    question:
      "A team accidentally deleted records in DynamoDB and needs to restore the table to any second within the last 35 days. Which feature should have been enabled?",
    options: [
      "DynamoDB point-in-time recovery (PITR)",
      "DynamoDB Global Tables",
      "DynamoDB Streams",
      "On-demand capacity mode",
    ],
    correct: [0],
    explanationEn:
      "Point-in-time recovery (PITR) lets you restore a DynamoDB table to any point in the last 35 days, protecting against accidental writes/deletes. Streams capture change events but do not provide point-in-time restore.",
    explanationAr:
      "الـ Point-in-Time Recovery (PITR) بيرجّع جدول DynamoDB لأي لحظة في آخر 35 يوم، فبيحميك من الحذف/الكتابة بالغلط. الـ Streams بتلتقط أحداث التغيير لكنها مش استرجاع لحظي.",
    services: ["DynamoDB", "PITR"],
    difficulty: "easy",
  },
  {
    id: "res-019",
    domain: "resilient",
    type: "single",
    question:
      "A company runs an in-memory cache and needs high availability with automatic failover, replication, and Multi-AZ support, plus features like sorted sets for a leaderboard. Which ElastiCache engine should they choose?",
    options: [
      "ElastiCache for Memcached",
      "ElastiCache for Redis",
      "DynamoDB DAX",
      "Amazon RDS",
    ],
    correct: [1],
    explanationEn:
      "ElastiCache for Redis supports replication, Multi-AZ with automatic failover, persistence, and rich data structures (e.g., sorted sets for leaderboards). Memcached is simple, multi-threaded caching without persistence or replication.",
    explanationAr:
      "الـ ElastiCache for Redis بيدعم replication و Multi-AZ مع failover تلقائي و persistence وهياكل بيانات غنية (زي sorted sets للـ leaderboards). الـ Memcached كاش بسيط multi-threaded بدون persistence أو replication.",
    services: ["ElastiCache", "Redis", "Memcached"],
    difficulty: "medium",
  },
  {
    id: "res-020",
    domain: "resilient",
    type: "single",
    question:
      "A company must protect Amazon S3 objects from accidental overwrites and deletions, keeping every version, and require MFA to permanently delete. Which features should be enabled?",
    options: [
      "S3 Versioning with MFA Delete",
      "S3 Transfer Acceleration",
      "S3 Intelligent-Tiering",
      "S3 Requester Pays",
    ],
    correct: [0],
    explanationEn:
      "S3 Versioning preserves every version of an object (recovering from overwrites/deletes), and MFA Delete adds a requirement for MFA before any version can be permanently deleted.",
    explanationAr:
      "الـ S3 Versioning بيحتفظ بكل نسخة من الأوبجكت (بيعالج الكتابة فوقه/الحذف)، والـ MFA Delete بيفرض MFA قبل أي حذف نهائي لأي نسخة.",
    services: ["S3", "Versioning", "MFA Delete"],
    difficulty: "easy",
  },
  {
    id: "res-021",
    domain: "resilient",
    type: "single",
    question:
      "A compliance requirement states that certain S3 objects must be immutable (write once, read many) and cannot be deleted or modified by anyone, including the root user, for a fixed retention period. Which feature meets this?",
    options: [
      "S3 Object Lock in Compliance mode",
      "S3 Versioning only",
      "S3 lifecycle expiration",
      "Bucket policy denying deletes",
    ],
    correct: [0],
    explanationEn:
      "S3 Object Lock (WORM) in Compliance mode prevents any user—even root—from deleting or modifying an object for the retention period. Governance mode allows privileged override; a bucket policy can be changed and is not WORM.",
    explanationAr:
      "الـ S3 Object Lock (WORM) في وضع Compliance بيمنع أي حد — حتى الـ root — من حذف أو تعديل الأوبجكت خلال مدة الاحتفاظ. وضع Governance بيسمح بتجاوز لصاحب صلاحية، والـ bucket policy ممكن تتغيّر ومش WORM.",
    services: ["S3", "Object Lock", "WORM", "Compliance"],
    difficulty: "medium",
  },
  {
    id: "res-022",
    domain: "resilient",
    type: "single",
    question:
      "A company must keep a copy of its S3 data in a different AWS Region for disaster recovery and lower-latency global access. Which feature should they configure?",
    options: [
      "S3 Cross-Region Replication (CRR)",
      "S3 Same-Region Replication (SRR)",
      "S3 Transfer Acceleration",
      "EBS snapshots",
    ],
    correct: [0],
    explanationEn:
      "Cross-Region Replication (CRR) automatically copies objects to a bucket in another Region for DR, compliance, and lower-latency access. Same-Region Replication (SRR) keeps copies within the same Region (e.g., log aggregation).",
    explanationAr:
      "الـ Cross-Region Replication (CRR) بتنسخ الأوبجكتس تلقائيًا لـ bucket في region تانية للـ DR والامتثال وتقليل الـ latency. الـ Same-Region Replication (SRR) بتحتفظ بنسخ في نفس الـ region (زي تجميع الـ logs).",
    services: ["S3", "CRR", "SRR"],
    difficulty: "easy",
  },
  {
    id: "res-023",
    domain: "resilient",
    type: "single",
    question:
      "Multiple EC2 instances across Availability Zones need to share the same file system with POSIX semantics, automatically scaling capacity. Which storage service should be used?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Instance Store",
      "Amazon S3 Glacier",
    ],
    correct: [1],
    explanationEn:
      "Amazon EFS is a managed, elastic, shared file system accessible by many instances across AZs at once. EBS volumes attach to a single instance in one AZ (except limited io1/io2 Multi-Attach); Instance Store is ephemeral.",
    explanationAr:
      "الـ Amazon EFS نظام ملفات مُدار مرن مشترك بيوصله عدد كبير من الـ instances عبر الـ AZs في نفس الوقت. الـ EBS بيتركّب على instance واحد في AZ واحدة (إلا io1/io2 Multi-Attach المحدود)، والـ Instance Store مؤقت.",
    services: ["EFS", "EBS", "Instance Store"],
    difficulty: "easy",
  },
  {
    id: "res-024",
    domain: "resilient",
    type: "single",
    question:
      "A company wants to route a small percentage of users to a new version of an application for A/B testing or a canary release, splitting traffic by weight at the DNS level. Which Route 53 routing policy should be used?",
    options: [
      "Weighted routing",
      "Latency-based routing",
      "Failover routing",
      "Geolocation routing",
    ],
    correct: [0],
    explanationEn:
      "Weighted routing distributes traffic by assigned percentages (e.g., 90/10), ideal for A/B testing and canary deployments. Latency routing optimizes for the lowest-latency Region; failover handles active/passive DR.",
    explanationAr:
      "الـ Weighted Routing بيوزّع الترافيك بنِسب (زي 90/10)، مثالي للـ A/B testing والـ canary. الـ Latency-based بيختار الـ region الأقل latency، والـ Failover للـ DR active/passive.",
    services: ["Route 53", "Weighted Routing"],
    difficulty: "medium",
  },
  {
    id: "res-025",
    domain: "resilient",
    type: "single",
    question:
      "A company wants users to be automatically directed to the AWS Region that gives them the lowest network latency. Which Route 53 routing policy should be used?",
    options: [
      "Geolocation routing",
      "Latency-based routing",
      "Weighted routing",
      "Simple routing",
    ],
    correct: [1],
    explanationEn:
      "Latency-based routing sends users to the Region with the lowest latency for them. Geolocation routing decides by the user's physical location (for compliance/localized content), which is not necessarily the lowest latency.",
    explanationAr:
      "الـ Latency-based Routing بيوجّه المستخدم للـ region الأقل latency بالنسبة له. الـ Geolocation بيقرّر حسب موقع المستخدم الجغرافي (للامتثال/المحتوى المحلي)، وده مش بالضرورة الأقل latency.",
    services: ["Route 53", "Latency Routing", "Geolocation"],
    difficulty: "medium",
  },
  {
    id: "res-026",
    domain: "resilient",
    type: "single",
    question:
      "A company needs DNS-level failover that sends traffic to a primary site and, based on a health check, automatically switches to a standby site if the primary becomes unhealthy. Which Route 53 routing policy provides this?",
    options: [
      "Failover routing with health checks",
      "Multivalue answer routing",
      "Weighted routing",
      "Geoproximity routing",
    ],
    correct: [0],
    explanationEn:
      "Failover routing uses health checks to direct traffic to a primary and automatically fail over to a secondary (standby) when the primary is unhealthy—an active/passive DR pattern at the DNS layer.",
    explanationAr:
      "الـ Failover Routing بيستخدم health checks لتوجيه الترافيك للـ primary وبيعمل failover تلقائي للـ secondary لما الـ primary يبقى غير سليم — نمط DR active/passive على مستوى الـ DNS.",
    services: ["Route 53", "Failover Routing", "Health Checks"],
    difficulty: "medium",
  },
  {
    id: "res-027",
    domain: "resilient",
    type: "single",
    question:
      "A gaming company needs a static anycast IP and fast regional failover that routes TCP/UDP traffic over the AWS global network to the optimal endpoint—not content caching. Which service should they use?",
    options: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Amazon Route 53 simple routing",
      "Elastic IP",
    ],
    correct: [1],
    explanationEn:
      "AWS Global Accelerator provides two static anycast IPs and routes TCP/UDP traffic over the AWS backbone to the optimal healthy endpoint with fast failover—ideal for non-HTTP, latency-sensitive apps. CloudFront is a CDN that caches HTTP content.",
    explanationAr:
      "الـ AWS Global Accelerator بيدّي IP ثابتين (anycast) وبيوجّه ترافيك TCP/UDP على شبكة AWS لأفضل endpoint سليم مع failover سريع — مثالي لتطبيقات غير HTTP حسّاسة للـ latency. الـ CloudFront هو CDN بيعمل cache لمحتوى HTTP.",
    services: ["Global Accelerator", "CloudFront", "Anycast IP"],
    difficulty: "medium",
  },
  {
    id: "res-028",
    domain: "resilient",
    type: "single",
    question:
      "An online voting system writes hundreds of thousands of votes within minutes from EC2 instances directly to an RDS database, which cannot keep up. The company needs to process all votes efficiently without losing any and without downtime. What should the solutions architect do?",
    options: [
      "Migrate the front end to AWS Lambda with API Gateway.",
      "Send votes to an Amazon SQS queue and use worker instances to write to the database at a controlled rate.",
      "Convert the database to Multi-AZ and write to both instances.",
      "Use EventBridge to re-provision larger database instances during voting.",
    ],
    correct: [1],
    explanationEn:
      "Decoupling ingestion with an SQS queue buffers the spike: workers read from the queue and write to the database at a sustainable rate, so no votes are lost even when the DB is slower than the producers.",
    explanationAr:
      "فصل الإدخال بـ SQS بيمتص الذروة: الـ workers بتقرأ من الطابور وتكتب في قاعدة البيانات بمعدل محتمل، فمفيش أصوات بتضيع حتى لو القاعدة أبطأ من المنتِجين.",
    services: ["SQS", "Decoupling", "RDS"],
    difficulty: "medium",
  },
  {
    id: "res-029",
    domain: "resilient",
    type: "single",
    question:
      "A single event must be delivered to multiple independent consumers at the same time (for example, billing, shipping, and analytics), each processing its own copy. Which pattern should the architect implement?",
    options: [
      "A single SQS queue read by all consumers",
      "SNS fan-out to multiple SQS queues (one per consumer)",
      "Direct synchronous calls between services",
      "A single Lambda doing all three tasks",
    ],
    correct: [1],
    explanationEn:
      "The SNS-to-SQS fan-out pattern publishes one message to an SNS topic that delivers a copy to multiple subscribed SQS queues, so each consumer processes independently with decoupling and parallelism.",
    explanationAr:
      "نمط SNS-to-SQS fan-out بينشر رسالة واحدة لـ SNS topic بيوصّل نسخة لعدة SQS queues مشتركة، فكل consumer بيعالج باستقلال مع فصل ومعالجة متوازية.",
    services: ["SNS", "SQS", "Fan-out"],
    difficulty: "medium",
  },
  {
    id: "res-030",
    domain: "resilient",
    type: "single",
    question:
      "An order-processing system must guarantee that messages are processed exactly once and in the exact order they were sent. Which AWS messaging option should be used?",
    options: [
      "Amazon SQS Standard queue",
      "Amazon SQS FIFO queue",
      "Amazon SNS standard topic",
      "Amazon Kinesis Data Firehose",
    ],
    correct: [1],
    explanationEn:
      "SQS FIFO queues provide exactly-once processing and strict ordering. SQS Standard offers best-effort ordering and at-least-once delivery (possible duplicates), which does not meet strict ordering/exactly-once needs.",
    explanationAr:
      "الـ SQS FIFO بيدّي معالجة exactly-once وترتيب صارم. الـ SQS Standard بيدّي ترتيب best-effort وتسليم at-least-once (ممكن تكرار)، فمش بيحقّق شرط الترتيب الصارم/exactly-once.",
    services: ["SQS", "FIFO", "SQS Standard"],
    difficulty: "easy",
  },
  {
    id: "res-031",
    domain: "resilient",
    type: "single",
    question:
      "Messages that repeatedly fail processing in an SQS queue should be set aside for later analysis instead of blocking the queue or being lost. Which feature should be configured?",
    options: [
      "A dead-letter queue (DLQ)",
      "A longer visibility timeout",
      "A delay queue",
      "FIFO deduplication",
    ],
    correct: [0],
    explanationEn:
      "A dead-letter queue captures messages that exceed the maximum receive count (repeatedly fail), isolating poison messages for debugging while keeping the main queue flowing.",
    explanationAr:
      "الـ Dead-Letter Queue بتلتقط الرسائل اللي تجاوزت أقصى عدد محاولات (بتفشل باستمرار)، فبتعزل الرسائل المعطوبة للتحليل وتسيب الطابور الأساسي شغّال.",
    services: ["SQS", "DLQ"],
    difficulty: "medium",
  },
  {
    id: "res-032",
    domain: "resilient",
    type: "single",
    question:
      "A company wants to build an event-driven architecture that routes events from many AWS services and SaaS applications to multiple targets using rules and schedules. Which service is purpose-built for this?",
    options: [
      "Amazon EventBridge",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon Kinesis Data Streams",
    ],
    correct: [0],
    explanationEn:
      "Amazon EventBridge is a serverless event bus that routes events from AWS services, custom apps, and SaaS partners to many targets using rules, with scheduling support—ideal for decoupled, event-driven systems.",
    explanationAr:
      "الـ Amazon EventBridge هو event bus بدون سيرفرات بيوجّه الأحداث من خدمات AWS والتطبيقات الخاصة وشركاء الـ SaaS لأهداف كتير بقواعد، مع جدولة — مثالي للأنظمة event-driven المفصولة.",
    services: ["EventBridge", "SQS", "Step Functions"],
    difficulty: "medium",
  },
  {
    id: "res-033",
    domain: "resilient",
    type: "single",
    question:
      "A company needs to orchestrate a long-running, multi-step business workflow with branching, retries, and human-approval steps, while visualizing the state of each execution. Which service is the best fit?",
    options: [
      "AWS Step Functions",
      "Amazon SQS",
      "Amazon SNS",
      "AWS Lambda alone",
    ],
    correct: [0],
    explanationEn:
      "AWS Step Functions coordinates multi-step workflows as a visual state machine with built-in branching, retries, error handling, and wait/callback (human approval) patterns—ideal for orchestration. Standard workflows suit long-running processes.",
    explanationAr:
      "الـ AWS Step Functions بتنسّق workflows متعدّدة الخطوات كـ state machine مرئية فيها تفرّع وretries ومعالجة أخطاء وwait/callback (موافقة بشرية) — مثالية للتنسيق. الـ Standard مناسبة للعمليات طويلة المدى.",
    services: ["Step Functions", "Lambda"],
    difficulty: "medium",
  },
  {
    id: "res-034",
    domain: "resilient",
    type: "multi",
    question:
      "A two-tier application runs in a single Availability Zone: web EC2 instances in a public subnet and a database EC2 instance in a private subnet. Which combination of steps provides high availability for this architecture? (Select TWO.)",
    options: [
      "Create new public and private subnets in the same AZ.",
      "Create an EC2 Auto Scaling group and an Application Load Balancer spanning multiple AZs for the web tier.",
      "Add the existing web instances to an Auto Scaling group behind the load balancer in one AZ.",
      "Create new subnets in a second AZ and migrate the database to an Amazon RDS Multi-AZ deployment in the private subnets.",
      "Increase the instance size of the database server.",
    ],
    correct: [1, 3],
    explanationEn:
      "High availability requires spanning multiple AZs. Put the web tier behind an ALB with an Auto Scaling group across AZs, and move the database to RDS Multi-AZ in subnets across two AZs so a single AZ failure cannot take the app down.",
    explanationAr:
      "الـ HA بيتطلّب التوزيع على أكثر من AZ. حط الـ web tier ورا ALB مع Auto Scaling عبر الـ AZs، وانقل قاعدة البيانات لـ RDS Multi-AZ في subnets عبر AZ-تين عشان عطل AZ واحدة ما يوقّعش التطبيق.",
    services: ["ALB", "Auto Scaling", "RDS Multi-AZ", "High Availability"],
    difficulty: "hard",
  },
  {
    id: "res-035",
    domain: "resilient",
    type: "single",
    question:
      "A monitoring application connects to an EC2 instance using its private IPv4 address. The company needs traffic to be quickly redirected to a standby EC2 instance if the primary becomes unreachable, reusing the same private IP. Which approach meets this?",
    options: [
      "Use a custom DHCP option set to reassign the private IP.",
      "Attach a secondary elastic network interface (ENI) with the private IP and move it to the standby instance on failure.",
      "Associate an Elastic IP and move it on failure.",
      "Deploy an Application Load Balancer for the private IP.",
    ],
    correct: [1],
    explanationEn:
      "A secondary ENI configured with the private IP can be detached from the primary and attached to the standby instance, redirecting traffic that targets that private IP. Primary ENIs cannot be detached, but secondary ENIs can.",
    explanationAr:
      "الـ secondary ENI المظبوط بالـ private IP ممكن يتفصل من الـ primary ويتركّب على الـ standby، فبيحوّل الترافيك الموجّه للـ private IP ده. الـ primary ENI مبيتفصلش، لكن الـ secondary ENI يتفصل.",
    services: ["ENI", "EC2", "Failover"],
    difficulty: "hard",
  },
];
