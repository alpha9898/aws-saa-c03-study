import type { QA } from "./types";

export const QAS: QA[] = [
  // ---------------- Security ----------------
  {
    id: "qa-sec-01",
    domain: "security",
    questionEn: "What is the principle of least privilege, and why does it matter on the exam?",
    answerEn:
      "Grant only the minimum permissions needed to perform a task — no more. It limits blast radius if credentials are compromised. On the exam, IAM answers that scope permissions narrowly (specific actions/resources) beat broad ones like AdministratorAccess.",
    answerAr:
      "تدّي أقل صلاحيات لازمة لإنجاز المهمة بس — مش أكتر. بتقلّل الضرر لو الـ credentials اتسرّبت. في الامتحان، الإجابات اللي بتضيّق الصلاحيات (actions/resources محدّدة) بتغلب الواسعة زي AdministratorAccess.",
    services: ["IAM", "Least Privilege"],
  },
  {
    id: "qa-sec-02",
    domain: "security",
    questionEn: "When should you use an IAM role instead of access keys?",
    answerEn:
      "Almost always for AWS services (EC2, Lambda, ECS) and cross-account access. Roles deliver temporary, auto-rotated credentials via STS, so you never store long-term keys on a server or in code.",
    answerAr:
      "تقريبًا دايمًا لخدمات AWS (EC2، Lambda، ECS) والوصول cross-account. الـ roles بتدّي credentials مؤقتة بتتجدّد تلقائيًا عبر STS، فمتخزّنش keys دائمة على سيرفر أو في الكود.",
    services: ["IAM Role", "STS"],
  },
  {
    id: "qa-sec-03",
    domain: "security",
    questionEn: "How do SCPs and IAM policies interact to decide what an account can do?",
    answerEn:
      "SCPs set the maximum allowed in an Organization/OU; IAM policies grant within that ceiling. An action is allowed only if BOTH permit it, and any explicit Deny (in either) wins. SCPs restrict, they never grant.",
    answerAr:
      "الـ SCP بيحدّد السقف الأقصى في الـ Org/OU؛ والـ IAM policy بتمنح جوّه السقف ده. الـ action بيُسمح بس لو الاتنين سمحوا، وأي Deny صريح (في أي منهم) بيغلب. الـ SCP بيقيّد مش بيمنح.",
    services: ["SCP", "IAM"],
  },
  {
    id: "qa-sec-04",
    domain: "security",
    questionEn: "What is envelope encryption and why does AWS use it?",
    answerEn:
      "KMS generates a data key; the plaintext key encrypts your data locally and the encrypted key is stored beside the ciphertext. It avoids KMS's 4 KB direct-encrypt limit and is fast for large files, while keeping the master key in KMS.",
    answerAr:
      "الـ KMS بيطلّع data key؛ النسخة الـ plaintext بتشفّر داتاك محليًا والنسخة المشفّرة بتتخزّن جنب الـ ciphertext. بيتجنّب حد الـ 4KB المباشر في KMS وسريع للملفات الكبيرة، مع إبقاء المفتاح الرئيسي في KMS.",
    services: ["KMS", "Envelope Encryption"],
  },
  {
    id: "qa-sec-05",
    domain: "security",
    questionEn: "Which S3 encryption option do you pick when keys must never leave your premises?",
    answerEn:
      "SSE-C (you supply the key on each request) or client-side encryption — both keep key ownership with you. SSE-S3 and SSE-KMS use AWS-held keys, which fails an 'on-premises keys' requirement.",
    answerAr:
      "SSE-C (إنت بتبعت المفتاح في كل request) أو client-side encryption — الاتنين بيخلّوا ملكية المفتاح معاك. الـ SSE-S3 و SSE-KMS بيستخدموا مفاتيح في AWS، فبيفشلوا شرط 'المفاتيح on-prem'.",
    services: ["S3", "SSE-C"],
  },
  {
    id: "qa-sec-06",
    domain: "security",
    questionEn: "Security Group or NACL — which do you reach for to block a specific malicious IP?",
    answerEn:
      "A NACL, because it supports explicit Deny rules at the subnet level. Security Groups only allow (no deny) and are stateful at the instance level, so they can't block a specific IP range.",
    answerAr:
      "NACL، لأنها بتدعم قواعد Deny صريحة على مستوى الـ subnet. الـ Security Group بتسمح بس (مفيش deny) وهي stateful على مستوى الـ instance، فمش هتقدر تمنع IP معيّن.",
    services: ["NACL", "Security Group"],
  },
  {
    id: "qa-sec-07",
    domain: "security",
    questionEn: "A question says 'intelligent threat detection' — which service is it?",
    answerEn:
      "Amazon GuardDuty. It continuously analyzes CloudTrail, VPC Flow Logs, and DNS logs with ML to detect suspicious activity, with no agents to deploy.",
    answerAr:
      "Amazon GuardDuty. بيحلّل باستمرار CloudTrail و VPC Flow Logs و DNS logs بالـ ML لكشف النشاط المشبوه، وبدون agents.",
    services: ["GuardDuty"],
  },
  {
    id: "qa-sec-08",
    domain: "security",
    questionEn: "A question says 'discover sensitive PII in S3' — which service?",
    answerEn:
      "Amazon Macie. It uses ML to discover and classify sensitive data (like PII) stored in S3. (Inspector = vulnerability scanning; GuardDuty = threat detection.)",
    answerAr:
      "Amazon Macie. بيستخدم ML لاكتشاف وتصنيف البيانات الحساسة (زي PII) في S3. (Inspector = فحص ثغرات؛ GuardDuty = كشف تهديدات.)",
    services: ["Macie"],
  },
  {
    id: "qa-sec-09",
    domain: "security",
    questionEn: "How do you give workforce users single sign-on across many AWS accounts?",
    answerEn:
      "Use IAM Identity Center (formerly AWS SSO), integrated with your external IdP or Active Directory. It centrally manages access to all Organization accounts and to SaaS apps — far better than per-account IAM users.",
    answerAr:
      "استخدم IAM Identity Center (الاسم القديم AWS SSO)، متكامل مع الـ IdP الخارجي أو Active Directory. بيدير مركزيًا الوصول لكل حسابات الـ Organization وتطبيقات الـ SaaS — أحسن بكتير من IAM users لكل حساب.",
    services: ["IAM Identity Center"],
  },
  {
    id: "qa-sec-10",
    domain: "security",
    questionEn: "Where must an ACM certificate live to be used with CloudFront?",
    answerEn:
      "In us-east-1 (N. Virginia). ACM public certs are free and auto-renew and integrate with CloudFront, ALB, and API Gateway — but not directly on EC2.",
    answerAr:
      "في us-east-1 (N. Virginia). شهادات ACM العامة مجانية وبتتجدّد تلقائيًا وبتتكامل مع CloudFront و ALB و API Gateway — لكن مش على EC2 مباشرة.",
    services: ["ACM", "CloudFront"],
  },
  {
    id: "qa-sec-11",
    domain: "security",
    questionEn: "Secrets Manager or Parameter Store — how do you choose?",
    answerEn:
      "Need automatic rotation (DB passwords, RDS integration)? → Secrets Manager (paid). Just config values and simple secrets at lowest cost? → Parameter Store (free Standard tier).",
    answerAr:
      "محتاج rotation تلقائي (DB passwords، تكامل RDS)؟ → Secrets Manager (مدفوع). مجرد config وأسرار بسيطة بأقل تكلفة؟ → Parameter Store (Standard مجاني).",
    services: ["Secrets Manager", "Parameter Store"],
  },
  {
    id: "qa-sec-12",
    domain: "security",
    questionEn: "What's the difference between CloudTrail, CloudWatch, and Config?",
    answerEn:
      "CloudTrail = who made which API call (audit). CloudWatch = is the resource healthy/performant (metrics, logs, alarms). Config = configuration history + compliance/drift evaluation.",
    answerAr:
      "CloudTrail = مين عمل أنهي API call (تدقيق). CloudWatch = المورد سليم/شغّال كويس؟ (metrics، logs، alarms). Config = تاريخ الإعدادات + تقييم الامتثال/الـ drift.",
    services: ["CloudTrail", "CloudWatch", "Config"],
  },

  // ---------------- Resilient ----------------
  {
    id: "qa-res-01",
    domain: "resilient",
    questionEn: "How do you remember RTO vs RPO?",
    answerEn:
      "RTO = Time you can be down ('when are we back up?'). RPO = data-loss Point ('to what moment do we recover?'). Lower RPO → more frequent backups/replication; lower RTO → readier standby/failover.",
    answerAr:
      "RTO = الوقت اللي تستحمل تكون down ('إمتى نرجع؟'). RPO = نقطة فقدان الداتا ('نرجع لأي لحظة؟'). RPO أقل → backups/replication أكتر؛ RTO أقل → standby/failover أجهز.",
    services: ["RTO", "RPO", "DR"],
  },
  {
    id: "qa-res-02",
    domain: "resilient",
    questionEn: "How do you choose among the four DR strategies?",
    answerEn:
      "Match cost to required RTO/RPO: Backup & Restore (hours, cheapest) → Pilot Light (tens of min) → Warm Standby (minutes) → Multi-Site Active/Active (~0, most expensive). The faster the recovery, the higher the cost.",
    answerAr:
      "وفّق التكلفة مع الـ RTO/RPO المطلوب: Backup & Restore (ساعات، الأرخص) → Pilot Light (عشرات الدقائق) → Warm Standby (دقائق) → Multi-Site Active/Active (≈صفر، الأغلى). كل ما التعافي أسرع، التكلفة أعلى.",
    services: ["DR"],
  },
  {
    id: "qa-res-03",
    domain: "resilient",
    questionEn: "ALB or NLB — when do you pick each?",
    answerEn:
      "ALB for HTTP/HTTPS apps needing path/host routing, WAF, or Lambda targets (Layer 7). NLB for extreme performance, millions of req/s, static IP, or non-HTTP TCP/UDP (Layer 4).",
    answerAr:
      "ALB لتطبيقات HTTP/HTTPS المحتاجة path/host routing أو WAF أو أهداف Lambda (Layer 7). NLB لأداء عالي جدًا، ملايين req/s، static IP، أو TCP/UDP غير HTTP (Layer 4).",
    services: ["ALB", "NLB"],
  },
  {
    id: "qa-res-04",
    domain: "resilient",
    questionEn: "Multi-AZ vs Read Replicas — what's the core difference?",
    answerEn:
      "Multi-AZ is for availability: a synchronous standby with automatic failover (it does NOT serve reads). Read Replicas are for scalability: asynchronous copies that serve read traffic and can be cross-Region.",
    answerAr:
      "Multi-AZ للتوافر: standby متزامن مع failover تلقائي (مبيخدمش قراءة). Read Replicas للتوسّع: نسخ غير متزامنة بتخدم القراءة وممكن cross-Region.",
    services: ["RDS", "Multi-AZ", "Read Replicas"],
  },
  {
    id: "qa-res-05",
    domain: "resilient",
    questionEn: "What does the standby in an RDS Multi-AZ deployment do?",
    answerEn:
      "Nothing serves from it during normal operation — it's a synchronous copy that exists only for automatic failover. If you need to offload reads, use Read Replicas instead.",
    answerAr:
      "مفيش حاجة بتتخدم منه في التشغيل العادي — هو نسخة متزامنة موجودة للـ failover التلقائي بس. لو عايز تخفّف القراءة، استخدم Read Replicas.",
    services: ["RDS", "Multi-AZ"],
  },
  {
    id: "qa-res-06",
    domain: "resilient",
    questionEn: "When should you choose Aurora Global Database?",
    answerEn:
      "For relational workloads needing cross-Region DR with ~1s RPO and <1 min RTO, plus low-latency reads in multiple Regions. It's the global-scale step beyond single-Region Multi-AZ.",
    answerAr:
      "للأحمال العلائقية المحتاجة DR عبر الـ regions بـ RPO حوالي ثانية و RTO أقل من دقيقة، مع قراءات منخفضة الـ latency في كذا region. خطوة عالمية أبعد من Multi-AZ داخل region واحدة.",
    services: ["Aurora Global Database"],
  },
  {
    id: "qa-res-07",
    domain: "resilient",
    questionEn: "How do you make DynamoDB serve users in multiple Regions actively?",
    answerEn:
      "Enable DynamoDB Global Tables for multi-Region, active-active replication, so reads and writes happen locally in each Region with low latency.",
    answerAr:
      "فعّل DynamoDB Global Tables للتناسخ multi-Region active-active، فالقراءة والكتابة بتحصل محليًا في كل region بـ latency قليل.",
    services: ["DynamoDB", "Global Tables"],
  },
  {
    id: "qa-res-08",
    domain: "resilient",
    questionEn: "What's the purpose of an SQS dead-letter queue (DLQ)?",
    answerEn:
      "To capture messages that repeatedly fail processing (exceed the max receive count), isolating poison messages for debugging while keeping the main queue flowing.",
    answerAr:
      "تلتقط الرسائل اللي بتفشل في المعالجة متكرّر (تتجاوز أقصى عدد استلام)، فبتعزل الرسائل المعطوبة للتحليل وتسيب الطابور الأساسي شغّال.",
    services: ["SQS", "DLQ"],
  },
  {
    id: "qa-res-09",
    domain: "resilient",
    questionEn: "When do you need an SQS FIFO queue instead of Standard?",
    answerEn:
      "When you need strict ordering and exactly-once processing (e.g., financial transactions, ordered commands). Standard offers higher throughput but only best-effort ordering and at-least-once delivery.",
    answerAr:
      "لما تحتاج ترتيب صارم ومعالجة exactly-once (زي المعاملات المالية، الأوامر المرتّبة). الـ Standard بيدّي throughput أعلى لكن ترتيب best-effort وتسليم at-least-once.",
    services: ["SQS", "FIFO"],
  },
  {
    id: "qa-res-10",
    domain: "resilient",
    questionEn: "How do you decouple a producer from multiple independent consumers?",
    answerEn:
      "Use the SNS → SQS fan-out pattern: publish once to an SNS topic that delivers a copy to several SQS queues, one per consumer, so each processes independently and in parallel.",
    answerAr:
      "استخدم نمط SNS → SQS fan-out: انشر مرة واحدة لـ SNS topic بيوصّل نسخة لعدة SQS queues، واحد لكل consumer، فكل واحد يعالج باستقلال وبالتوازي.",
    services: ["SNS", "SQS", "Fan-out"],
  },
  {
    id: "qa-res-11",
    domain: "resilient",
    questionEn: "Which Route 53 policy do you use for active/passive DR failover?",
    answerEn:
      "Failover routing with health checks: traffic goes to the primary, and Route 53 automatically switches to the secondary (standby) when the primary's health check fails.",
    answerAr:
      "Failover routing مع health checks: الترافيك بيروح للـ primary، و Route 53 بيحوّل تلقائيًا للـ secondary لما health check الـ primary يفشل.",
    services: ["Route 53", "Failover Routing"],
  },
  {
    id: "qa-res-12",
    domain: "resilient",
    questionEn: "Global Accelerator vs CloudFront — when do you use each?",
    answerEn:
      "CloudFront caches HTTP content (web, images, video) at the edge. Global Accelerator gives static anycast IPs and routes TCP/UDP over the AWS backbone with fast regional failover — for non-HTTP, latency-sensitive apps (e.g., gaming).",
    answerAr:
      "CloudFront بيعمل cache لمحتوى HTTP (ويب، صور، فيديو) في الـ edge. Global Accelerator بيدّي IP ثابتين (anycast) ويوجّه TCP/UDP على شبكة AWS مع failover سريع — لتطبيقات غير HTTP حسّاسة للـ latency (زي الألعاب).",
    services: ["CloudFront", "Global Accelerator"],
  },
  {
    id: "qa-res-13",
    domain: "resilient",
    questionEn: "How do you achieve high availability for a single-AZ two-tier app?",
    answerEn:
      "Span multiple AZs: put the web/app tier in an Auto Scaling group behind an ALB across AZs, and move the database to RDS Multi-AZ in subnets in two AZs, so one AZ failure can't take the app down.",
    answerAr:
      "وزّع على أكثر من AZ: حط الـ web/app tier في Auto Scaling ورا ALB عبر الـ AZs، وانقل قاعدة البيانات لـ RDS Multi-AZ في subnets في AZ-تين، فعطل AZ واحدة ما يوقّعش التطبيق.",
    services: ["ALB", "Auto Scaling", "RDS Multi-AZ"],
  },
  {
    id: "qa-res-14",
    domain: "resilient",
    questionEn: "What's the simplest Auto Scaling policy and when do you use it?",
    answerEn:
      "Target tracking — set a metric target (e.g., average CPU 50%) and ASG adds/removes instances to hold it. It's the default choice unless you need step scaling (by breach size) or scheduled/predictive scaling.",
    answerAr:
      "Target tracking — تحدّد هدف لـ metric (زي CPU 50%) والـ ASG بيضيف/يشيل instances عشان يحافظ عليه. هو الاختيار الافتراضي إلا لو محتاج step (حسب شدة التجاوز) أو scheduled/predictive.",
    services: ["Auto Scaling", "Target Tracking"],
  },

  // ---------------- Performance ----------------
  {
    id: "qa-perf-01",
    domain: "performance",
    questionEn: "How do you increase CPU for an AWS Lambda function?",
    answerEn:
      "Increase its allocated memory — CPU and network scale proportionally with memory in Lambda. Use AWS Lambda Power Tuning to find the best memory/cost/performance point.",
    answerAr:
      "زوّد الذاكرة المخصّصة — الـ CPU والشبكة بيزيدوا بالتناسب مع الذاكرة في Lambda. استخدم Lambda Power Tuning لإيجاد أفضل نقطة memory/تكلفة/أداء.",
    services: ["Lambda"],
  },
  {
    id: "qa-perf-02",
    domain: "performance",
    questionEn: "How do you reduce Lambda cold starts for a latency-sensitive API?",
    answerEn:
      "Enable provisioned concurrency to keep a number of execution environments initialized and warm so they respond immediately during bursts.",
    answerAr:
      "فعّل provisioned concurrency عشان تحافظ على عدد من بيئات التنفيذ مجهّزة ودافية فترد فورًا وقت الموجات.",
    services: ["Lambda", "Provisioned Concurrency"],
  },
  {
    id: "qa-perf-03",
    domain: "performance",
    questionEn: "When do you choose Fargate over the EC2 launch type?",
    answerEn:
      "When you don't want to manage or pay for idle servers/clusters. Fargate runs containers serverlessly and bills per task. Use the EC2 launch type when you need host-level control or specific instance features.",
    answerAr:
      "لما متعرفش/متحبّش تدير أو تدفع لسيرفرات/clusters خاملة. Fargate بيشغّل containers بدون سيرفرات وبيتحاسب لكل task. استخدم EC2 launch type لما تحتاج تحكّم على مستوى الـ host أو مميزات instance معيّنة.",
    services: ["Fargate", "ECS", "EKS"],
  },
  {
    id: "qa-perf-04",
    domain: "performance",
    questionEn: "Which EBS volume type is the default, and why gp3 over gp2?",
    answerEn:
      "gp3 (General Purpose SSD). It lets you provision IOPS and throughput independently of capacity and is cheaper than gp2 for the same performance — the default for most workloads.",
    answerAr:
      "gp3 (General Purpose SSD). بيخلّيك تحدّد الـ IOPS والـ throughput مستقلين عن السعة وأرخص من gp2 لنفس الأداء — الافتراضي لمعظم الأحمال.",
    services: ["EBS", "gp3"],
  },
  {
    id: "qa-perf-05",
    domain: "performance",
    questionEn: "IOPS vs throughput — how do they steer EBS choice?",
    answerEn:
      "IOPS (operations/sec) matters for databases and small random I/O → SSD (gp3/io2). Throughput (MB/s) matters for large sequential data like logs/big data → st1 HDD. Match the volume to the dominant metric.",
    answerAr:
      "الـ IOPS (عمليات/ثانية) مهم لقواعد البيانات والـ I/O العشوائي الصغير → SSD (gp3/io2). الـ Throughput (MB/s) مهم للداتا التسلسلية الكبيرة زي logs/big data → st1 HDD. وفّق الـ volume مع المقياس الغالب.",
    services: ["EBS"],
  },
  {
    id: "qa-perf-06",
    domain: "performance",
    questionEn: "How do you give multiple instances across AZs a shared file system?",
    answerEn:
      "Use Amazon EFS — a managed, elastic NFS/POSIX file system mountable by many instances across AZs at once. EBS is single-instance (one AZ); EFS is the shared-file answer.",
    answerAr:
      "استخدم Amazon EFS — نظام ملفات NFS/POSIX مُدار ومرن بيتركّب على instances كتير عبر الـ AZs في نفس الوقت. الـ EBS لـ instance واحد (AZ واحدة)؛ والـ EFS هو حل الملفات المشتركة.",
    services: ["EFS", "EBS"],
  },
  {
    id: "qa-perf-07",
    domain: "performance",
    questionEn: "How do you get microsecond reads for a read-heavy DynamoDB app?",
    answerEn:
      "Add DynamoDB Accelerator (DAX), a fully managed in-memory cache native to DynamoDB, giving single-digit microsecond read latency with minimal code changes.",
    answerAr:
      "ضيف DynamoDB Accelerator (DAX)، كاش in-memory مُدار بالكامل خاص بـ DynamoDB، بيدّي latency بالميكروثانية مع تعديلات بسيطة في الكود.",
    services: ["DynamoDB", "DAX"],
  },
  {
    id: "qa-perf-08",
    domain: "performance",
    questionEn: "Lazy loading vs write-through caching — what's the trade-off?",
    answerEn:
      "Lazy loading caches only on a read miss (stores only requested data, but the first read is slow and data can go stale). Write-through updates the cache on every write (always fresh, but caches data that may never be read; use TTL).",
    answerAr:
      "Lazy loading بيعمل cache عند الـ miss بس (بيخزّن المطلوب فقط، لكن أول قراءة بطيئة وممكن البيانات تبقى قديمة). Write-through بيحدّث الكاش مع كل كتابة (دايمًا حديث، لكن بيخزّن بيانات ممكن متتقريش؛ استخدم TTL).",
    services: ["ElastiCache", "Caching"],
  },
  {
    id: "qa-perf-09",
    domain: "performance",
    questionEn: "Many Lambdas are exhausting RDS connections — what fixes it?",
    answerEn:
      "Amazon RDS Proxy. It pools and reuses database connections, smoothing connection storms from serverless/Lambda apps and improving scalability.",
    answerAr:
      "Amazon RDS Proxy. بيعمل pooling ويعيد استخدام اتصالات قاعدة البيانات، فبيهدّي connection storms من تطبيقات serverless/Lambda ويحسّن التوسّع.",
    services: ["RDS Proxy", "Lambda"],
  },
  {
    id: "qa-perf-10",
    domain: "performance",
    questionEn: "Which purpose-built database for highly connected/relationship data?",
    answerEn:
      "Amazon Neptune (graph database) — ideal for social networks, recommendations, and fraud detection where relationships are the query.",
    answerAr:
      "Amazon Neptune (قاعدة graph) — مثالية للشبكات الاجتماعية والتوصيات وكشف الاحتيال حيث العلاقات هي الاستعلام.",
    services: ["Neptune"],
  },
  {
    id: "qa-perf-11",
    domain: "performance",
    questionEn: "How do you run SQL on data in S3 without managing servers?",
    answerEn:
      "Use Amazon Athena — serverless, pay-per-query SQL directly over S3 data. For a managed data warehouse with heavy/complex BI, use Redshift instead.",
    answerAr:
      "استخدم Amazon Athena — SQL serverless تدفع لكل query مباشرة على داتا في S3. ولو عايز data warehouse مُدار لتحليلات BI ثقيلة، استخدم Redshift.",
    services: ["Athena", "Redshift"],
  },
  {
    id: "qa-perf-12",
    domain: "performance",
    questionEn: "Kinesis Data Streams or Firehose — how do you decide?",
    answerEn:
      "Need custom real-time consumers, shard control, or replay? → Data Streams. Just want the easiest near-real-time load into S3/Redshift/OpenSearch with no code? → Firehose.",
    answerAr:
      "محتاج consumers real-time مخصّصة، تحكّم في الـ shards، أو replay؟ → Data Streams. عايز أسهل تحميل near-real-time لـ S3/Redshift/OpenSearch بدون كود؟ → Firehose.",
    services: ["Kinesis Data Streams", "Kinesis Firehose"],
  },
  {
    id: "qa-perf-13",
    domain: "performance",
    questionEn: "When do you use Transit Gateway instead of VPC peering?",
    answerEn:
      "When you must connect many VPCs (and on-prem) with transitive routing. Peering is 1:1 and non-transitive — it doesn't scale to dozens/hundreds of VPCs; Transit Gateway is the hub-and-spoke solution.",
    answerAr:
      "لما تحتاج تربط VPCs كتير (و on-prem) بـ transitive routing. الـ peering علاقة 1:1 وغير متعدّية — مبيوسّعش لعشرات/مئات الـ VPCs؛ والـ Transit Gateway هو حل الـ hub-and-spoke.",
    services: ["Transit Gateway", "VPC Peering"],
  },
  {
    id: "qa-perf-14",
    domain: "performance",
    questionEn: "Which API Gateway type for a real-time bidirectional chat app?",
    answerEn:
      "WebSocket API — it maintains a persistent two-way connection so the server can push messages to clients. REST/HTTP APIs are request/response only.",
    answerAr:
      "WebSocket API — بيحافظ على اتصال دائم ثنائي الاتجاه فالسيرفر يقدر يـ push للعملاء. الـ REST/HTTP request/response بس.",
    services: ["API Gateway", "WebSocket API"],
  },

  // ---------------- Cost ----------------
  {
    id: "qa-cost-01",
    domain: "cost",
    questionEn: "Which EC2 pricing model for a fault-tolerant, interruptible batch job?",
    answerEn:
      "Spot Instances — up to ~90% cheaper and perfect for interruptible workloads. Never use Spot for jobs that can't be interrupted; use On-Demand or Reserved there.",
    answerAr:
      "Spot Instances — أرخص لـ ~90% ومثالية للأحمال القابلة للانقطاع. متستخدمش Spot لشغل مينفعش يتقطع؛ استخدم On-Demand أو Reserved هناك.",
    services: ["Spot Instances"],
  },
  {
    id: "qa-cost-02",
    domain: "cost",
    questionEn: "Reserved Instances vs Savings Plans — what's the difference?",
    answerEn:
      "Both discount steady usage for a 1/3-year commit. Standard RIs lock to a specific instance type; Compute Savings Plans commit to $/hour and stay flexible across families, sizes, Regions, and Fargate/Lambda.",
    answerAr:
      "الاتنين بيخصموا الاستخدام الثابت بالتزام 1/3 سنة. الـ Standard RI بتقفل على نوع instance؛ والـ Compute Savings Plans بتلتزم بـ $/ساعة وبتفضل مرنة عبر العائلات والأحجام والـ regions و Fargate/Lambda.",
    services: ["Reserved Instances", "Savings Plans"],
  },
  {
    id: "qa-cost-03",
    domain: "cost",
    questionEn: "Which S3 class for unknown or changing access patterns?",
    answerEn:
      "S3 Intelligent-Tiering — it auto-moves objects between frequent/infrequent tiers based on usage, with no retrieval fees for tier changes.",
    answerAr:
      "S3 Intelligent-Tiering — بينقل الأوبجكتس تلقائيًا بين طبقات الوصول حسب الاستخدام، بدون رسوم استرجاع لتغيير الطبقة.",
    services: ["S3", "Intelligent-Tiering"],
  },
  {
    id: "qa-cost-04",
    domain: "cost",
    questionEn: "Cheapest S3 class for 7-year archives accessed almost never?",
    answerEn:
      "S3 Glacier Deep Archive — lowest cost, ~12-hour retrieval, designed for long-term compliance data. If you need millisecond retrieval on rare access, use Glacier Instant Retrieval instead.",
    answerAr:
      "S3 Glacier Deep Archive — الأرخص، استرجاع ~12 ساعة، مصمّم لبيانات الامتثال طويلة الأمد. لو محتاج استرجاع بالملّي ثانية عند الوصول النادر، استخدم Glacier Instant Retrieval.",
    services: ["S3", "Glacier Deep Archive"],
  },
  {
    id: "qa-cost-05",
    domain: "cost",
    questionEn: "What automatically moves S3 objects to cheaper classes over time?",
    answerEn:
      "S3 Lifecycle policies — transition objects to colder classes after set periods and optionally expire (delete) them. It's one of the highest-impact cost-saving features.",
    answerAr:
      "S3 Lifecycle policies — بتنقل الأوبجكتس لطبقات أبرد بعد مدد محدّدة وتقدر تحذفها (expiration). من أكثر مميزات توفير التكلفة تأثيرًا.",
    services: ["S3", "Lifecycle Policies"],
  },
  {
    id: "qa-cost-06",
    domain: "cost",
    questionEn: "Cost Explorer or Budgets — which for spend alerts?",
    answerEn:
      "Budgets — set thresholds and get alerts when actual or forecasted cost/usage approaches or exceeds a limit. Cost Explorer is for analyzing and forecasting spend, not alerting.",
    answerAr:
      "Budgets — تحدّد حدود وتاخد تنبيهات لما التكلفة/الاستخدام الفعلي أو المتوقّع يقرب أو يتجاوز الحد. الـ Cost Explorer للتحليل والتنبؤ، مش للتنبيهات.",
    services: ["Budgets", "Cost Explorer"],
  },
  {
    id: "qa-cost-07",
    domain: "cost",
    questionEn: "Which tool gives ML-based right-sizing recommendations?",
    answerEn:
      "AWS Compute Optimizer — analyzes utilization to recommend right-sizing for EC2, EBS, Lambda, and Auto Scaling groups, cutting over-provisioning.",
    answerAr:
      "AWS Compute Optimizer — بيحلّل الاستخدام ليوصّي بالـ right-sizing لـ EC2 و EBS و Lambda و Auto Scaling، فبيقلّل الـ over-provisioning.",
    services: ["Compute Optimizer"],
  },
  {
    id: "qa-cost-08",
    domain: "cost",
    questionEn: "What's the golden rule before buying Reserved Instances?",
    answerEn:
      "Right-size first, commit second. Optimize instance sizes (e.g., with Compute Optimizer) before locking in a 1/3-year commitment, so you don't reserve over-provisioned capacity.",
    answerAr:
      "صغّر الحجم الأول، التزم تاني. ظبط أحجام الـ instances (مثلًا بـ Compute Optimizer) قبل ما تقفل على التزام 1/3 سنة، عشان متحجزش سعة أكبر من اللازم.",
    services: ["Reserved Instances", "Compute Optimizer"],
  },
  {
    id: "qa-cost-09",
    domain: "cost",
    questionEn: "How do you cut S3 egress costs for a global audience?",
    answerEn:
      "Put CloudFront in front of S3. Edge caching serves repeat requests from the edge instead of the origin, lowering data-transfer (egress) charges and latency.",
    answerAr:
      "حط CloudFront قدّام S3. الـ caching في الـ edge بيخدم الطلبات المتكرّرة من الـ edge بدل الأصل، فبيقلّل تكلفة الـ egress والـ latency.",
    services: ["CloudFront", "S3", "Data Transfer"],
  },
  {
    id: "qa-cost-10",
    domain: "cost",
    questionEn: "Why is Lambda often cheaper than EC2 for bursty workloads?",
    answerEn:
      "Lambda bills only per request and execution time, with zero cost when idle. Always-on EC2 (even Reserved) pays for idle capacity, so for intermittent/bursty traffic serverless usually wins.",
    answerAr:
      "Lambda بتتحاسب على الـ requests ومدة التنفيذ بس، وصفر تكلفة وقت الخمول. الـ EC2 الدائم (حتى Reserved) بيدفع للسعة الخاملة، فللترافيك المتقطّع الـ serverless بيكسب عادةً.",
    services: ["Lambda", "EC2"],
  },

  // ---------------- Patterns ----------------
  {
    id: "qa-pat-01",
    domain: "patterns",
    questionEn: "What is a three-tier architecture and why is the DB in a private subnet?",
    answerEn:
      "Web (public), App (private), DB (private) tiers, each independently scalable and secured. The DB sits in a private subnet so it's never reachable from the internet — only the app tier can talk to it.",
    answerAr:
      "طبقات Web (عامة)، App (خاصة)، DB (خاصة)، كل واحدة بتـ scale وتتأمّن لوحدها. الـ DB في private subnet عشان ميوصلهاش حد من الإنترنت — الـ app tier بس اللي يكلّمها.",
    services: ["Three-Tier"],
  },
  {
    id: "qa-pat-02",
    domain: "patterns",
    questionEn: "When do you use the Strangler Fig pattern?",
    answerEn:
      "When migrating a legacy monolith gradually instead of a risky big-bang rewrite. Route requests via API Gateway/ALB and replace functionality feature-by-feature until the old system is fully retired.",
    answerAr:
      "لما تهاجر monolith قديم تدريجيًا بدل الـ big-bang rewrite الخطر. وجّه الطلبات عبر API Gateway/ALB واستبدل الوظائف feature-by-feature لحد ما النظام القديم يختفي بالكامل.",
    services: ["Strangler Fig", "Migration"],
  },
  {
    id: "qa-pat-03",
    domain: "patterns",
    questionEn: "Blue/Green vs Canary deployments — how do they differ?",
    answerEn:
      "Blue/Green keeps two full environments and switches all traffic at once (zero downtime, instant rollback). Canary shifts a small percentage first and ramps up while monitoring (smallest blast radius).",
    answerAr:
      "Blue/Green بيحتفظ ببيئتين كاملتين ويبدّل كل الترافيك دفعة واحدة (صفر downtime، rollback فوري). Canary بيوجّه نسبة صغيرة الأول ويزوّد مع المراقبة (أقل تأثير).",
    services: ["Blue/Green", "Canary", "Deployment"],
  },
  {
    id: "qa-pat-04",
    domain: "patterns",
    questionEn: "What is CQRS and when is it useful?",
    answerEn:
      "Command Query Responsibility Segregation: separate the write model/store from the read model/store. Useful when reads vastly outnumber writes, so each side can be optimized and scaled independently (e.g., DynamoDB writes + OpenSearch/read replicas for reads).",
    answerAr:
      "Command Query Responsibility Segregation: فصل model/مخزن الكتابة عن القراءة. مفيد لما القراءات أكتر بكتير من الكتابة، فكل جانب يتحسّن ويـ scale لوحده (زي كتابة DynamoDB + OpenSearch/read replicas للقراءة).",
    services: ["CQRS"],
  },
  {
    id: "qa-pat-05",
    domain: "patterns",
    questionEn: "What are the 6 pillars of the Well-Architected Framework?",
    answerEn:
      "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. The exam frames scenarios around these — know what each pillar optimizes for.",
    answerAr:
      "Operational Excellence، Security، Reliability، Performance Efficiency، Cost Optimization، و Sustainability. الامتحان بيأطّر السيناريوهات حواليها — اعرف كل ركن بيحسّن إيه.",
    services: ["Well-Architected"],
  },
  {
    id: "qa-pat-06",
    domain: "patterns",
    questionEn: "What are the exam's 'golden keyword → service' shortcuts?",
    answerEn:
      "'Highly available / fault tolerant' → Multi-AZ. 'Most cost-effective' → Spot / Serverless / S3 tiers. 'Disaster recovery / another Region' → Multi-Region. 'Decouple' → SQS/SNS. 'Without managing servers' → Lambda/Fargate.",
    answerAr:
      "'highly available / fault tolerant' → Multi-AZ. 'most cost-effective' → Spot / Serverless / S3 tiers. 'DR / another Region' → Multi-Region. 'decouple' → SQS/SNS. 'without managing servers' → Lambda/Fargate.",
    services: ["Exam Tips"],
  },
];
