import type { MCQ } from "../types";

export const performanceMcqs: MCQ[] = [
  {
    id: "perf-001",
    domain: "performance",
    type: "single",
    question:
      "A high-performance computing job requires the lowest possible network latency between a tightly coupled cluster of EC2 instances within a single Availability Zone. Which EC2 placement group should be used?",
    options: [
      "Cluster placement group",
      "Spread placement group",
      "Partition placement group",
      "No placement group",
    ],
    correct: [0],
    explanationEn:
      "A cluster placement group packs instances close together in one AZ for the lowest latency and highest throughput (ideal for HPC/tightly coupled apps). Spread maximizes AZ/rack separation for availability; partition suits large distributed systems like Hadoop.",
    explanationAr:
      "الـ Cluster Placement Group بيجمّع الـ instances قريبة جدًا في AZ واحدة لأقل latency وأعلى throughput (مثالي للـ HPC). الـ Spread بيفرّق على racks لأعلى توافر، والـ Partition للأنظمة الموزّعة الكبيرة زي Hadoop.",
    services: ["EC2", "Placement Groups", "HPC"],
    difficulty: "medium",
  },
  {
    id: "perf-002",
    domain: "performance",
    type: "single",
    question:
      "A company runs a few critical instances and wants each placed on distinct underlying hardware/racks to minimize correlated failures. Which placement group strategy fits?",
    options: [
      "Cluster placement group",
      "Spread placement group",
      "Partition placement group",
      "Dedicated Host",
    ],
    correct: [1],
    explanationEn:
      "A spread placement group places each instance on distinct racks (and can span AZs), minimizing simultaneous failures—ideal for a small number of critical instances. Cluster optimizes latency, not availability.",
    explanationAr:
      "الـ Spread Placement Group بيحط كل instance على rack مختلف (وممكن عبر AZs)، فبيقلّل الأعطال المتزامنة — مثالي لعدد قليل من الـ instances الحرجة. الـ Cluster بيحسّن الـ latency مش التوافر.",
    services: ["EC2", "Placement Groups"],
    difficulty: "medium",
  },
  {
    id: "perf-003",
    domain: "performance",
    type: "single",
    question:
      "A memory-intensive in-memory database needs an EC2 instance family optimized for a high ratio of RAM to vCPU. Which instance family prefix is most appropriate?",
    options: [
      "C-family (compute optimized)",
      "R-family (memory optimized)",
      "I-family (storage optimized)",
      "T-family (burstable)",
    ],
    correct: [1],
    explanationEn:
      "R-family instances are memory optimized (high RAM), ideal for in-memory databases and large caches. C-family is compute optimized; I/D-family is storage optimized; T-family is burstable for low/variable workloads.",
    explanationAr:
      "عائلة R مخصّصة للذاكرة (RAM عالية)، مثالية لقواعد البيانات in-memory والكاش الكبير. عائلة C للمعالجة، وعائلة I/D للتخزين، وعائلة T للأحمال المتغيّرة/المنخفضة (burstable).",
    services: ["EC2", "Instance Families"],
    difficulty: "easy",
  },
  {
    id: "perf-004",
    domain: "performance",
    type: "single",
    question:
      "A Lambda function is running slowly and is CPU-bound. The developer wants more CPU without changing the code architecture. What is the correct way to increase CPU for a Lambda function?",
    options: [
      "Increase the allocated memory, which proportionally increases CPU.",
      "Attach an additional EBS volume.",
      "Enable Multi-AZ for the function.",
      "Switch the function to a larger EC2 instance type.",
    ],
    correct: [0],
    explanationEn:
      "In Lambda, CPU (and network) scales proportionally with allocated memory. Increasing memory gives more CPU. AWS Lambda Power Tuning helps find the optimal memory/cost/performance point.",
    explanationAr:
      "في Lambda، الـ CPU (والشبكة) بيزيدوا بالتناسب مع الذاكرة المخصّصة. زوّد الـ memory تاخد CPU أكتر. أداة Lambda Power Tuning بتساعد تلاقي أفضل نقطة memory/تكلفة/أداء.",
    services: ["Lambda", "Power Tuning"],
    difficulty: "easy",
  },
  {
    id: "perf-005",
    domain: "performance",
    type: "single",
    question:
      "A latency-sensitive Lambda-backed API suffers from cold starts during traffic bursts. Which feature keeps a number of execution environments initialized and ready to respond immediately?",
    options: [
      "Provisioned concurrency",
      "Reserved concurrency only",
      "Increasing the timeout to 15 minutes",
      "Adding Lambda layers",
    ],
    correct: [0],
    explanationEn:
      "Provisioned concurrency pre-initializes a set number of execution environments so they are warm and respond without cold-start latency. Reserved concurrency caps/guarantees capacity but does not pre-warm.",
    explanationAr:
      "الـ Provisioned Concurrency بتجهّز عدد محدّد من بيئات التنفيذ مسبقًا فتبقى دافية وترد بدون cold start. الـ Reserved Concurrency بتحدّد/تضمن سعة لكن مبتدفّيش مسبقًا.",
    services: ["Lambda", "Provisioned Concurrency", "Cold Start"],
    difficulty: "medium",
  },
  {
    id: "perf-006",
    domain: "performance",
    type: "single",
    question:
      "A company wants to run Docker containers without managing any EC2 servers or clusters, paying only for the resources each task uses. Which option should they choose?",
    options: [
      "Amazon ECS or EKS with the AWS Fargate launch type",
      "Amazon ECS with the EC2 launch type",
      "Self-managed Kubernetes on EC2",
      "AWS Lambda with container images on EC2",
    ],
    correct: [0],
    explanationEn:
      "AWS Fargate is the serverless launch type for ECS and EKS—you run containers without provisioning or managing EC2 instances, paying per task resources. The EC2 launch type requires you to manage the underlying instances.",
    explanationAr:
      "الـ AWS Fargate هو الـ launch type بدون سيرفرات لـ ECS و EKS — بتشغّل containers من غير إدارة EC2، وبتدفع حسب موارد الـ task. الـ EC2 launch type بيخلّيك تدير الـ instances بنفسك.",
    services: ["Fargate", "ECS", "EKS"],
    difficulty: "easy",
  },
  {
    id: "perf-007",
    domain: "performance",
    type: "single",
    question:
      "A company is migrating an existing on-premises Kubernetes workload to AWS and wants a managed, standards-compliant Kubernetes control plane for portability. Which service should they use?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Lambda",
      "AWS Batch",
    ],
    correct: [1],
    explanationEn:
      "Amazon EKS is managed, upstream-compliant Kubernetes—ideal when you need Kubernetes portability or already use Kubernetes. ECS is AWS's proprietary container orchestrator (simpler but not Kubernetes).",
    explanationAr:
      "الـ Amazon EKS هو Kubernetes مُدار ومتوافق مع المعيار — مثالي لما تحتاج portability أو بتستخدم Kubernetes أصلًا. الـ ECS منسّق containers خاص بـ AWS (أبسط لكنه مش Kubernetes).",
    services: ["EKS", "ECS", "Kubernetes"],
    difficulty: "easy",
  },
  {
    id: "perf-008",
    domain: "performance",
    type: "single",
    question:
      "A general-purpose workload needs SSD-backed EBS storage with the ability to provision IOPS and throughput independently at the lowest cost for most use cases. Which EBS volume type is the default recommendation?",
    options: [
      "gp3 (General Purpose SSD)",
      "io2 Block Express (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)",
    ],
    correct: [0],
    explanationEn:
      "gp3 is the default general-purpose SSD and lets you provision IOPS and throughput independently of capacity, at lower cost than gp2. io2 Block Express targets the highest-performance, mission-critical databases; st1/sc1 are HDD for sequential/cold data.",
    explanationAr:
      "الـ gp3 هو الـ SSD العام الافتراضي وبيخلّيك تحدّد الـ IOPS والـ throughput بشكل مستقل عن السعة وبأرخص من gp2. الـ io2 Block Express لأعلى أداء للقواعد الحرجة، والـ st1/sc1 أقراص HDD للبيانات التسلسلية/الباردة.",
    services: ["EBS", "gp3", "io2"],
    difficulty: "easy",
  },
  {
    id: "perf-009",
    domain: "performance",
    type: "single",
    question:
      "A big-data log-processing workload performs large, sequential reads and writes (high throughput in MB/s) and does not need high IOPS. Which low-cost EBS volume type fits best?",
    options: [
      "gp3 SSD",
      "io2 SSD",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)",
    ],
    correct: [2],
    explanationEn:
      "st1 (Throughput Optimized HDD) is designed for high-throughput, sequential workloads like big data and log processing at low cost. sc1 is even cheaper but for infrequently accessed cold data; SSDs are better for random IOPS.",
    explanationAr:
      "الـ st1 (Throughput Optimized HDD) مصمّم للأحمال التسلسلية عالية الـ throughput زي big data واللوجز بتكلفة قليلة. الـ sc1 أرخص لكن للبيانات الباردة نادرة الوصول، والـ SSD أفضل للـ IOPS العشوائي.",
    services: ["EBS", "st1", "sc1"],
    difficulty: "medium",
  },
  {
    id: "perf-010",
    domain: "performance",
    type: "single",
    question:
      "A clustered application requires a single EBS volume to be attached to multiple EC2 instances in the same Availability Zone concurrently. Which capability enables this?",
    options: [
      "EBS Multi-Attach with io1/io2 volumes",
      "Standard gp3 volume attachment",
      "EFS mount targets",
      "Instance Store sharing",
    ],
    correct: [0],
    explanationEn:
      "EBS Multi-Attach (supported on io1/io2) allows a single volume to attach to multiple instances within the same AZ. For cross-AZ shared file access, EFS is the right service instead.",
    explanationAr:
      "الـ EBS Multi-Attach (على io1/io2) بيسمح لنفس الـ volume إنه يتركّب على أكثر من instance في نفس الـ AZ. للوصول المشترك عبر AZs استخدم EFS بدلًا منه.",
    services: ["EBS", "Multi-Attach", "io2"],
    difficulty: "medium",
  },
  {
    id: "perf-011",
    domain: "performance",
    type: "single",
    question:
      "A read-heavy application repeatedly queries the same data from Amazon RDS, causing high database load. The team wants to reduce latency to microseconds for cached reads and lower the database load. Which solution should they add?",
    options: [
      "Amazon ElastiCache as an in-memory cache in front of the database",
      "A larger RDS instance only",
      "Amazon S3 to store query results",
      "AWS Glue for caching",
    ],
    correct: [0],
    explanationEn:
      "ElastiCache (Redis/Memcached) caches frequent reads in memory, dramatically reducing latency and offloading the database. Common patterns are lazy loading (cache on miss) and write-through (update cache on every write).",
    explanationAr:
      "الـ ElastiCache (Redis/Memcached) بيخزّن القراءات المتكرّرة في الذاكرة، فبيقلّل الـ latency ويخفّف الحمل عن قاعدة البيانات. الأنماط الشائعة: Lazy Loading (cache عند الـ miss) و Write-Through (تحديث الكاش مع كل كتابة).",
    services: ["ElastiCache", "Redis", "RDS", "Caching"],
    difficulty: "easy",
  },
  {
    id: "perf-012",
    domain: "performance",
    type: "single",
    question:
      "A DynamoDB-backed application needs single-digit microsecond read latency for an extremely read-heavy workload, without changing the application's DynamoDB API calls significantly. Which service provides this?",
    options: [
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon ElastiCache for Memcached",
      "Amazon CloudFront",
      "Amazon RDS Proxy",
    ],
    correct: [0],
    explanationEn:
      "DAX is a fully managed, in-memory cache built specifically for DynamoDB, delivering microsecond read latency with minimal code changes. ElastiCache is generic; DAX is DynamoDB-native.",
    explanationAr:
      "الـ DAX كاش in-memory مُدار بالكامل ومصمّم خصيصًا لـ DynamoDB، بيدّي latency بالميكروثانية مع تعديلات بسيطة في الكود. الـ ElastiCache عام، لكن DAX خاص بـ DynamoDB.",
    services: ["DynamoDB", "DAX", "Caching"],
    difficulty: "medium",
  },
  {
    id: "perf-013",
    domain: "performance",
    type: "single",
    question:
      "A DynamoDB table experiences throttling because most traffic concentrates on a few items, creating a hot partition. What is the recommended fix?",
    options: [
      "Choose a high-cardinality partition key that distributes traffic evenly.",
      "Increase the visibility timeout.",
      "Enable DynamoDB Streams.",
      "Switch to provisioned IOPS storage.",
    ],
    correct: [0],
    explanationEn:
      "Hot partitions come from a poorly distributed partition key. Choosing a high-cardinality key spreads requests across partitions and avoids throttling. (Adaptive capacity helps, but key design is the root fix.)",
    explanationAr:
      "الـ hot partition بييجي من partition key سيّئ التوزيع. اختيار مفتاح بـ cardinality عالية بيوزّع الطلبات على الـ partitions ويتجنّب الـ throttling. (الـ adaptive capacity بيساعد، لكن تصميم المفتاح هو الحل الجذري.)",
    services: ["DynamoDB", "Partition Key"],
    difficulty: "medium",
  },
  {
    id: "perf-014",
    domain: "performance",
    type: "single",
    question:
      "A team wants to trigger a Lambda function automatically whenever items in a DynamoDB table are created, updated, or deleted, to build an event-driven pipeline. Which feature enables this?",
    options: [
      "DynamoDB Streams integrated with AWS Lambda",
      "DynamoDB PITR",
      "DynamoDB Global Tables",
      "DynamoDB DAX",
    ],
    correct: [0],
    explanationEn:
      "DynamoDB Streams capture item-level changes and can invoke a Lambda function for each change, enabling event-driven processing (aggregations, replication, notifications).",
    explanationAr:
      "الـ DynamoDB Streams بتلتقط تغييرات الأوبجكتس وبتقدر تشغّل Lambda لكل تغيير، فبتفعّل المعالجة event-driven (تجميعات، تناسخ، إشعارات).",
    services: ["DynamoDB", "Streams", "Lambda"],
    difficulty: "medium",
  },
  {
    id: "perf-015",
    domain: "performance",
    type: "single",
    question:
      "Many short-lived Lambda functions are exhausting an RDS database's connection limit due to connection storms. Which managed service should be used to pool and reuse database connections efficiently?",
    options: [
      "Amazon RDS Proxy",
      "Amazon ElastiCache",
      "AWS Global Accelerator",
      "Amazon API Gateway",
    ],
    correct: [0],
    explanationEn:
      "Amazon RDS Proxy provides managed connection pooling, reducing the number of open database connections and handling connection storms—particularly valuable for Lambda-based and serverless applications.",
    explanationAr:
      "الـ Amazon RDS Proxy بيدّي connection pooling مُدار، فبيقلّل عدد الاتصالات المفتوحة ويتعامل مع connection storms — مفيد جدًا للتطبيقات المبنية على Lambda/serverless.",
    services: ["RDS Proxy", "Lambda", "RDS"],
    difficulty: "medium",
  },
  {
    id: "perf-016",
    domain: "performance",
    type: "single",
    question:
      "A company needs a petabyte-scale data warehouse for complex OLAP analytics and BI reporting using columnar storage and SQL, with the ability to query data in S3. Which purpose-built service should they use?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon Timestream",
    ],
    correct: [0],
    explanationEn:
      "Amazon Redshift is the columnar, MPP data warehouse for OLAP analytics and BI, and Redshift Spectrum can query data directly in S3. DynamoDB is NoSQL OLTP; Neptune is a graph DB; Timestream is for time-series.",
    explanationAr:
      "الـ Amazon Redshift هو الـ data warehouse (columnar, MPP) للتحليلات OLAP والـ BI، والـ Spectrum بيستعلم على داتا في S3 مباشرة. الـ DynamoDB NoSQL OLTP، والـ Neptune graph، والـ Timestream للـ time-series.",
    services: ["Redshift", "Data Warehouse", "Analytics"],
    difficulty: "medium",
  },
  {
    id: "perf-017",
    domain: "performance",
    type: "single",
    question:
      "A social application must store and query highly connected data with complex relationships (friends-of-friends, recommendations, fraud rings). Which purpose-built database is ideal?",
    options: [
      "Amazon Neptune (graph database)",
      "Amazon Redshift",
      "Amazon RDS for MySQL",
      "Amazon Timestream",
    ],
    correct: [0],
    explanationEn:
      "Amazon Neptune is a managed graph database optimized for highly connected data and relationship queries (social networks, recommendations, fraud detection).",
    explanationAr:
      "الـ Amazon Neptune قاعدة بيانات graph مُدارة محسّنة للبيانات شديدة الترابط واستعلامات العلاقات (الشبكات الاجتماعية، التوصيات، كشف الاحتيال).",
    services: ["Neptune", "Graph Database"],
    difficulty: "medium",
  },
  {
    id: "perf-018",
    domain: "performance",
    type: "single",
    question:
      "An IoT platform ingests massive volumes of time-stamped sensor measurements and must query them efficiently by time. Which purpose-built database should be used?",
    options: [
      "Amazon Timestream",
      "Amazon QLDB",
      "Amazon DocumentDB",
      "Amazon Keyspaces",
    ],
    correct: [0],
    explanationEn:
      "Amazon Timestream is a managed time-series database built for IoT and operational metrics with time-based queries. QLDB is an immutable ledger; DocumentDB is MongoDB-compatible; Keyspaces is Cassandra-compatible.",
    explanationAr:
      "الـ Amazon Timestream قاعدة time-series مُدارة للـ IoT والمقاييس التشغيلية بالاستعلامات الزمنية. الـ QLDB سجل غير قابل للتعديل، والـ DocumentDB متوافق مع MongoDB، والـ Keyspaces متوافق مع Cassandra.",
    services: ["Timestream", "Time-series", "IoT"],
    difficulty: "medium",
  },
  {
    id: "perf-019",
    domain: "performance",
    type: "single",
    question:
      "A company needs an immutable, cryptographically verifiable ledger that records an unchangeable history of all application data changes (for audit). Which AWS database is purpose-built for this?",
    options: [
      "Amazon QLDB (Quantum Ledger Database)",
      "Amazon Aurora",
      "Amazon Neptune",
      "Amazon DynamoDB",
    ],
    correct: [0],
    explanationEn:
      "Amazon QLDB provides an immutable, append-only, cryptographically verifiable transaction log—ideal for systems of record needing a verifiable change history.",
    explanationAr:
      "الـ Amazon QLDB بيدّي سجل غير قابل للتعديل (append-only) وقابل للتحقّق التشفيري — مثالي لأنظمة السجلات اللي محتاجة تاريخ تغييرات قابل للإثبات.",
    services: ["QLDB", "Ledger"],
    difficulty: "medium",
  },
  {
    id: "perf-020",
    domain: "performance",
    type: "single",
    question:
      "A company wants to run SQL queries directly against data stored in Amazon S3 without loading it into a database or managing servers, paying per query. Which service should they use?",
    options: [
      "Amazon Athena",
      "Amazon Redshift (provisioned)",
      "Amazon EMR",
      "AWS Glue only",
    ],
    correct: [0],
    explanationEn:
      "Amazon Athena is a serverless, pay-per-query service that runs SQL directly on data in S3—no infrastructure to manage. Redshift requires loading/clustering; EMR runs big-data frameworks on clusters.",
    explanationAr:
      "الـ Amazon Athena خدمة serverless بتدفع لكل query، بتشغّل SQL مباشرة على داتا في S3 — بدون بنية تديرها. الـ Redshift بيحتاج تحميل/cluster، والـ EMR بيشغّل أطر big data على clusters.",
    services: ["Athena", "S3", "Analytics"],
    difficulty: "easy",
  },
  {
    id: "perf-021",
    domain: "performance",
    type: "single",
    question:
      "A company needs the simplest way to ingest streaming data and load it into Amazon S3 or Redshift in near real time, with no code and automatic scaling. Which service should they use?",
    options: [
      "Amazon Kinesis Data Firehose",
      "Amazon Kinesis Data Streams",
      "Amazon MSK",
      "AWS Glue",
    ],
    correct: [0],
    explanationEn:
      "Kinesis Data Firehose is the easiest way to load streaming data into destinations like S3, Redshift, and OpenSearch in near real time, fully managed with no consumer code. Data Streams gives you fine-grained, real-time shard control.",
    explanationAr:
      "الـ Kinesis Data Firehose أبسط طريقة لتحميل streaming data لوجهات زي S3 و Redshift و OpenSearch near-real-time، مُدار بالكامل وبدون كود. الـ Data Streams بيدّي تحكّم دقيق real-time بالـ shards.",
    services: ["Kinesis Firehose", "Kinesis Data Streams", "S3"],
    difficulty: "medium",
  },
  {
    id: "perf-022",
    domain: "performance",
    type: "single",
    question:
      "A team needs real-time processing of streaming data with custom consumers, control over retention, and the ability to replay records. Which service is most appropriate?",
    options: [
      "Amazon Kinesis Data Streams",
      "Amazon Kinesis Data Firehose",
      "Amazon SQS Standard",
      "Amazon SNS",
    ],
    correct: [0],
    explanationEn:
      "Kinesis Data Streams provides real-time streaming with shards, configurable retention, and the ability to replay records with multiple custom consumers. Firehose is delivery-focused and cannot replay.",
    explanationAr:
      "الـ Kinesis Data Streams بيدّي streaming لحظي بالـ shards، retention قابل للضبط، وإمكانية إعادة تشغيل السجلات مع عدة consumers. الـ Firehose للتسليم ومبيعملش replay.",
    services: ["Kinesis Data Streams", "Kinesis Firehose"],
    difficulty: "medium",
  },
  {
    id: "perf-023",
    domain: "performance",
    type: "single",
    question:
      "A company needs a fully managed Apache Kafka service to run existing Kafka-based streaming applications on AWS without managing Kafka clusters themselves. Which service should they choose?",
    options: [
      "Amazon MSK (Managed Streaming for Apache Kafka)",
      "Amazon Kinesis Data Firehose",
      "Amazon SQS",
      "Amazon EMR",
    ],
    correct: [0],
    explanationEn:
      "Amazon MSK is managed Apache Kafka, ideal when you already use Kafka and want AWS to operate the clusters. Kinesis is AWS-native streaming but is not Kafka-compatible.",
    explanationAr:
      "الـ Amazon MSK هو Apache Kafka مُدار، مثالي لو بتستخدم Kafka أصلًا وعايز AWS تدير الـ clusters. الـ Kinesis streaming خاص بـ AWS لكنه مش متوافق مع Kafka.",
    services: ["MSK", "Kafka", "Kinesis"],
    difficulty: "medium",
  },
  {
    id: "perf-024",
    domain: "performance",
    type: "single",
    question:
      "EC2 instances in a private subnet need outbound internet access to download OS patches, but must not be reachable from the internet. The company wants a managed, highly available solution. What should be configured?",
    options: [
      "A NAT gateway in a public subnet with a route from the private subnets",
      "An internet gateway attached directly to the private subnets",
      "A self-managed NAT instance with no scaling",
      "A VPC peering connection to the internet",
    ],
    correct: [0],
    explanationEn:
      "A NAT gateway (managed, highly available within an AZ) lets private instances initiate outbound connections (e.g., patch downloads) while blocking inbound from the internet. The private subnet route points 0.0.0.0/0 to the NAT gateway.",
    explanationAr:
      "الـ NAT Gateway (مُدار وعالي التوافر داخل الـ AZ) بيخلّي الـ instances الخاصة تبدأ اتصالات outbound (زي تنزيل التحديثات) مع منع الـ inbound من الإنترنت. الـ route في الـ private subnet بيوجّه 0.0.0.0/0 للـ NAT.",
    services: ["NAT Gateway", "VPC", "EC2"],
    difficulty: "easy",
  },
  {
    id: "perf-025",
    domain: "performance",
    type: "single",
    question:
      "A company has hundreds of VPCs and on-premises networks that must all interconnect with transitive routing through a single hub. Which service is designed for this at scale?",
    options: [
      "AWS Transit Gateway",
      "VPC Peering between every pair of VPCs",
      "AWS Direct Connect only",
      "Internet gateway",
    ],
    correct: [0],
    explanationEn:
      "Transit Gateway is a hub-and-spoke router that interconnects many VPCs and on-premises networks with transitive routing, scaling far better than mesh VPC peering. VPC peering is 1:1 and non-transitive.",
    explanationAr:
      "الـ Transit Gateway راوتر hub-and-spoke بيربط مئات الـ VPCs والشبكات on-prem بـ transitive routing، وبيتوسّع أحسن بكثير من mesh الـ peering. الـ VPC Peering علاقة 1:1 وغير متعدّية.",
    services: ["Transit Gateway", "VPC Peering"],
    difficulty: "medium",
  },
  {
    id: "perf-026",
    domain: "performance",
    type: "single",
    question:
      "A company requires a dedicated, private, consistent-bandwidth network connection between its on-premises data center and AWS, avoiding the public internet for predictable performance. Which service provides this?",
    options: [
      "AWS Direct Connect (DX)",
      "AWS Site-to-Site VPN only",
      "VPC peering",
      "NAT gateway",
    ],
    correct: [0],
    explanationEn:
      "AWS Direct Connect provides a dedicated physical connection with consistent, low-latency bandwidth between on-premises and AWS. A Site-to-Site VPN runs over the internet (good as a cheaper or backup path, often DX + VPN).",
    explanationAr:
      "الـ AWS Direct Connect بيدّي وصلة فيزيائية مخصّصة بـ bandwidth ثابت و latency قليل بين on-prem و AWS. الـ Site-to-Site VPN بيشتغل على الإنترنت (مناسب كحل أرخص أو احتياطي، وغالبًا DX + VPN).",
    services: ["Direct Connect", "Site-to-Site VPN"],
    difficulty: "medium",
  },
  {
    id: "perf-027",
    domain: "performance",
    type: "single",
    question:
      "A company already has AWS Direct Connect but needs an encrypted backup path to AWS in case the Direct Connect link fails. What should the solutions architect add?",
    options: [
      "A Site-to-Site VPN as a backup over the internet (DX + VPN)",
      "A second internet gateway",
      "VPC peering to another Region",
      "An additional NAT gateway",
    ],
    correct: [0],
    explanationEn:
      "Adding a Site-to-Site VPN provides an encrypted failover path over the internet if Direct Connect goes down. DX gives consistent performance; the VPN provides resilient, encrypted backup connectivity.",
    explanationAr:
      "إضافة Site-to-Site VPN بيدّي مسار failover مشفّر على الإنترنت لو وقع الـ Direct Connect. الـ DX بيدّي أداء ثابت، والـ VPN بيدّي اتصال احتياطي مرن ومشفّر.",
    services: ["Direct Connect", "Site-to-Site VPN", "DX + VPN"],
    difficulty: "medium",
  },
  {
    id: "perf-028",
    domain: "performance",
    type: "single",
    question:
      "A company is building a serverless REST API and wants built-in features such as API keys, usage plans, request validation, throttling, and caching. Which API Gateway type should they use?",
    options: [
      "REST API",
      "HTTP API",
      "WebSocket API",
      "GraphQL via AppSync only",
    ],
    correct: [0],
    explanationEn:
      "API Gateway REST APIs offer the full feature set: API keys, usage plans, request/response validation, throttling, and caching. HTTP APIs are simpler, cheaper, and faster but omit some of these advanced features.",
    explanationAr:
      "الـ API Gateway REST API بيدّي المميزات الكاملة: API keys، usage plans، validation، throttling، و caching. الـ HTTP API أبسط وأرخص وأسرع لكنه بيستغنى عن بعض المميزات المتقدّمة دي.",
    services: ["API Gateway", "REST API", "HTTP API"],
    difficulty: "medium",
  },
  {
    id: "perf-029",
    domain: "performance",
    type: "single",
    question:
      "A real-time chat application needs persistent, bidirectional communication so the server can push messages to clients. Which API Gateway type supports this?",
    options: [
      "WebSocket API",
      "REST API",
      "HTTP API",
      "Edge-optimized REST API",
    ],
    correct: [0],
    explanationEn:
      "API Gateway WebSocket APIs maintain a persistent, two-way connection enabling server-to-client push—ideal for chat and live notifications. REST/HTTP APIs are request/response only.",
    explanationAr:
      "الـ API Gateway WebSocket API بيحافظ على اتصال دائم ثنائي الاتجاه بيسمح بالـ push من السيرفر للعميل — مثالي للشات والإشعارات اللحظية. الـ REST/HTTP request/response بس.",
    services: ["API Gateway", "WebSocket API"],
    difficulty: "medium",
  },
  {
    id: "perf-030",
    domain: "performance",
    type: "single",
    question:
      "A company wants to accelerate uploads of large files from users worldwide into an S3 bucket by routing them over the AWS edge network. Which feature should be enabled?",
    options: [
      "S3 Transfer Acceleration",
      "S3 Cross-Region Replication",
      "S3 Intelligent-Tiering",
      "S3 Select",
    ],
    correct: [0],
    explanationEn:
      "S3 Transfer Acceleration uses CloudFront edge locations to speed up long-distance uploads to a bucket. For very large objects, multipart upload further improves throughput via parallelization.",
    explanationAr:
      "الـ S3 Transfer Acceleration بيستخدم edge locations بتاعة CloudFront لتسريع الرفع من بعيد للـ bucket. وللملفات الكبيرة جدًا، الـ multipart upload بيحسّن الـ throughput أكتر عبر التوازي.",
    services: ["S3", "Transfer Acceleration", "Multipart Upload"],
    difficulty: "medium",
  },
  {
    id: "perf-031",
    domain: "performance",
    type: "single",
    question:
      "An application needs to retrieve only a subset of data from large CSV/JSON objects in S3 using SQL expressions, to reduce the amount of data transferred and processed. Which feature should be used?",
    options: [
      "S3 Select",
      "S3 Transfer Acceleration",
      "Amazon Athena federated query",
      "S3 Lifecycle policies",
    ],
    correct: [0],
    explanationEn:
      "S3 Select retrieves only the needed rows/columns from a single object using SQL, cutting data transfer and improving performance. Athena queries across many objects/datasets; S3 Select targets one object.",
    explanationAr:
      "الـ S3 Select بيرجّع الصفوف/الأعمدة المطلوبة بس من أوبجكت واحد باستخدام SQL، فبيقلّل النقل ويحسّن الأداء. الـ Athena بيستعلم عبر أوبجكتس/داتاست كتير، لكن S3 Select على أوبجكت واحد.",
    services: ["S3", "S3 Select"],
    difficulty: "medium",
  },
  {
    id: "perf-032",
    domain: "performance",
    type: "single",
    question:
      "A globally distributed website serves large amounts of static content (images, video, JS) and needs lower latency for users by caching at edge locations. Which service should be added in front of the origin?",
    options: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Elastic Load Balancing",
      "Amazon Route 53 latency routing only",
    ],
    correct: [0],
    explanationEn:
      "Amazon CloudFront is a CDN that caches content at edge locations close to users, lowering latency for static and dynamic HTTP content and reducing origin load. Global Accelerator improves TCP/UDP routing but does not cache content.",
    explanationAr:
      "الـ Amazon CloudFront هو CDN بيعمل cache للمحتوى في الـ edge قريب من المستخدمين، فبيقلّل الـ latency للمحتوى الثابت والديناميكي وبيخفّف الحمل عن الأصل. الـ Global Accelerator بيحسّن توجيه TCP/UDP لكنه مبيعملش cache.",
    services: ["CloudFront", "CDN", "Global Accelerator"],
    difficulty: "easy",
  },
];
