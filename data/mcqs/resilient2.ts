import type { MCQ } from "../types";

export const resilient2Mcqs: MCQ[] = [
  {
    id: "res-101",
    domain: "resilient",
    type: "single",
    question:
      "An Auto Scaling group behind an Application Load Balancer keeps the desired capacity, but unhealthy instances that fail the application health check are not being replaced. Which setting makes the ASG replace them?",
    options: [
      "Set the ASG health check type to ELB (so it uses the load balancer health checks)",
      "Increase the instance size",
      "Disable the load balancer",
      "Use a larger AMI",
    ],
    correct: [0],
    explanationEn:
      "By default an ASG uses EC2 status checks. Setting the health check type to ELB lets it replace instances that fail the load balancer's application health check.",
    explanationAr:
      "افتراضيًا الـ ASG بيستخدم EC2 status checks. ضبط الـ health check type على ELB بيخلّيه يستبدل الـ instances اللي بتفشل في health check بتاع الـ load balancer.",
    whyWrongEn:
      "Resizing instances or changing AMIs doesn't change health-check behavior; disabling the LB removes the check entirely.",
    whyWrongAr:
      "تكبير الـ instances أو تغيير الـ AMI مبيغيّرش سلوك الـ health check؛ وتعطيل الـ LB بيشيل الفحص خالص.",
    services: ["Auto Scaling", "ELB", "Health Checks"],
    difficulty: "medium",
  },
  {
    id: "res-102",
    domain: "resilient",
    type: "single",
    question:
      "A company wants a daily, automated, policy-driven schedule to create and retain Amazon EBS snapshots and copy them to another Region for DR. Which native feature should they use?",
    options: [
      "Amazon Data Lifecycle Manager (DLM) or AWS Backup with cross-Region copy",
      "Manual snapshots taken by an engineer",
      "S3 lifecycle policies",
      "EC2 user data scripts",
    ],
    correct: [0],
    explanationEn:
      "Data Lifecycle Manager (or AWS Backup) automates EBS snapshot creation, retention, and cross-Region copy on a schedule — no manual effort.",
    explanationAr:
      "الـ Data Lifecycle Manager (أو AWS Backup) بيأتمت إنشاء snapshots الـ EBS والاحتفاظ والنسخ cross-Region بجدول — بدون مجهود يدوي.",
    whyWrongEn:
      "Manual snapshots aren't reliable/automated; S3 lifecycle is for objects, not EBS; user data runs at boot, not on a backup schedule.",
    whyWrongAr:
      "الـ snapshots اليدوية مش موثوقة/مؤتمتة؛ والـ S3 lifecycle للأوبجكتس مش EBS؛ والـ user data بيشتغل عند الإقلاع مش كجدول backup.",
    services: ["EBS", "Data Lifecycle Manager", "AWS Backup"],
    difficulty: "medium",
  },
  {
    id: "res-103",
    domain: "resilient",
    type: "single",
    question:
      "An application using Amazon Aurora needs read scaling plus automatic failover to a replica if the writer fails, with the app always connecting to the current writer. Which endpoints should the app use?",
    options: [
      "The Aurora cluster (writer) endpoint for writes and the reader endpoint for reads",
      "A single instance endpoint hardcoded to one node",
      "The S3 endpoint",
      "A NAT gateway endpoint",
    ],
    correct: [0],
    explanationEn:
      "The cluster endpoint always points to the current writer (handles failover); the reader endpoint load-balances across replicas for read scaling.",
    explanationAr:
      "الـ cluster endpoint دايمًا بيشاور على الـ writer الحالي (بيتعامل مع الـ failover)؛ والـ reader endpoint بيوزّع القراءة على الـ replicas.",
    whyWrongEn:
      "Hardcoding one instance endpoint breaks on failover; S3 and NAT endpoints are unrelated to Aurora connections.",
    whyWrongAr:
      "تثبيت instance endpoint واحد بيتكسر عند الـ failover؛ وS3 و NAT مالهمش علاقة باتصالات Aurora.",
    services: ["Aurora", "Reader Endpoint", "Failover"],
    difficulty: "medium",
  },
  {
    id: "res-104",
    domain: "resilient",
    type: "single",
    question:
      "A team accidentally ran a bad migration on Aurora MySQL and wants to rewind the database to a few minutes earlier in seconds, without restoring a snapshot. Which Aurora feature enables this?",
    options: [
      "Aurora Backtrack",
      "RDS Multi-AZ",
      "DynamoDB PITR",
      "S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "Aurora Backtrack rewinds an Aurora MySQL cluster to a prior point in time in seconds, without restoring from a snapshot — ideal for quick recovery from bad changes.",
    explanationAr:
      "الـ Aurora Backtrack بيرجّع كلاستر Aurora MySQL لنقطة زمنية سابقة في ثواني، بدون استرجاع snapshot — مثالي للتعافي السريع من تغييرات غلط.",
    whyWrongEn:
      "Multi-AZ is for failover, not rewinding data; PITR is for DynamoDB; S3 Versioning is for objects.",
    whyWrongAr:
      "الـ Multi-AZ للـ failover مش لإرجاع الداتا؛ والـ PITR لـ DynamoDB؛ والـ S3 Versioning للأوبجكتس.",
    services: ["Aurora", "Backtrack"],
    difficulty: "hard",
  },
  {
    id: "res-105",
    domain: "resilient",
    type: "single",
    question:
      "A company needs an active-passive multi-Region setup for a static website hosted on S3, with automatic DNS failover to a standby bucket/Region if the primary fails. Which combination achieves this?",
    options: [
      "Route 53 failover routing with health checks + S3 Cross-Region Replication to the standby",
      "A single S3 bucket with Versioning",
      "VPC peering between Regions",
      "An internet gateway in each Region",
    ],
    correct: [0],
    explanationEn:
      "Route 53 failover routing (with health checks) switches DNS to the standby Region, while CRR keeps the standby bucket in sync — a classic active-passive multi-Region pattern.",
    explanationAr:
      "الـ Route 53 failover routing (بـ health checks) بيحوّل الـ DNS للـ region الاحتياطي، والـ CRR بيخلّي الـ bucket الاحتياطي متزامن — نمط active-passive كلاسيكي.",
    whyWrongEn:
      "A single bucket isn't multi-Region; VPC peering and internet gateways don't provide DNS failover or cross-Region replication.",
    whyWrongAr:
      "bucket واحد مش multi-Region؛ والـ peering و internet gateway مبيدّوش DNS failover ولا تناسخ عبر الـ regions.",
    services: ["Route 53", "S3 CRR", "Failover"],
    difficulty: "hard",
  },
  {
    id: "res-106",
    domain: "resilient",
    type: "single",
    question:
      "A company wants its CloudFront distribution to automatically serve from a secondary origin if the primary origin returns errors or is unreachable. Which feature provides this?",
    options: [
      "CloudFront origin groups (origin failover)",
      "Route 53 weighted routing",
      "An Auto Scaling group",
      "S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "CloudFront origin failover uses an origin group with a primary and secondary origin; on specified failures it automatically retries the secondary.",
    explanationAr:
      "الـ CloudFront origin failover بيستخدم origin group فيه primary و secondary؛ وعند أعطال محدّدة بيجرّب الـ secondary تلقائيًا.",
    whyWrongEn:
      "Route 53 weighted routing splits traffic but isn't origin failover; ASG scales compute; Versioning is object history.",
    whyWrongAr:
      "الـ weighted routing بيقسّم الترافيك مش origin failover؛ والـ ASG بيوسّع الحوسبة؛ والـ Versioning تاريخ أوبجكتس.",
    services: ["CloudFront", "Origin Failover"],
    difficulty: "medium",
  },
  {
    id: "res-107",
    domain: "resilient",
    type: "single",
    question:
      "Worker EC2 instances pull jobs from an SQS queue. To avoid a single AZ outage stopping processing, how should the workers be deployed?",
    options: [
      "In an Auto Scaling group spanning multiple Availability Zones",
      "All in one AZ for low latency",
      "On a single large instance",
      "In a placement group of type cluster only",
    ],
    correct: [0],
    explanationEn:
      "Running workers in an ASG across multiple AZs ensures that an AZ failure doesn't stop queue processing — SQS is already a regional, durable service.",
    explanationAr:
      "تشغيل الـ workers في ASG عبر أكتر من AZ بيضمن إن عطل AZ مايوقّفش معالجة الطابور — والـ SQS أصلًا خدمة إقليمية دائمة.",
    whyWrongEn:
      "A single AZ or single instance is a single point of failure; a cluster placement group concentrates instances in one AZ (worse for AZ resilience).",
    whyWrongAr:
      "AZ واحدة أو instance واحد single point of failure؛ والـ cluster placement group بيكدّس الـ instances في AZ واحدة (أسوأ للمرونة).",
    services: ["SQS", "Auto Scaling", "Multi-AZ"],
    difficulty: "easy",
  },
  {
    id: "res-108",
    domain: "resilient",
    type: "single",
    question:
      "An SNS topic delivers order events, but the analytics consumer should only receive events where the order total exceeds $1000, without filtering in code. Which feature should be used?",
    options: [
      "SNS subscription filter policies",
      "A bigger SQS queue",
      "DynamoDB Streams",
      "Route 53 routing",
    ],
    correct: [0],
    explanationEn:
      "SNS message filtering applies a subscription filter policy so each subscriber only receives messages matching its attributes — no consumer-side filtering needed.",
    explanationAr:
      "الـ SNS message filtering بيطبّق filter policy على الاشتراك فكل مشترك ياخد بس الرسائل المطابقة لخصائصه — من غير فلترة في الكود.",
    whyWrongEn:
      "A larger queue doesn't filter; DynamoDB Streams is change capture; Route 53 is DNS.",
    whyWrongAr:
      "طابور أكبر مبيفلترش؛ والـ DynamoDB Streams التقاط تغييرات؛ والـ Route 53 DNS.",
    services: ["SNS", "Message Filtering"],
    difficulty: "medium",
  },
  {
    id: "res-109",
    domain: "resilient",
    type: "single",
    question:
      "A company replaced a fleet of cron servers that triggered scheduled jobs. They want a fully managed, serverless way to run tasks on a schedule (e.g., every day at 2 AM). Which service should they use?",
    options: [
      "Amazon EventBridge Scheduler (scheduled rules)",
      "An always-on EC2 instance running cron",
      "Amazon SQS delay queues",
      "AWS Direct Connect",
    ],
    correct: [0],
    explanationEn:
      "EventBridge Scheduler runs serverless scheduled tasks (cron/rate) that invoke targets like Lambda or Step Functions — no servers to maintain.",
    explanationAr:
      "الـ EventBridge Scheduler بيشغّل مهام مجدولة serverless (cron/rate) بتنادي أهداف زي Lambda أو Step Functions — بدون سيرفرات.",
    whyWrongEn:
      "An EC2 cron server is the thing being replaced; SQS delay queues delay messages, not schedule recurring jobs; Direct Connect is networking.",
    whyWrongAr:
      "سيرفر cron على EC2 هو اللي بنستبدله؛ والـ SQS delay queues بتأخّر الرسائل مش بتجدول؛ والـ Direct Connect شبكات.",
    services: ["EventBridge", "Scheduler", "Lambda"],
    difficulty: "easy",
  },
  {
    id: "res-110",
    domain: "resilient",
    type: "single",
    question:
      "An asynchronous Lambda function occasionally fails after retries, and those failed events are being lost. How can the failed events be captured for later inspection?",
    options: [
      "Configure a Lambda on-failure destination (or DLQ) such as an SQS queue or SNS topic",
      "Increase the function memory",
      "Add a NAT gateway",
      "Enable S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "For async invocations, configure an on-failure destination (or DLQ) to send failed events to SQS/SNS so they aren't lost and can be analyzed/replayed.",
    explanationAr:
      "للاستدعاءات async، اعمل on-failure destination (أو DLQ) لإرسال الأحداث الفاشلة لـ SQS/SNS فمتضيعش وتتحلّل/تتعاد.",
    whyWrongEn:
      "More memory doesn't capture failures; NAT and S3 Versioning are unrelated to async failure handling.",
    whyWrongAr:
      "ذاكرة أكتر مبتلتقطش الفشل؛ والـ NAT و S3 Versioning مالهمش علاقة بمعالجة فشل الـ async.",
    services: ["Lambda", "DLQ", "SQS"],
    difficulty: "medium",
  },
  {
    id: "res-111",
    domain: "resilient",
    type: "single",
    question:
      "A company wants to smooth a spiky workload where bursts of requests would overwhelm downstream EC2 workers, while ensuring no request is dropped. Which design should they adopt?",
    options: [
      "Place an SQS queue between the front end and the workers and scale workers on queue depth",
      "Send requests synchronously straight to the workers",
      "Use a single large worker instance",
      "Cache requests in CloudFront",
    ],
    correct: [0],
    explanationEn:
      "Buffering with SQS decouples producers from consumers; workers process at a sustainable rate and an ASG can scale on queue depth (ApproximateNumberOfMessages).",
    explanationAr:
      "التخزين المؤقت بـ SQS بيفصل المنتِج عن المستهلك؛ الـ workers بتعالج بمعدل محتمل والـ ASG بيتوسّع حسب عمق الطابور.",
    whyWrongEn:
      "Synchronous calls drop or fail under bursts; a single instance is a bottleneck; CloudFront caches content, it doesn't buffer backend jobs.",
    whyWrongAr:
      "الاستدعاءات المتزامنة بتفشل تحت الموجات؛ وinstance واحد عنق زجاجة؛ والـ CloudFront بيعمل cache للمحتوى مش buffer للشغل.",
    services: ["SQS", "Auto Scaling", "Decoupling"],
    difficulty: "medium",
  },
  {
    id: "res-112",
    domain: "resilient",
    type: "single",
    question:
      "A company wants its central backups to be protected from deletion even by administrators (ransomware/insider protection). Which AWS Backup feature provides this?",
    options: [
      "AWS Backup Vault Lock (compliance mode)",
      "S3 Transfer Acceleration",
      "RDS Multi-AZ",
      "A security group on the vault",
    ],
    correct: [0],
    explanationEn:
      "AWS Backup Vault Lock (compliance mode) enforces WORM on backups so they can't be deleted or altered before retention expires — even by admins or root.",
    explanationAr:
      "الـ AWS Backup Vault Lock (وضع compliance) بيفرض WORM على الـ backups فمتتحذفش أو تتعدّل قبل انتهاء الاحتفاظ — حتى من الـ admins أو الـ root.",
    whyWrongEn:
      "Transfer Acceleration is for S3 uploads; Multi-AZ is DB availability; security groups don't protect backups from deletion.",
    whyWrongAr:
      "الـ Transfer Acceleration لرفع S3؛ والـ Multi-AZ توافر DB؛ والـ SG مبيحميش الـ backups من الحذف.",
    services: ["AWS Backup", "Vault Lock"],
    difficulty: "medium",
  },
  {
    id: "res-113",
    domain: "resilient",
    type: "single",
    question:
      "A company needs replicated S3 objects to reach the destination Region within a predictable time window (a replication SLA) for compliance. Which feature should they enable?",
    options: [
      "S3 Replication Time Control (RTC)",
      "S3 Transfer Acceleration",
      "S3 Intelligent-Tiering",
      "S3 Select",
    ],
    correct: [0],
    explanationEn:
      "S3 Replication Time Control (RTC) replicates most objects within a 15-minute SLA with monitoring — for predictable cross-Region replication timing.",
    explanationAr:
      "الـ S3 Replication Time Control (RTC) بينسخ معظم الأوبجكتس خلال SLA بـ 15 دقيقة مع مراقبة — لتوقيت تناسخ cross-Region مضمون.",
    whyWrongEn:
      "Transfer Acceleration speeds uploads, not replication SLA; Intelligent-Tiering is cost; S3 Select queries objects.",
    whyWrongAr:
      "الـ Transfer Acceleration بيسرّع الرفع مش SLA التناسخ؛ والـ Intelligent-Tiering للتكلفة؛ والـ S3 Select بيستعلم.",
    services: ["S3", "Replication Time Control"],
    difficulty: "hard",
  },
  {
    id: "res-114",
    domain: "resilient",
    type: "single",
    question:
      "A latency-sensitive global TCP application needs fast multi-Region failover with a fixed entry IP, so clients aren't affected by DNS caching during a Regional outage. Which service is best?",
    options: [
      "AWS Global Accelerator with endpoint groups in multiple Regions",
      "Route 53 simple routing",
      "A single-Region NLB",
      "CloudFront for the TCP app",
    ],
    correct: [0],
    explanationEn:
      "Global Accelerator provides static anycast IPs and instant, health-based failover across Regional endpoint groups — no DNS TTL delay, ideal for TCP/UDP apps.",
    explanationAr:
      "الـ Global Accelerator بيدّي static anycast IPs وfailover فوري حسب الصحة عبر endpoint groups في regions — بدون تأخير DNS TTL، مثالي لتطبيقات TCP/UDP.",
    whyWrongEn:
      "Route 53 relies on DNS TTL (slower failover); a single-Region NLB has no cross-Region failover; CloudFront is for HTTP caching.",
    whyWrongAr:
      "الـ Route 53 بيعتمد على TTL (failover أبطأ)؛ والـ NLB لـ region واحدة مفيش failover عبر regions؛ والـ CloudFront لـ HTTP.",
    services: ["Global Accelerator", "Failover"],
    difficulty: "hard",
  },
  {
    id: "res-115",
    domain: "resilient",
    type: "single",
    question:
      "An ElastiCache for Redis cluster must survive the loss of a node/AZ without losing the cache layer's availability. What should be enabled?",
    options: [
      "Multi-AZ with automatic failover (replication group with replicas)",
      "A single-node cluster",
      "Memcached with no replication",
      "Larger node type only",
    ],
    correct: [0],
    explanationEn:
      "ElastiCache for Redis with a replication group and Multi-AZ automatic failover promotes a replica if the primary/AZ fails — keeping the cache available.",
    explanationAr:
      "الـ ElastiCache for Redis مع replication group و Multi-AZ failover بيرقّي replica لو الـ primary/AZ وقع — فالكاش يفضل متاح.",
    whyWrongEn:
      "A single node or Memcached (no replication) can't fail over; a bigger node alone doesn't add availability.",
    whyWrongAr:
      "node واحد أو Memcached (بدون replication) مبيعملش failover؛ وnode أكبر لوحده مبيضيفش توافر.",
    services: ["ElastiCache", "Redis", "Multi-AZ"],
    difficulty: "medium",
  },
  {
    id: "res-116",
    domain: "resilient",
    type: "single",
    question:
      "A company wants its RDS database backups retained for point-in-time recovery and to copy a snapshot to a second Region for disaster recovery. Which two native capabilities apply?",
    options: [
      "RDS automated backups (PITR) + cross-Region snapshot copy",
      "Only manual exports to S3",
      "DynamoDB Global Tables",
      "EBS Multi-Attach",
    ],
    correct: [0],
    explanationEn:
      "RDS automated backups enable point-in-time recovery, and you can copy snapshots to another Region for DR — both are native RDS features.",
    explanationAr:
      "الـ RDS automated backups بيفعّلوا PITR، وتقدر تنسخ snapshots لـ region تانية للـ DR — الاتنين مميزات أصلية في RDS.",
    whyWrongEn:
      "Manual exports alone aren't PITR; Global Tables is DynamoDB; EBS Multi-Attach is shared block storage, not DB backup.",
    whyWrongAr:
      "الـ exports اليدوية مش PITR؛ والـ Global Tables لـ DynamoDB؛ والـ EBS Multi-Attach تخزين block مشترك مش backup.",
    services: ["RDS", "PITR", "Snapshots"],
    difficulty: "medium",
  },
  {
    id: "res-117",
    domain: "resilient",
    type: "single",
    question:
      "A company needs an ASG to add capacity based directly on how many requests each instance is handling through the ALB, keeping a steady requests-per-target. Which scaling policy/metric fits best?",
    options: [
      "Target tracking on the ALB RequestCountPerTarget metric",
      "A fixed scheduled scale-out at midnight",
      "Manual scaling",
      "Scale on disk space only",
    ],
    correct: [0],
    explanationEn:
      "Target tracking on ALBRequestCountPerTarget keeps a steady number of requests per instance, scaling precisely with actual traffic.",
    explanationAr:
      "الـ Target tracking على ALBRequestCountPerTarget بيحافظ على عدد ثابت من الطلبات لكل instance، فبيتوسّع بدقة مع الترافيك الفعلي.",
    whyWrongEn:
      "Scheduled/manual scaling ignores real-time load; disk space isn't a good proxy for request load.",
    whyWrongAr:
      "الـ scheduled/manual بيتجاهل الحمل اللحظي؛ ومساحة القرص مش مؤشر كويس لحمل الطلبات.",
    services: ["Auto Scaling", "ALB", "Target Tracking"],
    difficulty: "medium",
  },
  {
    id: "res-118",
    domain: "resilient",
    type: "single",
    question:
      "A workflow orchestrates many short, high-volume steps (hundreds of thousands per second) where cost and throughput matter more than long-running durability. Which Step Functions workflow type fits?",
    options: [
      "Express workflows",
      "Standard workflows",
      "SQS FIFO",
      "EventBridge Pipes",
    ],
    correct: [0],
    explanationEn:
      "Step Functions Express workflows are optimized for high-volume, short-duration executions (event processing) at low cost; Standard suits long-running, auditable workflows.",
    explanationAr:
      "الـ Step Functions Express محسّنة للتنفيذات عالية الحجم قصيرة المدة (معالجة أحداث) بتكلفة قليلة؛ والـ Standard للـ workflows الطويلة القابلة للتدقيق.",
    whyWrongEn:
      "SQS FIFO is a queue, not an orchestrator; EventBridge Pipes connects sources to targets but isn't a workflow engine choice here.",
    whyWrongAr:
      "الـ SQS FIFO طابور مش منسّق؛ والـ EventBridge Pipes بيوصّل مصادر بأهداف مش اختيار محرّك workflow هنا.",
    services: ["Step Functions", "Express"],
    difficulty: "medium",
  },
  {
    id: "res-119",
    domain: "resilient",
    type: "single",
    question:
      "To improve even traffic distribution when backend instances are unevenly spread across AZs behind a load balancer, which setting should be enabled?",
    options: [
      "Cross-zone load balancing",
      "Sticky sessions",
      "Connection draining",
      "A cluster placement group",
    ],
    correct: [0],
    explanationEn:
      "Cross-zone load balancing distributes traffic evenly across all registered targets in all AZs, preventing imbalance when AZs have different instance counts.",
    explanationAr:
      "الـ cross-zone load balancing بيوزّع الترافيك بالتساوي على كل الـ targets في كل الـ AZs، فبيمنع عدم التوازن لما الـ AZs فيها أعداد instances مختلفة.",
    whyWrongEn:
      "Sticky sessions pin clients; connection draining handles deregistration; placement groups affect instance placement, not LB distribution.",
    whyWrongAr:
      "الـ sticky sessions بتثبّت العميل؛ والـ connection draining للـ deregistration؛ والـ placement groups بتأثّر على مكان الـ instances مش توزيع الـ LB.",
    services: ["ELB", "Cross-Zone Load Balancing"],
    difficulty: "medium",
  },
  {
    id: "res-120",
    domain: "resilient",
    type: "single",
    question:
      "Newly launched ASG instances take ~3 minutes to warm up. During scale-out, the ASG adds too many instances because new ones aren't yet handling load. Which setting fixes this?",
    options: [
      "Set an instance warmup / health check grace period so new instances aren't counted until ready",
      "Reduce the desired capacity to 1",
      "Disable the load balancer health check",
      "Use Spot Instances",
    ],
    correct: [0],
    explanationEn:
      "Configuring instance warmup (and a health check grace period) prevents new instances from counting toward metrics or being marked unhealthy until they're ready — avoiding over-scaling.",
    explanationAr:
      "ضبط instance warmup (و health check grace period) بيمنع الـ instances الجديدة من الاحتساب في المقاييس أو اعتبارها unhealthy لحد ما تجهز — فبيتجنّب الـ over-scaling.",
    whyWrongEn:
      "Lowering desired capacity hurts availability; disabling health checks hides real failures; Spot doesn't address warmup timing.",
    whyWrongAr:
      "تقليل الـ desired capacity بيضر التوافر؛ وتعطيل الـ health checks بيخفي الأعطال؛ والـ Spot مالهوش علاقة بتوقيت الإحماء.",
    services: ["Auto Scaling", "Warmup"],
    difficulty: "hard",
  },
  {
    id: "res-121",
    domain: "resilient",
    type: "single",
    question:
      "A company needs a relational DB deployment that not only fails over automatically but also provides two readable standby instances for higher availability and read capacity. Which option fits?",
    options: [
      "Amazon RDS Multi-AZ DB cluster (with two readable standbys)",
      "RDS Single-AZ with one read replica",
      "A self-managed DB on one EC2 instance",
      "DynamoDB on-demand",
    ],
    correct: [0],
    explanationEn:
      "The RDS Multi-AZ DB cluster deployment provides a writer plus two readable standby instances across AZs — automatic failover and extra read capacity.",
    explanationAr:
      "الـ RDS Multi-AZ DB cluster بيدّي writer + standby-تين قابلين للقراءة عبر الـ AZs — failover تلقائي وسعة قراءة إضافية.",
    whyWrongEn:
      "Single-AZ has no automatic AZ failover; a single EC2 DB is a SPOF; DynamoDB isn't relational.",
    whyWrongAr:
      "الـ Single-AZ مفيش failover تلقائي؛ وDB على EC2 واحد SPOF؛ والـ DynamoDB مش علائقي.",
    services: ["RDS", "Multi-AZ DB Cluster"],
    difficulty: "medium",
  },
  {
    id: "res-122",
    domain: "resilient",
    type: "single",
    question:
      "A consumer reading from an SQS queue is polling constantly and incurring many empty responses, wasting requests. Which setting reduces empty receives and cost?",
    options: [
      "Enable long polling (WaitTimeSeconds > 0)",
      "Decrease the visibility timeout to 0",
      "Switch to short polling",
      "Add a NAT gateway",
    ],
    correct: [0],
    explanationEn:
      "Long polling waits for messages to arrive (up to WaitTimeSeconds), reducing empty responses and request costs compared to short polling.",
    explanationAr:
      "الـ long polling بيستنى وصول الرسائل (لحد WaitTimeSeconds)، فبيقلّل الردود الفاضية وتكلفة الطلبات مقارنة بالـ short polling.",
    whyWrongEn:
      "A 0 visibility timeout causes duplicate processing; short polling is the cause of empty receives; NAT is unrelated.",
    whyWrongAr:
      "visibility timeout = 0 بيسبب معالجة مكرّرة؛ والـ short polling هو سبب الردود الفاضية؛ والـ NAT مالوش علاقة.",
    services: ["SQS", "Long Polling"],
    difficulty: "medium",
  },
  {
    id: "res-123",
    domain: "resilient",
    type: "single",
    question:
      "A company wants to replace a manual nightly DynamoDB export with automatic, continuous protection allowing restore to any second in the last 35 days. What should they enable?",
    options: [
      "DynamoDB point-in-time recovery (PITR)",
      "DynamoDB DAX",
      "A larger read capacity",
      "S3 lifecycle policy",
    ],
    correct: [0],
    explanationEn:
      "PITR provides continuous backups with restore to any second in the last 35 days — no manual export jobs.",
    explanationAr:
      "الـ PITR بيدّي backups مستمرة مع استرجاع لأي ثانية في آخر 35 يوم — بدون مهام export يدوية.",
    whyWrongEn:
      "DAX is a cache; more read capacity doesn't back up data; S3 lifecycle manages S3 objects.",
    whyWrongAr:
      "الـ DAX كاش؛ وسعة قراءة أكبر مبتعملش backup؛ والـ S3 lifecycle بيدير أوبجكتس S3.",
    services: ["DynamoDB", "PITR"],
    difficulty: "easy",
  },
  {
    id: "res-124",
    domain: "resilient",
    type: "single",
    question:
      "An application must remain available if an entire AWS Region becomes unavailable, with near-zero downtime and active traffic in both Regions. Which DR strategy is required?",
    options: [
      "Multi-Site Active/Active across two Regions",
      "Backup & Restore",
      "Pilot Light",
      "Single-AZ with frequent snapshots",
    ],
    correct: [0],
    explanationEn:
      "Only Multi-Site Active/Active (both Regions serving live traffic) delivers near-zero RTO/RPO if a whole Region fails — at the highest cost.",
    explanationAr:
      "الـ Multi-Site Active/Active بس (الـ region-تين بيخدموا ترافيك حي) بيدّي RTO/RPO قريب من صفر لو region كاملة وقعت — بأعلى تكلفة.",
    whyWrongEn:
      "Backup & Restore and Pilot Light have minutes-to-hours RTO; Single-AZ doesn't even survive an AZ failure, let alone a Region.",
    whyWrongAr:
      "الـ Backup & Restore و Pilot Light الـ RTO بتاعهم دقائق لساعات؛ والـ Single-AZ مبيستحملش حتى عطل AZ.",
    services: ["DR", "Multi-Site", "Active-Active"],
    difficulty: "medium",
  },
  {
    id: "res-125",
    domain: "resilient",
    type: "multi",
    question:
      "A company wants to decouple and add resilience to an order pipeline so a slow downstream service never causes lost orders or blocks the front end. Which TWO actions help most? (Select TWO.)",
    options: [
      "Put an SQS queue between the front end and the processor.",
      "Add a dead-letter queue for messages that repeatedly fail.",
      "Call the downstream service synchronously and retry in a tight loop.",
      "Store everything in one EC2 instance's memory.",
      "Disable retries to fail fast.",
    ],
    correct: [0, 1],
    explanationEn:
      "An SQS queue buffers orders so the front end isn't blocked, and a DLQ captures poison messages for later handling — together they prevent lost orders and isolate failures.",
    explanationAr:
      "طابور SQS بيخزّن الطلبات فالـ front end مايتعطّلش، والـ DLQ بيلتقط الرسائل المعطوبة للمعالجة بعدين — مع بعض بيمنعوا فقد الطلبات ويعزلوا الأعطال.",
    whyWrongEn:
      "Tight synchronous retries amplify load; in-memory storage on one instance loses data on failure; disabling retries drops transient-failure messages.",
    whyWrongAr:
      "الـ retries المتزامنة الكثيفة بتزوّد الحمل؛ والتخزين في ذاكرة instance واحد بيضيّع الداتا عند العطل؛ وتعطيل الـ retries بيضيّع رسائل الأعطال المؤقتة.",
    services: ["SQS", "DLQ", "Decoupling"],
    difficulty: "medium",
  },
  {
    id: "res-126",
    domain: "resilient",
    type: "single",
    question:
      "A company runs a stateful application and wants user sessions to survive an individual web server failure without forcing re-login. What is the most resilient approach?",
    options: [
      "Store session state externally in ElastiCache (or DynamoDB) so any server can serve any user",
      "Rely solely on sticky sessions to one instance",
      "Store sessions on each instance's local disk",
      "Use a single web server",
    ],
    correct: [0],
    explanationEn:
      "Externalizing session state to ElastiCache/DynamoDB makes the web tier stateless, so any instance can handle any request and a server failure doesn't drop sessions.",
    explanationAr:
      "نقل حالة الـ session لـ ElastiCache/DynamoDB بيخلّي الـ web tier stateless، فأي instance يخدم أي طلب وعطل سيرفر مايضيّعش الـ sessions.",
    whyWrongEn:
      "Sticky sessions or local disk lose sessions when that instance fails; a single server is a single point of failure.",
    whyWrongAr:
      "الـ sticky sessions أو القرص المحلي بيضيّعوا الـ sessions لما الـ instance يقع؛ وسيرفر واحد single point of failure.",
    services: ["ElastiCache", "DynamoDB", "Sessions"],
    difficulty: "medium",
  },
];
