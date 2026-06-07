import type { MCQ } from "../types";

export const costMcqs: MCQ[] = [
  {
    id: "cost-001",
    domain: "cost",
    type: "single",
    question:
      "A fault-tolerant batch processing job can be interrupted and restarted at any time and runs only occasionally. The company wants the lowest possible EC2 cost. Which purchasing option should they use?",
    options: [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
      "Dedicated Hosts",
    ],
    correct: [0],
    explanationEn:
      "Spot Instances offer up to ~90% savings and are ideal for fault-tolerant, interruptible workloads like batch and big-data jobs. The key clue is 'fault-tolerant / can be interrupted'.",
    explanationAr:
      "الـ Spot Instances بتوفّر لحد ~90% ومثالية للأحمال المتحمّلة للانقطاع زي الـ batch و big data. المفتاح في السؤال 'fault-tolerant / ممكن تنقطع'.",
    services: ["EC2", "Spot Instances"],
    difficulty: "easy",
  },
  {
    id: "cost-002",
    domain: "cost",
    type: "single",
    question:
      "A company runs a steady, predictable production workload 24/7 for at least the next three years and wants the maximum discount with a commitment to a specific instance family. Which option is most cost-effective?",
    options: [
      "Reserved Instances (Standard, 3-year)",
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts billed hourly",
    ],
    correct: [0],
    explanationEn:
      "Standard Reserved Instances give the largest discount for steady, long-running workloads with a 1- or 3-year commitment. Spot is unsuitable for always-on production; On-Demand is the most expensive for steady use.",
    explanationAr:
      "الـ Standard Reserved Instances بتدّي أكبر خصم للأحمال الثابتة طويلة المدى بالتزام سنة أو 3. الـ Spot مش مناسب للإنتاج الدائم، والـ On-Demand هو الأغلى للاستخدام الثابت.",
    services: ["EC2", "Reserved Instances"],
    difficulty: "medium",
  },
  {
    id: "cost-003",
    domain: "cost",
    type: "single",
    question:
      "A company wants discounted compute pricing but needs flexibility to change instance families, sizes, and even move between EC2, Fargate, and Lambda over a 1-year commitment. Which pricing model fits best?",
    options: [
      "Compute Savings Plans",
      "Standard Reserved Instances",
      "Spot Instances",
      "On-Demand only",
    ],
    correct: [0],
    explanationEn:
      "Compute Savings Plans commit to an hourly dollar amount and apply across EC2 instance families/sizes/Regions and to Fargate and Lambda—maximum flexibility at a discount. Standard RIs are tied to a specific instance type.",
    explanationAr:
      "الـ Compute Savings Plans بتلتزم بمبلغ بالساعة وبتنطبق عبر عائلات/أحجام/regions الـ EC2 وكمان Fargate و Lambda — أعلى مرونة بخصم. الـ Standard RI مربوطة بنوع instance محدّد.",
    services: ["Savings Plans", "Reserved Instances", "Fargate", "Lambda"],
    difficulty: "medium",
  },
  {
    id: "cost-004",
    domain: "cost",
    type: "single",
    question:
      "A regulatory requirement forces a company to use a physical server dedicated to them and to bring their own per-socket/per-core software licenses (BYOL). Which EC2 option meets this?",
    options: [
      "Dedicated Hosts",
      "Spot Instances",
      "Reserved Instances",
      "On-Demand shared tenancy",
    ],
    correct: [0],
    explanationEn:
      "Dedicated Hosts provide a physical server fully dedicated to you, with visibility into sockets/cores for BYOL licensing and compliance isolation. The keyword is BYOL or physical-core-bound licensing.",
    explanationAr:
      "الـ Dedicated Hosts بتدّي سيرفر فيزيائي مخصّص ليك بالكامل، مع رؤية للـ sockets/cores لترخيص BYOL وعزل الامتثال. المفتاح هو BYOL أو ترخيص مربوط بعدد cores فيزيائية.",
    services: ["Dedicated Hosts", "BYOL"],
    difficulty: "medium",
  },
  {
    id: "cost-005",
    domain: "cost",
    type: "single",
    question:
      "A company uses Reserved Instances for a nightly batch job that usually takes 7 hours within a 10-hour window. End-of-month spikes risk exceeding the window, and once started the job cannot be interrupted. They want extra capacity as cost-effectively as possible. What should they do?",
    options: [
      "Deploy On-Demand Instances during the periods of high demand.",
      "Deploy Spot Instances during high demand.",
      "Create a second EC2 reservation for additional instances.",
      "Increase the instance size in the reservation permanently.",
    ],
    correct: [0],
    explanationEn:
      "Because the job cannot be interrupted, Spot is unsuitable. On-Demand adds capacity only during the occasional spikes and bills per second used—cheaper than a permanent second reservation or always-larger instances.",
    explanationAr:
      "بما إن الـ job مينفعش تنقطع، الـ Spot مش مناسب. الـ On-Demand بيضيف سعة وقت الذروة النادرة بس وبيتحاسب بالثانية — أرخص من reservation تاني دائم أو instances أكبر طول الوقت.",
    services: ["EC2", "On-Demand", "Spot Instances", "Reserved Instances"],
    difficulty: "hard",
  },
  {
    id: "cost-006",
    domain: "cost",
    type: "single",
    question:
      "Data in an S3 bucket is accessed frequently for 30 days, then rarely afterward but must still be retrievable in milliseconds when needed. Which approach minimizes cost while meeting the access requirement?",
    options: [
      "Use a lifecycle policy to transition objects from S3 Standard to S3 Standard-IA after 30 days.",
      "Keep everything in S3 Standard forever.",
      "Move objects immediately to S3 Glacier Deep Archive.",
      "Delete and re-upload objects each month.",
    ],
    correct: [0],
    explanationEn:
      "S3 Standard-IA has lower storage cost with millisecond retrieval, suitable for infrequently accessed data. A lifecycle policy automatically transitions objects after 30 days. Glacier Deep Archive cannot deliver millisecond retrieval.",
    explanationAr:
      "الـ S3 Standard-IA تكلفة تخزينها أقل مع استرجاع بالملّي ثانية، مناسب للبيانات نادرة الوصول. الـ Lifecycle Policy بتنقل الأوبجكتس تلقائيًا بعد 30 يوم. الـ Glacier Deep Archive مبيدّيش استرجاع بالملّي ثانية.",
    services: ["S3", "Standard-IA", "Lifecycle Policies"],
    difficulty: "medium",
  },
  {
    id: "cost-007",
    domain: "cost",
    type: "single",
    question:
      "A company has data with unknown or changing access patterns and wants AWS to automatically move objects between access tiers to optimize cost without performance impact or retrieval fees for tier changes. Which S3 storage class should they use?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval",
    ],
    correct: [0],
    explanationEn:
      "S3 Intelligent-Tiering automatically moves objects between frequent and infrequent tiers based on access patterns, with no retrieval fees for tier transitions—ideal for unknown or changing access patterns.",
    explanationAr:
      "الـ S3 Intelligent-Tiering بينقل الأوبجكتس تلقائيًا بين طبقات الوصول المتكرّر وغير المتكرّر حسب الاستخدام، بدون رسوم استرجاع لتغيير الطبقة — مثالي للأنماط المجهولة أو المتغيّرة.",
    services: ["S3", "Intelligent-Tiering"],
    difficulty: "easy",
  },
  {
    id: "cost-008",
    domain: "cost",
    type: "single",
    question:
      "A company stores reproducible, infrequently accessed data (such as secondary copies of derived files) and wants the lowest storage cost, accepting that the data lives in a single Availability Zone. Which S3 storage class fits?",
    options: [
      "S3 One Zone-IA",
      "S3 Standard-IA",
      "S3 Standard",
      "S3 Glacier Deep Archive",
    ],
    correct: [0],
    explanationEn:
      "S3 One Zone-IA costs less than Standard-IA because it stores data in a single AZ, which is acceptable for reproducible, infrequently accessed data. It still offers millisecond retrieval.",
    explanationAr:
      "الـ S3 One Zone-IA أرخص من Standard-IA لأنه بيخزّن في AZ واحدة، وده مقبول للبيانات القابلة لإعادة الإنشاء ونادرة الوصول. وبيدّي استرجاع بالملّي ثانية برضه.",
    services: ["S3", "One Zone-IA"],
    difficulty: "medium",
  },
  {
    id: "cost-009",
    domain: "cost",
    type: "single",
    question:
      "A company must retain compliance archives for 7 years. The data is almost never accessed, and a retrieval time of 12 hours is acceptable. Which storage class is the most cost-effective?",
    options: [
      "S3 Glacier Deep Archive",
      "S3 Glacier Instant Retrieval",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
    ],
    correct: [0],
    explanationEn:
      "S3 Glacier Deep Archive is the lowest-cost class for long-term archives accessed very rarely, with retrieval times of about 12 hours—perfect for multi-year compliance data.",
    explanationAr:
      "الـ S3 Glacier Deep Archive هو الأرخص للأرشيف طويل الأمد نادر الوصول، باسترجاع حوالي 12 ساعة — مثالي لبيانات الامتثال لسنوات.",
    services: ["S3", "Glacier Deep Archive"],
    difficulty: "easy",
  },
  {
    id: "cost-010",
    domain: "cost",
    type: "single",
    question:
      "Archived data is rarely accessed but, on the rare occasion it is needed, must be retrieved in milliseconds. Which S3 storage class meets this at archive-level cost?",
    options: [
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Deep Archive",
      "S3 Glacier Flexible Retrieval",
      "S3 Standard",
    ],
    correct: [0],
    explanationEn:
      "S3 Glacier Instant Retrieval offers archive pricing with millisecond retrieval for rarely accessed data that still needs immediate access when requested. Deep Archive and Flexible Retrieval have longer retrieval times.",
    explanationAr:
      "الـ S3 Glacier Instant Retrieval بيدّي سعر أرشيف مع استرجاع بالملّي ثانية للبيانات نادرة الوصول اللي لسه محتاجة وصول فوري وقت الطلب. الـ Deep Archive و Flexible وقت استرجاعهم أطول.",
    services: ["S3", "Glacier Instant Retrieval"],
    difficulty: "medium",
  },
  {
    id: "cost-011",
    domain: "cost",
    type: "single",
    question:
      "A company wants to automatically transition objects to cheaper storage classes over time and delete them after a defined period, with no manual intervention. Which S3 feature should they configure?",
    options: [
      "S3 Lifecycle policies",
      "S3 Versioning",
      "S3 Replication",
      "S3 Object Lock",
    ],
    correct: [0],
    explanationEn:
      "S3 Lifecycle policies automatically transition objects to colder, cheaper classes after set periods and can expire (delete) them—one of the most effective tools for reducing storage cost.",
    explanationAr:
      "الـ S3 Lifecycle Policies بتنقل الأوبجكتس تلقائيًا لطبقات أبرد وأرخص بعد مدد محدّدة وتقدر تحذفها (expiration) — من أقوى أدوات تقليل تكلفة التخزين.",
    services: ["S3", "Lifecycle Policies"],
    difficulty: "easy",
  },
  {
    id: "cost-012",
    domain: "cost",
    type: "single",
    question:
      "A company's workload is bursty and intermittent, with long idle periods between short executions. They want to avoid paying for idle compute. Which compute option is the most cost-effective?",
    options: [
      "AWS Lambda (pay only per request and duration)",
      "A continuously running EC2 On-Demand instance",
      "A Reserved Instance running 24/7",
      "A Dedicated Host",
    ],
    correct: [0],
    explanationEn:
      "Lambda charges only for invocations and execution time, so there is zero cost during idle periods—ideal for bursty/intermittent workloads. Always-on EC2 (even reserved) pays for idle time.",
    explanationAr:
      "الـ Lambda بتتحاسب على عدد الـ requests ومدة التنفيذ بس، فصفر تكلفة وقت الخمول — مثالي للأحمال المتقطّعة. الـ EC2 الدائم (حتى reserved) بيدفع وقت الخمول.",
    services: ["Lambda", "EC2"],
    difficulty: "easy",
  },
  {
    id: "cost-013",
    domain: "cost",
    type: "single",
    question:
      "A containerized workload runs sporadically and the team does not want to pay for or manage idle EC2 cluster capacity. Which approach minimizes cost?",
    options: [
      "Run containers on AWS Fargate (pay per task, no idle servers)",
      "Run an always-on ECS cluster on EC2",
      "Run a large EKS cluster sized for peak at all times",
      "Use Dedicated Hosts",
    ],
    correct: [0],
    explanationEn:
      "Fargate charges per running task with no idle server cost, making it cost-effective for sporadic container workloads. Always-on EC2-backed clusters pay for idle capacity, while Fargate scales to zero servers.",
    explanationAr:
      "الـ Fargate بيتحاسب لكل task شغّال وبدون تكلفة سيرفرات خاملة، فبيكون موفّر للأحمال المتقطّعة. الـ clusters الدائمة على EC2 بتدفع للسعة الخاملة، لكن Fargate مفيش سيرفر فاضي.",
    services: ["Fargate", "ECS", "EC2"],
    difficulty: "medium",
  },
  {
    id: "cost-014",
    domain: "cost",
    type: "single",
    question:
      "A finance team needs to visualize, analyze, and forecast AWS spending over time and break it down by service. Which tool should they use?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Compute Optimizer",
    ],
    correct: [0],
    explanationEn:
      "AWS Cost Explorer visualizes and analyzes historical spend and forecasts future costs, with breakdowns by service, tag, and more. Budgets is for thresholds/alerts; it is not the analysis/forecast tool.",
    explanationAr:
      "الـ AWS Cost Explorer بيتصوّر ويحلّل الإنفاق التاريخي ويتنبّأ بالمستقبل، بتقسيمات حسب الخدمة والـ tag وغيره. الـ Budgets للحدود/التنبيهات مش للتحليل/التنبؤ.",
    services: ["Cost Explorer", "Budgets"],
    difficulty: "easy",
  },
  {
    id: "cost-015",
    domain: "cost",
    type: "single",
    question:
      "A company wants to be alerted by email as soon as its monthly costs are forecast to exceed a set dollar amount. Which service should they use?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "Amazon CloudWatch billing dashboards only",
      "AWS Compute Optimizer",
    ],
    correct: [0],
    explanationEn:
      "AWS Budgets lets you set cost/usage thresholds and sends alerts (including forecasted-to-exceed alerts) when limits are approached or breached. Cost Explorer analyzes spend but does not enforce budget alerts.",
    explanationAr:
      "الـ AWS Budgets بيخلّيك تحدّد حدود تكلفة/استخدام ويبعت تنبيهات (بما فيها تنبيه التجاوز المتوقّع) لما تقرب أو تتجاوز الحد. الـ Cost Explorer بيحلّل الإنفاق لكن مبيعملش تنبيهات ميزانية.",
    services: ["Budgets", "Cost Explorer"],
    difficulty: "easy",
  },
  {
    id: "cost-016",
    domain: "cost",
    type: "single",
    question:
      "A company wants automated recommendations across cost, security, performance, fault tolerance, and service limits for its whole account. Which service provides this?",
    options: [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "Amazon Inspector",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "AWS Trusted Advisor analyzes your account and provides recommendations across five categories: cost optimization, security, performance, fault tolerance, and service limits.",
    explanationAr:
      "الـ AWS Trusted Advisor بيحلّل حسابك ويدّي توصيات في 5 فئات: التكلفة، الأمان، الأداء، التوافر (fault tolerance)، وحدود الخدمة.",
    services: ["Trusted Advisor"],
    difficulty: "easy",
  },
  {
    id: "cost-017",
    domain: "cost",
    type: "single",
    question:
      "A company suspects its EC2 instances, EBS volumes, and Lambda functions are over-provisioned. They want data-driven right-sizing recommendations. Which service should they use?",
    options: [
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Trusted Advisor only",
      "Amazon CloudWatch alarms only",
    ],
    correct: [0],
    explanationEn:
      "AWS Compute Optimizer uses machine learning on utilization metrics to recommend right-sizing for EC2, EBS, Lambda, and Auto Scaling groups, helping eliminate over-provisioning.",
    explanationAr:
      "الـ AWS Compute Optimizer بيستخدم ML على مقاييس الاستخدام ليوصّي بالـ right-sizing لـ EC2 و EBS و Lambda و Auto Scaling، فبيساعد تشيل الـ over-provisioning.",
    services: ["Compute Optimizer", "EC2", "EBS", "Lambda"],
    difficulty: "medium",
  },
  {
    id: "cost-018",
    domain: "cost",
    type: "single",
    question:
      "A company needs to allocate and report AWS costs by project and department across its bill. Which feature enables this breakdown?",
    options: [
      "Cost allocation tags",
      "S3 Storage Lens",
      "AWS Budgets",
      "Reserved Instances",
    ],
    correct: [0],
    explanationEn:
      "Cost allocation tags label resources (e.g., by project or department) so costs can be grouped and reported in the bill and Cost Explorer. They are foundational for chargeback/showback.",
    explanationAr:
      "الـ Cost Allocation Tags بتعلّم الموارد (مثلًا حسب المشروع أو القسم) عشان التكلفة تتجمّع وتتقرّر في الفاتورة و Cost Explorer. أساسية للـ chargeback/showback.",
    services: ["Cost Allocation Tags", "Cost Explorer"],
    difficulty: "medium",
  },
  {
    id: "cost-019",
    domain: "cost",
    type: "single",
    question:
      "A company wants organization-wide analytics on S3 storage usage and cost, with recommendations to reduce spend across hundreds of buckets. Which tool should they use?",
    options: [
      "Amazon S3 Storage Lens",
      "AWS Trusted Advisor",
      "Amazon Macie",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "S3 Storage Lens provides organization-wide visibility into S3 usage and activity with cost-optimization recommendations across accounts and buckets.",
    explanationAr:
      "الـ S3 Storage Lens بيدّي رؤية شاملة على مستوى المؤسسة لاستخدام S3 ونشاطه مع توصيات لتقليل التكلفة عبر الحسابات والـ buckets.",
    services: ["S3 Storage Lens", "S3"],
    difficulty: "medium",
  },
  {
    id: "cost-020",
    domain: "cost",
    type: "single",
    question:
      "A media company serves large files to a global audience directly from S3 and faces high data-transfer (egress) costs. Which change reduces egress costs while improving performance?",
    options: [
      "Put Amazon CloudFront in front of the S3 origin to cache content at the edge.",
      "Move the bucket to a cheaper Region only.",
      "Enable S3 Versioning.",
      "Switch the objects to S3 Glacier.",
    ],
    correct: [0],
    explanationEn:
      "CloudFront caches content at edge locations, so repeat requests are served from the edge instead of fetching from S3 each time—reducing origin data-transfer (egress) costs and lowering latency.",
    explanationAr:
      "الـ CloudFront بيعمل cache في الـ edge، فالطلبات المتكرّرة بتتخدم من الـ edge بدل ما تتسحب من S3 كل مرة — فبيقلّل تكلفة الـ egress من الأصل ويقلّل الـ latency.",
    services: ["CloudFront", "S3", "Data Transfer"],
    difficulty: "medium",
  },
  {
    id: "cost-021",
    domain: "cost",
    type: "single",
    question:
      "Which statement about AWS data transfer costs is correct and most relevant to cost optimization?",
    options: [
      "Inbound data transfer to AWS is generally free, while outbound to the internet and cross-Region transfer are charged.",
      "All data transfer in and out of AWS is free.",
      "Inbound data transfer is the most expensive cost.",
      "Cross-AZ traffic is always free.",
    ],
    correct: [0],
    explanationEn:
      "Data transfer into AWS is generally free; outbound to the internet and cross-Region (and cross-AZ) transfer are billed. Minimizing unnecessary cross-Region/cross-AZ movement and using CloudFront reduce these charges.",
    explanationAr:
      "الدخول لـ AWS عادةً مجاني؛ الخروج للإنترنت والـ cross-Region (والـ cross-AZ) مدفوع. تقليل النقل غير الضروري cross-Region/cross-AZ واستخدام CloudFront بيقلّلوا التكاليف دي.",
    services: ["Data Transfer", "CloudFront"],
    difficulty: "medium",
  },
  {
    id: "cost-022",
    domain: "cost",
    type: "single",
    question:
      "A workload has a single object-style access pattern where many instances do NOT need shared block or file storage. The team wants the cheapest durable storage for these objects. Which service is most cost-effective?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Instance Store",
    ],
    correct: [0],
    explanationEn:
      "For object data that does not require block or shared-file semantics, S3 is the cheapest, highly durable option. EBS is single-instance block storage; EFS is shared file storage at a higher cost.",
    explanationAr:
      "للبيانات على هيئة objects اللي مش محتاجة block أو ملفات مشتركة، الـ S3 هو الأرخص والأعلى durability. الـ EBS block لـ instance واحد، والـ EFS ملفات مشتركة بتكلفة أعلى.",
    services: ["S3", "EBS", "EFS"],
    difficulty: "easy",
  },
  {
    id: "cost-023",
    domain: "cost",
    type: "single",
    question:
      "A non-critical development database is currently running as Multi-AZ, roughly doubling its cost. The team wants to reduce cost while accepting lower availability for this environment. What should they do?",
    options: [
      "Convert the dev database to a Single-AZ deployment.",
      "Add Read Replicas in multiple Regions.",
      "Upgrade to Aurora Global Database.",
      "Enable Multi-AZ in two more AZs.",
    ],
    correct: [0],
    explanationEn:
      "Multi-AZ roughly doubles DB cost for the standby. For non-critical environments like dev, Single-AZ is acceptable and cheaper. Reserve Multi-AZ for production that needs HA.",
    explanationAr:
      "الـ Multi-AZ بيضاعف تكلفة قاعدة البيانات تقريبًا بسبب الـ standby. للبيئات غير الحرجة زي الـ dev، الـ Single-AZ مقبول وأرخص. سيب الـ Multi-AZ للإنتاج اللي محتاج HA.",
    services: ["RDS", "Multi-AZ", "Single-AZ"],
    difficulty: "medium",
  },
  {
    id: "cost-024",
    domain: "cost",
    type: "single",
    question:
      "Before committing to Reserved Instances or Savings Plans, what is the recommended first step to avoid locking in the wrong capacity?",
    options: [
      "Right-size the instances first, then commit.",
      "Buy the largest reservation possible immediately.",
      "Commit to 3-year Spot pricing.",
      "Turn off all monitoring to save cost.",
    ],
    correct: [0],
    explanationEn:
      "Right-size first (e.g., using Compute Optimizer), then commit. Committing before right-sizing risks locking in over-provisioned capacity. The rule is: right-size first, commit second.",
    explanationAr:
      "صغّر الحجم الأول (مثلًا بـ Compute Optimizer)، وبعدين التزم. الالتزام قبل الـ right-size بيخاطر بإنك تقفل على سعة أكبر من اللازم. القاعدة: right-size الأول، الالتزام بعدين.",
    services: ["Reserved Instances", "Savings Plans", "Compute Optimizer"],
    difficulty: "medium",
  },
  {
    id: "cost-025",
    domain: "cost",
    type: "single",
    question:
      "An unpredictable, spiky workload with on-demand capacity needs a NoSQL database where the company pays only for what it uses and does not want to manage capacity planning. Which option is the most cost-effective?",
    options: [
      "Amazon DynamoDB with on-demand capacity mode",
      "Amazon RDS Multi-AZ provisioned for peak",
      "A large always-on Aurora cluster",
      "Self-managed database on EC2 sized for peak",
    ],
    correct: [0],
    explanationEn:
      "DynamoDB on-demand capacity bills per request with no capacity planning, making it cost-effective for unpredictable/spiky NoSQL workloads. Provisioning relational databases for peak wastes money during idle periods.",
    explanationAr:
      "الـ DynamoDB on-demand بيتحاسب لكل request بدون تخطيط سعة، فبيكون موفّر للأحمال NoSQL غير المتوقّعة. تجهيز قواعد علائقية للذروة بيهدر فلوس وقت الخمول.",
    services: ["DynamoDB", "On-Demand Capacity"],
    difficulty: "medium",
  },
  {
    id: "cost-026",
    domain: "cost",
    type: "single",
    question:
      "A company runs a stateless web fleet that can tolerate instances being reclaimed, behind an Auto Scaling group and load balancer. They want to cut compute cost dramatically for the baseline web tier. Which approach is most appropriate?",
    options: [
      "Use a mix of Spot Instances (with On-Demand baseline) in the Auto Scaling group.",
      "Use only On-Demand Instances.",
      "Use Dedicated Hosts for all instances.",
      "Disable Auto Scaling to save cost.",
    ],
    correct: [0],
    explanationEn:
      "A stateless, fault-tolerant fleet behind an ASG/LB can run largely on Spot for big savings, with an On-Demand baseline for stability. Auto Scaling mixed instances policies make this straightforward.",
    explanationAr:
      "الـ fleet stateless المتحمّل للأعطال ورا ASG/LB يقدر يشتغل غالبًا على Spot لتوفير كبير، مع baseline On-Demand للاستقرار. سياسات الـ mixed instances في Auto Scaling بتسهّل ده.",
    services: ["Spot Instances", "Auto Scaling", "EC2"],
    difficulty: "medium",
  },
  {
    id: "cost-027",
    domain: "cost",
    type: "single",
    question:
      "A company keeps petabytes of log files in S3 Standard that are queried only a few times a year. They want to cut storage costs while still allowing occasional ad-hoc SQL analysis. What is the most cost-effective combination?",
    options: [
      "Transition logs to S3 Glacier/Standard-IA via lifecycle and query with Amazon Athena when needed.",
      "Keep all logs in S3 Standard and run an always-on Redshift cluster.",
      "Load all logs into RDS.",
      "Copy logs to EBS volumes.",
    ],
    correct: [0],
    explanationEn:
      "Lifecycle-transitioning cold logs to cheaper classes (Standard-IA/Glacier) plus serverless, pay-per-query Athena avoids an always-on warehouse and minimizes storage cost while keeping ad-hoc SQL possible.",
    explanationAr:
      "نقل اللوجز الباردة بالـ lifecycle لطبقات أرخص (Standard-IA/Glacier) + Athena الـ serverless بتدفع لكل query، بيتجنّب warehouse دائم ويقلّل التخزين مع إبقاء التحليل عند الحاجة.",
    services: ["S3", "Lifecycle Policies", "Athena", "Glacier"],
    difficulty: "hard",
  },
  {
    id: "cost-028",
    domain: "cost",
    type: "multi",
    question:
      "A startup wants to minimize total cost for a new web application with variable traffic and minimal operational overhead. Which TWO choices align best with cost-optimization best practices? (Select TWO.)",
    options: [
      "Use serverless services (Lambda, API Gateway, DynamoDB) that scale to zero when idle.",
      "Over-provision large EC2 instances to be safe.",
      "Apply S3 lifecycle policies to move infrequently accessed assets to cheaper classes.",
      "Run a 24/7 Multi-AZ RDS cluster sized for peak from day one.",
      "Buy 3-year Reserved Instances before measuring usage.",
    ],
    correct: [0, 2],
    explanationEn:
      "Serverless scales to zero (pay only when used) and lifecycle policies move cold data to cheaper storage—both reduce cost with low overhead. Over-provisioning, peak-sized Multi-AZ from day one, and committing before measuring all waste money.",
    explanationAr:
      "الـ serverless بينزل لصفر (تدفع وقت الاستخدام بس) والـ lifecycle بينقل البيانات الباردة لتخزين أرخص — الاتنين بيقلّلوا التكلفة بأقل overhead. الـ over-provisioning و Multi-AZ من اليوم الأول والالتزام قبل القياس كلها هدر.",
    services: ["Lambda", "API Gateway", "DynamoDB", "S3", "Lifecycle Policies"],
    difficulty: "medium",
  },
];
