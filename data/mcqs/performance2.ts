import type { MCQ } from "../types";

export const performance2Mcqs: MCQ[] = [
  {
    id: "perf-101",
    domain: "performance",
    type: "single",
    question:
      "A company wants to run code at the CloudFront edge to modify HTTP headers and do lightweight request manipulation with the lowest latency and highest scale (millions of requests). Which option is best?",
    options: [
      "CloudFront Functions",
      "A central EC2 instance",
      "Amazon RDS triggers",
      "An on-prem proxy",
    ],
    correct: [0],
    explanationEn:
      "CloudFront Functions run ultra-lightweight JavaScript at edge locations for header manipulation, redirects, and simple logic at massive scale and the lowest latency. (Lambda@Edge handles heavier logic.)",
    explanationAr:
      "الـ CloudFront Functions بتشغّل JavaScript خفيف جدًا في الـ edge لتعديل الـ headers والـ redirects والمنطق البسيط بأكبر scale وأقل latency. (الـ Lambda@Edge للمنطق الأثقل.)",
    whyWrongEn:
      "A central EC2 instance adds latency and a bottleneck; RDS triggers run in the DB; an on-prem proxy isn't at the AWS edge.",
    whyWrongAr:
      "instance مركزي بيزوّد الـ latency وعنق زجاجة؛ وtriggers الـ RDS بتشتغل في الـ DB؛ والبروكسي on-prem مش في حافة AWS.",
    services: ["CloudFront", "CloudFront Functions", "Lambda@Edge"],
    difficulty: "medium",
  },
  {
    id: "perf-102",
    domain: "performance",
    type: "single",
    question:
      "A Java Lambda function has slow cold starts that hurt latency. Which Lambda feature is designed to reduce Java cold-start time specifically?",
    options: [
      "Lambda SnapStart",
      "Increasing the timeout",
      "Adding more Lambda layers",
      "Switching to an HTTP API",
    ],
    correct: [0],
    explanationEn:
      "Lambda SnapStart pre-initializes and snapshots the execution environment for supported runtimes (e.g., Java), dramatically reducing cold-start latency.",
    explanationAr:
      "الـ Lambda SnapStart بيجهّز ويعمل snapshot لبيئة التنفيذ للـ runtimes المدعومة (زي Java)، فبيقلّل الـ cold start بشكل كبير.",
    whyWrongEn:
      "A longer timeout doesn't reduce cold starts; layers don't speed init; the API type doesn't affect Lambda init time.",
    whyWrongAr:
      "timeout أطول مبيقلّلش الـ cold start؛ والـ layers مبتسرّعش الـ init؛ ونوع الـ API مالوش علاقة بزمن init الـ Lambda.",
    services: ["Lambda", "SnapStart"],
    difficulty: "medium",
  },
  {
    id: "perf-103",
    domain: "performance",
    type: "single",
    question:
      "An HPC application needs a shared, high-throughput, sub-millisecond file system for thousands of cores processing large datasets, integrated with S3. Which storage service fits?",
    options: [
      "Amazon FSx for Lustre",
      "Amazon EFS General Purpose",
      "Amazon S3 Standard alone",
      "Amazon EBS gp2",
    ],
    correct: [0],
    explanationEn:
      "FSx for Lustre is a high-performance parallel file system for HPC/ML that delivers sub-millisecond latency and can link to S3 — ideal for large-scale compute.",
    explanationAr:
      "الـ FSx for Lustre نظام ملفات متوازي عالي الأداء للـ HPC/ML بـ latency تحت الملّي ثانية وبيتكامل مع S3 — مثالي للحوسبة الضخمة.",
    whyWrongEn:
      "EFS is general-purpose NFS (lower HPC throughput); S3 alone isn't a POSIX file system; a single EBS gp2 volume can't serve thousands of cores.",
    whyWrongAr:
      "الـ EFS عام (throughput أقل للـ HPC)؛ والـ S3 لوحده مش نظام ملفات POSIX؛ وEBS gp2 واحد مبيخدمش آلاف الـ cores.",
    services: ["FSx for Lustre", "HPC", "S3"],
    difficulty: "hard",
  },
  {
    id: "perf-104",
    domain: "performance",
    type: "single",
    question:
      "A .NET Windows application needs a fully managed shared Windows file system supporting SMB and NTFS for multiple EC2 Windows instances. Which service should be used?",
    options: [
      "Amazon FSx for Windows File Server",
      "Amazon EFS",
      "Amazon S3",
      "Amazon EBS",
    ],
    correct: [0],
    explanationEn:
      "FSx for Windows File Server provides a managed SMB/NTFS Windows-native shared file system with Active Directory integration.",
    explanationAr:
      "الـ FSx for Windows File Server بيدّي نظام ملفات Windows مشترك مُدار بـ SMB/NTFS مع تكامل Active Directory.",
    whyWrongEn:
      "EFS is Linux/NFS; S3 is object storage; EBS is single-instance block storage — none provide native Windows SMB shares.",
    whyWrongAr:
      "الـ EFS لينكس/NFS؛ والـ S3 تخزين أوبجكتس؛ والـ EBS block لـ instance واحد — محدش فيهم SMB Windows أصلي.",
    services: ["FSx for Windows", "SMB"],
    difficulty: "medium",
  },
  {
    id: "perf-105",
    domain: "performance",
    type: "single",
    question:
      "An application uploads and reads millions of objects per second from one S3 bucket and is hitting request-rate limits. What is the recommended way to scale S3 request performance?",
    options: [
      "Spread objects across multiple key prefixes (S3 scales to 3,500 writes / 5,500 reads per prefix)",
      "Put all objects under a single prefix",
      "Switch the bucket to a smaller Region",
      "Enable S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "S3 scales request rate per prefix (≈3,500 PUT/POST/DELETE and 5,500 GET per second per prefix), so distributing keys across many prefixes multiplies throughput.",
    explanationAr:
      "الـ S3 بيتوسّع في معدّل الطلبات لكل prefix (تقريبًا 3,500 كتابة و5,500 قراءة/ثانية لكل prefix)، فتوزيع المفاتيح على prefixes كتير بيضاعف الـ throughput.",
    whyWrongEn:
      "A single prefix concentrates the rate; the Region size doesn't help; Versioning doesn't increase request throughput.",
    whyWrongAr:
      "prefix واحد بيكدّس المعدّل؛ وحجم الـ region مبيساعدش؛ والـ Versioning مبيزوّدش الـ throughput.",
    services: ["S3", "Prefixes", "Performance"],
    difficulty: "hard",
  },
  {
    id: "perf-106",
    domain: "performance",
    type: "single",
    question:
      "A read-heavy REST API on API Gateway repeatedly returns the same responses, putting load on the backend. How can latency and backend load be reduced natively?",
    options: [
      "Enable API Gateway caching for the stage",
      "Increase Lambda memory only",
      "Add more NACL rules",
      "Use a larger RDS instance",
    ],
    correct: [0],
    explanationEn:
      "API Gateway stage caching stores responses for a TTL, serving repeats from cache and reducing backend calls and latency.",
    explanationAr:
      "الـ API Gateway caching على الـ stage بيخزّن الردود لمدة TTL، فبيخدم المتكرّر من الكاش ويقلّل النداءات للـ backend والـ latency.",
    whyWrongEn:
      "More Lambda memory or a bigger DB treats symptoms, not repeated identical requests; NACLs are network ACLs.",
    whyWrongAr:
      "ذاكرة Lambda أكبر أو DB أكبر بتعالج الأعراض مش الطلبات المتكرّرة؛ والـ NACL ACLs شبكية.",
    services: ["API Gateway", "Caching"],
    difficulty: "medium",
  },
  {
    id: "perf-107",
    domain: "performance",
    type: "single",
    question:
      "A company wants better price-performance for its EC2 and Lambda workloads by moving to AWS's ARM-based processors. Which option should they evaluate?",
    options: [
      "AWS Graviton (ARM) instances / Lambda on arm64",
      "Larger x86 instances only",
      "Dedicated Hosts",
      "Spot Instances exclusively",
    ],
    correct: [0],
    explanationEn:
      "AWS Graviton (ARM) processors typically deliver better price-performance than comparable x86 for many workloads, on EC2 and Lambda (arm64).",
    explanationAr:
      "معالجات Graviton (ARM) بتدّي price-performance أفضل من x86 المماثل لأحمال كتير، على EC2 و Lambda (arm64).",
    whyWrongEn:
      "Just going bigger on x86 raises cost; Dedicated Hosts and Spot are pricing/tenancy options, not a processor price-performance upgrade.",
    whyWrongAr:
      "التكبير على x86 بيرفع التكلفة؛ والـ Dedicated Hosts و Spot خيارات تسعير/tenancy مش ترقية معالج.",
    services: ["EC2", "Graviton", "Lambda"],
    difficulty: "medium",
  },
  {
    id: "perf-108",
    domain: "performance",
    type: "single",
    question:
      "An EFS file system used by an analytics cluster needs higher aggregate throughput than the default mode allows during heavy parallel access. Which setting should be considered?",
    options: [
      "EFS Max I/O performance mode (or provisioned/elastic throughput)",
      "Switch to a single EBS gp2 volume",
      "Disable encryption",
      "Use Instance Store",
    ],
    correct: [0],
    explanationEn:
      "EFS Max I/O performance mode scales to higher aggregate throughput/IOPS for highly parallel workloads; throughput modes (provisioned/elastic) tune throughput independent of size.",
    explanationAr:
      "وضع EFS Max I/O بيتوسّع لـ throughput/IOPS أعلى للأحمال المتوازية؛ وأوضاع الـ throughput (provisioned/elastic) بتظبط الـ throughput مستقل عن الحجم.",
    whyWrongEn:
      "A single EBS volume isn't shared/parallel like EFS; disabling encryption doesn't add throughput; Instance Store isn't shared.",
    whyWrongAr:
      "EBS واحد مش مشترك/متوازي زي EFS؛ وتعطيل التشفير مبيضيفش throughput؛ والـ Instance Store مش مشترك.",
    services: ["EFS", "Performance Mode"],
    difficulty: "hard",
  },
  {
    id: "perf-109",
    domain: "performance",
    type: "single",
    question:
      "A DynamoDB table must support queries by a non-key attribute (e.g., find all orders by status) efficiently. What should be created?",
    options: [
      "A Global Secondary Index (GSI) on that attribute",
      "A larger partition key",
      "An ElastiCache cluster",
      "A full table scan each time",
    ],
    correct: [0],
    explanationEn:
      "A Global Secondary Index lets you query on alternate attributes efficiently instead of scanning the whole table.",
    explanationAr:
      "الـ Global Secondary Index بيخلّيك تستعلم على خصائص بديلة بكفاءة بدل ما تعمل scan للجدول كله.",
    whyWrongEn:
      "Changing the partition key doesn't add query patterns; a cache doesn't create new query keys; scans are slow and costly.",
    whyWrongAr:
      "تغيير الـ partition key مبيضيفش أنماط استعلام؛ والكاش مبيعملش مفاتيح استعلام؛ والـ scans بطيئة ومكلّفة.",
    services: ["DynamoDB", "GSI"],
    difficulty: "medium",
  },
  {
    id: "perf-110",
    domain: "performance",
    type: "single",
    question:
      "Athena queries over terabytes of JSON in S3 are slow and expensive (scanning all data). Which changes most improve query performance and cost?",
    options: [
      "Convert data to a columnar format (Parquet/ORC) and partition it in S3",
      "Increase the S3 bucket size",
      "Add a NAT gateway",
      "Enable S3 Transfer Acceleration",
    ],
    correct: [0],
    explanationEn:
      "Columnar formats (Parquet/ORC) plus partitioning let Athena scan far less data, cutting query time and cost (Athena bills per data scanned).",
    explanationAr:
      "الصيغ العمودية (Parquet/ORC) + الـ partitioning بتخلّي Athena تمسح داتا أقل بكتير، فتقلّل الوقت والتكلفة (Athena بتحاسب على الداتا الممسوحة).",
    whyWrongEn:
      "Bucket 'size' isn't a setting; NAT and Transfer Acceleration don't reduce data scanned by queries.",
    whyWrongAr:
      "حجم الـ bucket مش إعداد؛ والـ NAT و Transfer Acceleration مبيقلّلوش الداتا الممسوحة.",
    services: ["Athena", "Parquet", "Partitioning"],
    difficulty: "hard",
  },
  {
    id: "perf-111",
    domain: "performance",
    type: "single",
    question:
      "A company needs full-text search and log analytics with dashboards over large volumes of application logs. Which managed service is purpose-built for this?",
    options: [
      "Amazon OpenSearch Service",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon SQS",
    ],
    correct: [0],
    explanationEn:
      "Amazon OpenSearch Service provides full-text search, log analytics, and dashboards (Elasticsearch/Kibana-compatible) over large data volumes.",
    explanationAr:
      "الـ Amazon OpenSearch Service بيدّي full-text search وتحليل logs ولوحات (متوافق مع Elasticsearch/Kibana) على بيانات ضخمة.",
    whyWrongEn:
      "Redshift is a columnar warehouse for OLAP; RDS is relational OLTP; SQS is a message queue.",
    whyWrongAr:
      "الـ Redshift warehouse عمودي للـ OLAP؛ والـ RDS علائقي OLTP؛ والـ SQS طابور رسائل.",
    services: ["OpenSearch", "Logs", "Search"],
    difficulty: "medium",
  },
  {
    id: "perf-112",
    domain: "performance",
    type: "single",
    question:
      "A streaming pipeline needs multiple consumers to each read the full Kinesis stream at high throughput with dedicated, low-latency throughput per consumer. Which feature should be used?",
    options: [
      "Kinesis Data Streams Enhanced Fan-Out",
      "A single shared consumer",
      "SQS standard queue",
      "S3 event notifications",
    ],
    correct: [0],
    explanationEn:
      "Enhanced Fan-Out gives each consumer its own dedicated 2 MB/s per-shard throughput with low latency, instead of sharing the standard read throughput.",
    explanationAr:
      "الـ Enhanced Fan-Out بيدّي كل consumer throughput مخصّص 2MB/s لكل shard بـ latency قليل، بدل مشاركة الـ throughput العادي.",
    whyWrongEn:
      "A single shared consumer doesn't scale per-consumer throughput; SQS/S3 events aren't Kinesis stream fan-out.",
    whyWrongAr:
      "consumer مشترك واحد مبيوسّعش throughput لكل consumer؛ وSQS/S3 events مش fan-out لستريم Kinesis.",
    services: ["Kinesis Data Streams", "Enhanced Fan-Out"],
    difficulty: "hard",
  },
  {
    id: "perf-113",
    domain: "performance",
    type: "single",
    question:
      "An Aurora cluster's read traffic grows and shrinks unpredictably. The team wants replicas to scale automatically with load. What should they enable?",
    options: [
      "Aurora Replica Auto Scaling (target tracking on replica metrics)",
      "A fixed number of replicas sized for peak",
      "Multi-AZ standby reads",
      "DynamoDB on-demand",
    ],
    correct: [0],
    explanationEn:
      "Aurora Replica Auto Scaling adds/removes read replicas automatically based on metrics like CPU/connections, matching read capacity to demand.",
    explanationAr:
      "الـ Aurora Replica Auto Scaling بيضيف/يشيل read replicas تلقائيًا حسب مقاييس زي الـ CPU/الاتصالات، فبيطابق سعة القراءة مع الطلب.",
    whyWrongEn:
      "Fixed peak sizing wastes money off-peak; the Multi-AZ standby (RDS) doesn't serve reads; DynamoDB isn't Aurora.",
    whyWrongAr:
      "الحجم الثابت للذروة بيهدر وقت الهدوء؛ وstandby الـ Multi-AZ في RDS مبيخدمش قراءة؛ والـ DynamoDB مش Aurora.",
    services: ["Aurora", "Auto Scaling"],
    difficulty: "medium",
  },
  {
    id: "perf-114",
    domain: "performance",
    type: "single",
    question:
      "A variable, sometimes-idle relational workload needs the database to automatically scale capacity up and down (even to low levels) without managing instances. Which option fits?",
    options: [
      "Amazon Aurora Serverless v2",
      "A fixed large RDS instance",
      "Self-managed MySQL on EC2",
      "Amazon Redshift",
    ],
    correct: [0],
    explanationEn:
      "Aurora Serverless v2 automatically scales database capacity up and down based on load — ideal for variable or intermittent relational workloads.",
    explanationAr:
      "الـ Aurora Serverless v2 بيوزّع سعة الداتابيز up/down تلقائيًا حسب الحمل — مثالي للأحمال العلائقية المتغيّرة أو المتقطّعة.",
    whyWrongEn:
      "A fixed instance wastes capacity when idle; self-managed adds ops burden; Redshift is an OLAP warehouse, not OLTP.",
    whyWrongAr:
      "instance ثابت بيهدر وقت الخمول؛ والإدارة الذاتية بتزوّد العبء؛ والـ Redshift warehouse للـ OLAP مش OLTP.",
    services: ["Aurora Serverless v2"],
    difficulty: "medium",
  },
  {
    id: "perf-115",
    domain: "performance",
    type: "single",
    question:
      "A media site serves the same large video files to viewers worldwide and wants to minimize latency and origin load. Which is the most effective performance improvement?",
    options: [
      "Distribute content via Amazon CloudFront (CDN edge caching)",
      "Increase the origin EC2 instance size",
      "Move the bucket to one central Region",
      "Use a larger EBS volume",
    ],
    correct: [0],
    explanationEn:
      "CloudFront caches content at global edge locations close to viewers, cutting latency and offloading the origin — the standard CDN performance pattern.",
    explanationAr:
      "الـ CloudFront بيعمل cache في الـ edge قريب من المشاهدين، فبيقلّل الـ latency ويخفّف عن الأصل — نمط الـ CDN القياسي.",
    whyWrongEn:
      "A bigger origin or EBS doesn't solve global latency; a single central Region is far from distant users.",
    whyWrongAr:
      "أصل أكبر أو EBS مبيحلّش الـ latency العالمي؛ وregion مركزية واحدة بعيدة عن المستخدمين.",
    services: ["CloudFront", "CDN"],
    difficulty: "easy",
  },
  {
    id: "perf-116",
    domain: "performance",
    type: "single",
    question:
      "A relational database's reads are slowing down writes during peak hours. The team wants to offload reporting/read queries without changing the write path. What should they add?",
    options: [
      "One or more read replicas and direct read traffic to them",
      "A bigger write instance only",
      "An SQS queue in front of writes",
      "S3 Transfer Acceleration",
    ],
    correct: [0],
    explanationEn:
      "Read replicas offload read/reporting queries from the primary, improving overall performance without altering writes.",
    explanationAr:
      "الـ read replicas بتخفّف القراءة/التقارير عن الـ primary، فبتحسّن الأداء العام من غير ما تغيّر الكتابة.",
    whyWrongEn:
      "A bigger write instance is costly and still mixes reads/writes; SQS buffers writes (different problem); Transfer Acceleration is for S3.",
    whyWrongAr:
      "instance كتابة أكبر مكلّف ولسه بيخلط قراءة/كتابة؛ والـ SQS بيخزّن الكتابة (مشكلة تانية)؛ والـ Transfer Acceleration لـ S3.",
    services: ["RDS", "Read Replicas"],
    difficulty: "easy",
  },
  {
    id: "perf-117",
    domain: "performance",
    type: "single",
    question:
      "A workload needs the highest, most consistent IOPS for a latency-sensitive transactional database on a single EBS volume. Which volume type should be chosen?",
    options: [
      "io2 Block Express (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)",
      "gp2 with default settings",
    ],
    correct: [0],
    explanationEn:
      "io2 Block Express provides the highest, most consistent provisioned IOPS and durability for mission-critical, latency-sensitive databases.",
    explanationAr:
      "الـ io2 Block Express بيدّي أعلى IOPS مضمون وأكثر ثباتًا و durability للقواعد الحرجة الحسّاسة للـ latency.",
    whyWrongEn:
      "st1/sc1 are HDD optimized for throughput/cold data (low IOPS); gp2 can't match io2's high consistent IOPS.",
    whyWrongAr:
      "الـ st1/sc1 أقراص HDD للـ throughput/البارد (IOPS قليل)؛ والـ gp2 مبيوصلش لـ IOPS io2 الثابت العالي.",
    services: ["EBS", "io2", "IOPS"],
    difficulty: "medium",
  },
  {
    id: "perf-118",
    domain: "performance",
    type: "single",
    question:
      "Tightly-coupled HPC nodes need the lowest possible inter-node network latency and highest bandwidth. Besides a cluster placement group, which networking feature helps most?",
    options: [
      "Elastic Fabric Adapter (EFA) / Enhanced Networking",
      "A NAT gateway",
      "A larger EBS volume",
      "CloudFront",
    ],
    correct: [0],
    explanationEn:
      "Elastic Fabric Adapter (and Enhanced Networking via ENA/SR-IOV) provides low-latency, high-bandwidth inter-node communication for HPC/ML.",
    explanationAr:
      "الـ Elastic Fabric Adapter (و Enhanced Networking عبر ENA/SR-IOV) بيدّي اتصال بين العقد بـ latency قليل وbandwidth عالي للـ HPC/ML.",
    whyWrongEn:
      "A NAT gateway is for outbound internet; EBS is storage; CloudFront is a CDN — none lower inter-node latency.",
    whyWrongAr:
      "الـ NAT للخروج للإنترنت؛ والـ EBS تخزين؛ والـ CloudFront CDN — محدش بيقلّل latency بين العقد.",
    services: ["EFA", "Enhanced Networking", "HPC"],
    difficulty: "hard",
  },
  {
    id: "perf-119",
    domain: "performance",
    type: "single",
    question:
      "A Redshift data warehouse experiences slowdowns when many users run concurrent queries during business hours. Which feature helps handle concurrency spikes?",
    options: [
      "Redshift Concurrency Scaling",
      "A single small node cluster",
      "Disabling result caching",
      "Moving data to RDS",
    ],
    correct: [0],
    explanationEn:
      "Concurrency Scaling adds transient capacity to handle bursts of concurrent queries, keeping performance consistent during peaks.",
    explanationAr:
      "الـ Concurrency Scaling بيضيف سعة مؤقتة للتعامل مع موجات الاستعلامات المتزامنة، فبيحافظ على أداء ثابت وقت الذروة.",
    whyWrongEn:
      "A tiny single node worsens concurrency; disabling caching hurts performance; RDS isn't a warehouse for OLAP at scale.",
    whyWrongAr:
      "node واحد صغير بيسوّء التزامن؛ وتعطيل الكاش بيضر الأداء؛ والـ RDS مش warehouse للـ OLAP الكبير.",
    services: ["Redshift", "Concurrency Scaling"],
    difficulty: "medium",
  },
  {
    id: "perf-120",
    domain: "performance",
    type: "single",
    question:
      "A company needs sub-millisecond reads for a leaderboard with frequent updates and ranking queries. Which service best fits the performance need?",
    options: [
      "Amazon ElastiCache for Redis (sorted sets)",
      "Amazon S3",
      "Amazon Athena",
      "Amazon Glacier",
    ],
    correct: [0],
    explanationEn:
      "ElastiCache for Redis offers in-memory sub-millisecond performance and sorted sets, perfect for real-time leaderboards and ranking.",
    explanationAr:
      "الـ ElastiCache for Redis بيدّي أداء in-memory تحت الملّي ثانية وsorted sets، مثالي للـ leaderboards اللحظية والترتيب.",
    whyWrongEn:
      "S3/Glacier are object/archive storage (not low-latency DB ops); Athena is for ad-hoc SQL over S3, not real-time updates.",
    whyWrongAr:
      "الـ S3/Glacier تخزين أوبجكتس/أرشيف (مش عمليات DB سريعة)؛ والـ Athena لـ SQL على S3 مش تحديثات لحظية.",
    services: ["ElastiCache", "Redis"],
    difficulty: "easy",
  },
  {
    id: "perf-121",
    domain: "performance",
    type: "single",
    question:
      "A company wants right-sizing recommendations to improve performance and efficiency of EC2, EBS, and Lambda based on actual utilization. Which service provides ML-based guidance?",
    options: [
      "AWS Compute Optimizer",
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "AWS Compute Optimizer analyzes utilization and recommends optimal instance/volume/function configurations for performance and cost.",
    explanationAr:
      "الـ AWS Compute Optimizer بيحلّل الاستخدام ويوصّي بأفضل إعدادات instance/volume/function للأداء والتكلفة.",
    whyWrongEn:
      "CloudTrail audits API calls; Inspector scans vulnerabilities; Config tracks configuration compliance.",
    whyWrongAr:
      "الـ CloudTrail بيدقّق الـ API؛ والـ Inspector بيفحص الثغرات؛ والـ Config بيتتبّع الامتثال.",
    services: ["Compute Optimizer"],
    difficulty: "easy",
  },
  {
    id: "perf-122",
    domain: "performance",
    type: "single",
    question:
      "A company runs a large managed Apache Spark/Hadoop big-data processing job and wants a managed cluster service to run it efficiently at scale. Which service should they use?",
    options: [
      "Amazon EMR",
      "Amazon Athena",
      "Amazon QuickSight",
      "AWS Glue DataBrew",
    ],
    correct: [0],
    explanationEn:
      "Amazon EMR runs managed big-data frameworks (Spark, Hadoop, Hive, Presto) on scalable clusters for large processing jobs.",
    explanationAr:
      "الـ Amazon EMR بيشغّل أطر big data مُدارة (Spark، Hadoop، Hive، Presto) على clusters قابلة للتوسّع للمعالجة الضخمة.",
    whyWrongEn:
      "Athena is serverless SQL on S3 (not a Spark cluster); QuickSight is BI dashboards; Glue DataBrew is visual data prep.",
    whyWrongAr:
      "الـ Athena SQL serverless على S3 (مش Spark cluster)؛ والـ QuickSight لوحات BI؛ وGlue DataBrew تحضير بيانات مرئي.",
    services: ["EMR", "Spark"],
    difficulty: "medium",
  },
  {
    id: "perf-123",
    domain: "performance",
    type: "single",
    question:
      "A serverless ETL job needs to crawl data, infer schemas, and transform data between S3, databases, and a data catalog without managing servers. Which service fits?",
    options: [
      "AWS Glue",
      "Amazon EC2 with cron",
      "Amazon RDS",
      "AWS Direct Connect",
    ],
    correct: [0],
    explanationEn:
      "AWS Glue is a serverless ETL service with crawlers, a data catalog, and managed Spark jobs for transforming data across sources.",
    explanationAr:
      "الـ AWS Glue خدمة ETL serverless فيها crawlers و data catalog وjobs مُدارة (Spark) لتحويل البيانات بين المصادر.",
    whyWrongEn:
      "EC2 cron is self-managed; RDS is a database; Direct Connect is networking.",
    whyWrongAr:
      "EC2 cron إدارة ذاتية؛ والـ RDS قاعدة بيانات؛ والـ Direct Connect شبكات.",
    services: ["Glue", "ETL"],
    difficulty: "medium",
  },
  {
    id: "perf-124",
    domain: "performance",
    type: "single",
    question:
      "A scientific batch workload submits thousands of independent compute jobs that should run efficiently on dynamically provisioned compute (including Spot) without managing a scheduler. Which service is purpose-built?",
    options: [
      "AWS Batch",
      "Amazon API Gateway",
      "Amazon CloudFront",
      "Amazon Cognito",
    ],
    correct: [0],
    explanationEn:
      "AWS Batch dynamically provisions and schedules large numbers of batch jobs across compute (EC2/Spot/Fargate), with no scheduler to manage.",
    explanationAr:
      "الـ AWS Batch بيوفّر ويجدول أعداد كبيرة من الـ batch jobs على الحوسبة (EC2/Spot/Fargate)، بدون scheduler تديره.",
    whyWrongEn:
      "API Gateway, CloudFront, and Cognito are for APIs, CDN, and identity — not batch compute orchestration.",
    whyWrongAr:
      "الـ API Gateway و CloudFront و Cognito للـ APIs والـ CDN والهوية — مش تنسيق batch.",
    services: ["AWS Batch", "Spot"],
    difficulty: "medium",
  },
  {
    id: "perf-125",
    domain: "performance",
    type: "single",
    question:
      "A globally distributed multiplayer game needs the lowest, most consistent network latency to the application by routing players over the AWS backbone to the nearest healthy Region. Which service improves network performance?",
    options: [
      "AWS Global Accelerator",
      "Amazon Route 53 simple routing",
      "Amazon S3 Transfer Acceleration",
      "AWS Glue",
    ],
    correct: [0],
    explanationEn:
      "Global Accelerator routes TCP/UDP traffic onto the AWS global network from the nearest edge, improving and stabilizing latency for non-HTTP apps like games.",
    explanationAr:
      "الـ Global Accelerator بيوجّه ترافيك TCP/UDP على شبكة AWS من أقرب edge، فبيحسّن ويثبّت الـ latency لتطبيقات غير HTTP زي الألعاب.",
    whyWrongEn:
      "Route 53 simple routing just resolves DNS; Transfer Acceleration is for S3 uploads; Glue is ETL.",
    whyWrongAr:
      "الـ Route 53 simple بيحلّ DNS بس؛ والـ Transfer Acceleration لرفع S3؛ والـ Glue ETL.",
    services: ["Global Accelerator"],
    difficulty: "medium",
  },
  {
    id: "perf-126",
    domain: "performance",
    type: "single",
    question:
      "An e-commerce site has a read-heavy product catalog backed by RDS. To dramatically cut read latency and database load for repeated reads, which caching layer is most appropriate?",
    options: [
      "Amazon ElastiCache in front of RDS (lazy loading / write-through)",
      "S3 Glacier",
      "A bigger NAT gateway",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "An ElastiCache layer caches frequent reads in memory, cutting RDS load and latency. Lazy loading caches on miss; write-through keeps the cache fresh.",
    explanationAr:
      "طبقة ElastiCache بتخزّن القراءات المتكرّرة في الذاكرة، فبتقلّل حمل وlatency الـ RDS. الـ lazy loading بيخزّن عند الـ miss؛ والـ write-through بيحافظ على الكاش حديث.",
    whyWrongEn:
      "Glacier is archival; a NAT gateway is networking; Config tracks configuration — none are read caches.",
    whyWrongAr:
      "الـ Glacier أرشيفي؛ والـ NAT شبكات؛ والـ Config للإعدادات — محدش كاش قراءة.",
    services: ["ElastiCache", "RDS", "Caching"],
    difficulty: "easy",
  },
];
