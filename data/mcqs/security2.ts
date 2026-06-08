import type { MCQ } from "../types";

export const security2Mcqs: MCQ[] = [
  {
    id: "sec-101",
    domain: "security",
    type: "single",
    question:
      "A company hosts private objects in Amazon S3 and wants to grant a user temporary, time-limited access to download a specific object without making the bucket public or creating an IAM user. What should they use?",
    options: [
      "An S3 pre-signed URL",
      "A public bucket policy",
      "An S3 Access Point with public access",
      "A NAT gateway",
    ],
    correct: [0],
    explanationEn:
      "A pre-signed URL grants temporary, time-limited access to a specific object using the signer's credentials — no public access or new IAM user needed.",
    explanationAr:
      "الـ pre-signed URL بيدّي وصول مؤقت محدّد بوقت لأوبجكت معيّن باستخدام صلاحيات اللي عمل التوقيع — من غير ما تخلّي الـ bucket عام أو تعمل IAM user.",
    whyWrongEn:
      "A public bucket policy or public Access Point exposes data to everyone; a NAT gateway is unrelated (it's outbound internet for private subnets).",
    whyWrongAr:
      "الـ bucket policy العامة أو الـ Access Point العام بيكشفوا الداتا للكل؛ والـ NAT gateway مالهوش علاقة (خروج إنترنت للـ private subnets).",
    services: ["S3", "Pre-signed URL"],
    difficulty: "medium",
  },
  {
    id: "sec-102",
    domain: "security",
    type: "single",
    question:
      "A company wants EC2 administrators to connect to instances in private subnets for management without opening inbound SSH ports, managing bastion hosts, or storing SSH keys. Which service should they use?",
    options: [
      "AWS Systems Manager Session Manager",
      "A bastion host in a public subnet",
      "An internet gateway on the private subnet",
      "AWS Direct Connect",
    ],
    correct: [0],
    explanationEn:
      "Systems Manager Session Manager provides secure shell access through the SSM agent and IAM — no open inbound ports, no bastion, no SSH keys, with full logging.",
    explanationAr:
      "الـ Systems Manager Session Manager بيدّي وصول shell آمن عبر الـ SSM agent والـ IAM — من غير بورتات inbound مفتوحة ولا bastion ولا SSH keys، مع تسجيل كامل.",
    whyWrongEn:
      "A bastion host still requires open ports and key management; an internet gateway would expose private instances; Direct Connect is on-prem connectivity, not instance shell access.",
    whyWrongAr:
      "الـ bastion لسه بيحتاج بورتات مفتوحة وإدارة مفاتيح؛ والـ internet gateway هيكشف الـ instances؛ والـ Direct Connect للربط مع on-prem مش لوصول shell.",
    services: ["Systems Manager", "Session Manager"],
    difficulty: "medium",
  },
  {
    id: "sec-103",
    domain: "security",
    type: "single",
    question:
      "An S3 bucket must be accessible only through a specific Amazon CloudFront distribution, and never directly via S3 URLs. What is the recommended way to enforce this?",
    options: [
      "Use CloudFront Origin Access Control (OAC) and a bucket policy that only allows that distribution.",
      "Make the bucket public and share the URL.",
      "Put the bucket behind a NAT gateway.",
      "Enable S3 Transfer Acceleration.",
    ],
    correct: [0],
    explanationEn:
      "Origin Access Control (OAC, successor to OAI) lets only the CloudFront distribution read the bucket via a bucket policy, blocking direct S3 access.",
    explanationAr:
      "الـ Origin Access Control (OAC، خليفة الـ OAI) بيخلّي توزيع CloudFront بس هو اللي يقرأ الـ bucket عبر bucket policy، فبيمنع الوصول المباشر لـ S3.",
    whyWrongEn:
      "A public bucket defeats the purpose; NAT gateways and Transfer Acceleration don't restrict who can read objects.",
    whyWrongAr:
      "الـ bucket العام بيلغي الهدف؛ والـ NAT و Transfer Acceleration مبيقيّدوش مين يقرأ الأوبجكتس.",
    services: ["CloudFront", "OAC", "S3"],
    difficulty: "medium",
  },
  {
    id: "sec-104",
    domain: "security",
    type: "single",
    question:
      "A web application behind CloudFront must block all traffic from countries where the company does not operate. Which is the most appropriate control?",
    options: [
      "AWS WAF geo-match (geo-restriction) rules",
      "A security group rule per country",
      "A NACL deny per country",
      "Route 53 geolocation routing only",
    ],
    correct: [0],
    explanationEn:
      "AWS WAF (or CloudFront geo-restriction) can allow/block requests by country at Layer 7 — the right tool for geo-blocking web traffic.",
    explanationAr:
      "الـ AWS WAF (أو geo-restriction في CloudFront) بيسمح/يمنع الطلبات حسب الدولة على Layer 7 — الأداة الصح للحظر الجغرافي.",
    whyWrongEn:
      "Security groups and NACLs work on IPs/ports, not countries; Route 53 geolocation routes DNS but doesn't block requests.",
    whyWrongAr:
      "الـ SG و NACL بيشتغلوا على IP/بورت مش دول؛ والـ Route 53 geolocation بيوجّه DNS لكن مبيمنعش الطلبات.",
    services: ["WAF", "CloudFront"],
    difficulty: "medium",
  },
  {
    id: "sec-105",
    domain: "security",
    type: "single",
    question:
      "A company wants every new Amazon EBS volume in an account to be encrypted automatically without relying on users to remember. What should they configure?",
    options: [
      "Enable EBS encryption by default at the account/Region level",
      "Ask developers to tick the encryption box each time",
      "Use an SCP to delete unencrypted volumes",
      "Enable S3 default encryption",
    ],
    correct: [0],
    explanationEn:
      "EBS 'encryption by default' is an account/Region setting that automatically encrypts all new volumes and snapshots with a KMS key.",
    explanationAr:
      "إعداد EBS 'encryption by default' على مستوى الحساب/الـ region بيشفّر كل الـ volumes والـ snapshots الجديدة تلقائيًا بمفتاح KMS.",
    whyWrongEn:
      "Relying on users is error-prone; an SCP deleting volumes is destructive and not how you enforce encryption; S3 default encryption doesn't affect EBS.",
    whyWrongAr:
      "الاعتماد على المستخدمين بيغلط كتير؛ وحذف الـ volumes بـ SCP مدمّر ومش طريقة فرض التشفير؛ وتشفير S3 الافتراضي مالوش علاقة بـ EBS.",
    services: ["EBS", "KMS", "Encryption"],
    difficulty: "medium",
  },
  {
    id: "sec-106",
    domain: "security",
    type: "single",
    question:
      "A company with high S3 request volume uses SSE-KMS and is hitting KMS request limits and rising costs. Which feature reduces KMS calls while keeping SSE-KMS?",
    options: [
      "S3 Bucket Keys",
      "Switch to SSE-C",
      "Disable encryption",
      "Use a NAT gateway",
    ],
    correct: [0],
    explanationEn:
      "S3 Bucket Keys reduce the number of calls to KMS by using a bucket-level key for envelope encryption, lowering KMS cost and throttling while keeping SSE-KMS.",
    explanationAr:
      "الـ S3 Bucket Keys بتقلّل عدد النداءات لـ KMS باستخدام مفتاح على مستوى الـ bucket للـ envelope encryption، فبتقلّل تكلفة وthrottling الـ KMS مع الإبقاء على SSE-KMS.",
    whyWrongEn:
      "SSE-C shifts key management to you; disabling encryption violates the requirement; NAT gateways are unrelated.",
    whyWrongAr:
      "الـ SSE-C بينقل إدارة المفاتيح ليك؛ وإلغاء التشفير بيخالف المطلوب؛ والـ NAT مالوش علاقة.",
    services: ["S3", "SSE-KMS", "Bucket Keys"],
    difficulty: "hard",
  },
  {
    id: "sec-107",
    domain: "security",
    type: "single",
    question:
      "Two VPCs in the same account must allow specific EC2 instances to talk to each other privately, referencing each other's security groups for least-privilege rules. The VPCs are peered. What can the security groups reference?",
    options: [
      "Each other's security group IDs across the VPC peering connection",
      "Public IP addresses only",
      "NACL rule numbers",
      "IAM role ARNs",
    ],
    correct: [0],
    explanationEn:
      "Security groups can reference peer security group IDs (in the same Region) across a VPC peering connection, enabling precise least-privilege rules without hardcoding IPs.",
    explanationAr:
      "الـ Security Groups تقدر تشير لـ security group IDs بتاعة الطرف التاني (في نفس الـ region) عبر الـ VPC peering، فتعمل قواعد least-privilege دقيقة من غير IPs ثابتة.",
    whyWrongEn:
      "Public IPs aren't used for private peering traffic; NACLs use numbered rules not SG refs; IAM ARNs aren't network controls.",
    whyWrongAr:
      "الـ public IPs مش بتُستخدم لترافيك الـ peering الخاص؛ والـ NACL بأرقام مش SG refs؛ والـ IAM ARNs مش تحكّم شبكي.",
    services: ["Security Group", "VPC Peering"],
    difficulty: "medium",
  },
  {
    id: "sec-108",
    domain: "security",
    type: "single",
    question:
      "A company wants to expose its own application running in its VPC to other AWS accounts privately, without VPC peering or going over the internet. Which service enables this provider model?",
    options: [
      "AWS PrivateLink with a VPC endpoint service (powered by an NLB)",
      "A public Application Load Balancer",
      "VPC peering to every consumer",
      "An internet gateway",
    ],
    correct: [0],
    explanationEn:
      "AWS PrivateLink lets you publish an endpoint service (fronted by an NLB) that consumers reach via interface endpoints — private, one-to-many, without peering or internet exposure.",
    explanationAr:
      "الـ AWS PrivateLink بيخلّيك تنشر endpoint service (ورا NLB) المستهلكين يوصلوله عبر interface endpoints — خاص، one-to-many، من غير peering أو إنترنت.",
    whyWrongEn:
      "A public ALB exposes it to the internet; peering to every consumer doesn't scale; an internet gateway is the opposite of private.",
    whyWrongAr:
      "الـ ALB العام بيكشفه للإنترنت؛ والـ peering لكل مستهلك مبيوسّعش؛ والـ internet gateway عكس الخصوصية.",
    services: ["PrivateLink", "NLB", "VPC Endpoint Service"],
    difficulty: "hard",
  },
  {
    id: "sec-109",
    domain: "security",
    type: "single",
    question:
      "A security team wants to automatically remediate findings (e.g., a security group opened to 0.0.0.0/0 on port 22) the moment they're detected. Which combination achieves automated response?",
    options: [
      "GuardDuty/Config findings → EventBridge rule → Lambda or SSM Automation remediation",
      "Manual review of CloudTrail logs once a week",
      "A NACL that blocks all traffic",
      "Trusted Advisor email only",
    ],
    correct: [0],
    explanationEn:
      "Findings from GuardDuty or AWS Config can trigger an EventBridge rule that invokes a Lambda or SSM Automation document to remediate automatically (event-driven security).",
    explanationAr:
      "نتائج GuardDuty أو Config تقدر تشغّل EventBridge rule بتنادي Lambda أو SSM Automation للمعالجة تلقائيًا (أمان event-driven).",
    whyWrongEn:
      "Weekly manual review isn't automatic; a blanket NACL breaks connectivity; a Trusted Advisor email alone doesn't remediate.",
    whyWrongAr:
      "المراجعة الأسبوعية اليدوية مش تلقائية؛ والـ NACL الشامل بيقطع الاتصال؛ وإيميل Trusted Advisor لوحده مبيعالجش.",
    services: ["GuardDuty", "EventBridge", "Lambda", "Config"],
    difficulty: "medium",
  },
  {
    id: "sec-110",
    domain: "security",
    type: "single",
    question:
      "A company needs to grant access based on resource and principal tags (e.g., a user tagged Project=Blue can access resources tagged Project=Blue), scaling without writing a policy per project. Which approach is this?",
    options: [
      "Attribute-Based Access Control (ABAC) using tags in IAM conditions",
      "One IAM policy per project (RBAC)",
      "Bucket ACLs",
      "Root user access",
    ],
    correct: [0],
    explanationEn:
      "ABAC uses tags (e.g., aws:PrincipalTag / aws:ResourceTag in conditions) so one policy scales across many projects without per-project policies.",
    explanationAr:
      "الـ ABAC بيستخدم الـ tags (زي aws:PrincipalTag / aws:ResourceTag في الشروط) فـ policy واحدة بتتوسّع عبر مشاريع كتير من غير policy لكل مشروع.",
    whyWrongEn:
      "Per-project RBAC policies don't scale; bucket ACLs are legacy and coarse; using root is never acceptable.",
    whyWrongAr:
      "policies الـ RBAC لكل مشروع مبتوسّعش؛ وACLs الـ bucket قديمة وخشنة؛ واستخدام الـ root مرفوض.",
    services: ["IAM", "ABAC", "Tags"],
    difficulty: "hard",
  },
  {
    id: "sec-111",
    domain: "security",
    type: "single",
    question:
      "An application must encrypt data and be able to decrypt it in multiple AWS Regions for a multi-Region active-active design, using the same key material. Which KMS feature fits?",
    options: [
      "KMS multi-Region keys",
      "A single-Region CMK shared by ARN",
      "SSE-S3",
      "CloudHSM single instance",
    ],
    correct: [0],
    explanationEn:
      "KMS multi-Region keys are replicas of the same key material across Regions, so ciphertext encrypted in one Region can be decrypted in another — ideal for multi-Region apps.",
    explanationAr:
      "الـ KMS multi-Region keys نسخ من نفس مادة المفتاح عبر الـ regions، فالـ ciphertext المشفّر في region يتفك في تانية — مثالي للتطبيقات multi-Region.",
    whyWrongEn:
      "A single-Region CMK can't decrypt outside its Region; SSE-S3 isn't a portable customer key; one CloudHSM instance isn't multi-Region key replication.",
    whyWrongAr:
      "الـ CMK لـ region واحدة مبيفكّش برّه الـ region؛ والـ SSE-S3 مش مفتاح عميل قابل للنقل؛ وCloudHSM واحد مش تناسخ مفاتيح multi-Region.",
    services: ["KMS", "Multi-Region Keys"],
    difficulty: "hard",
  },
  {
    id: "sec-112",
    domain: "security",
    type: "single",
    question:
      "A company must log all read/write API activity across every account in its AWS Organization to a central, tamper-resistant S3 bucket for audit. What should they configure?",
    options: [
      "An organization trail in AWS CloudTrail delivering to a central S3 bucket",
      "A separate manual CloudTrail per account with no central store",
      "VPC Flow Logs",
      "CloudWatch metrics only",
    ],
    correct: [0],
    explanationEn:
      "An organization trail records events from all accounts and delivers them to one central S3 bucket (lockable with Object Lock) — the standard audit setup.",
    explanationAr:
      "الـ organization trail بيسجّل أحداث كل الحسابات ويوصّلها لـ S3 bucket مركزي (تقدر تقفله بـ Object Lock) — إعداد التدقيق القياسي.",
    whyWrongEn:
      "Per-account trails without central storage are hard to audit; Flow Logs capture network metadata not API calls; CloudWatch metrics aren't an API audit log.",
    whyWrongAr:
      "trails لكل حساب من غير مخزن مركزي صعب تدقيقها؛ والـ Flow Logs بتسجّل شبكة مش API؛ ومقاييس CloudWatch مش سجل تدقيق API.",
    services: ["CloudTrail", "Organizations", "S3"],
    difficulty: "medium",
  },
  {
    id: "sec-113",
    domain: "security",
    type: "single",
    question:
      "A company wants to integrate its on-premises Microsoft Active Directory with AWS so that workloads and users can authenticate against a managed AD in AWS. Which service should they use?",
    options: [
      "AWS Directory Service (AWS Managed Microsoft AD)",
      "Amazon Cognito User Pools",
      "Amazon RDS for SQL Server",
      "AWS Secrets Manager",
    ],
    correct: [0],
    explanationEn:
      "AWS Directory Service (AWS Managed Microsoft AD) provides a managed Active Directory in AWS that can trust on-prem AD — ideal for Windows workloads and domain-joined resources.",
    explanationAr:
      "الـ AWS Directory Service (Managed Microsoft AD) بيدّي Active Directory مُدار في AWS يقدر يثق بالـ on-prem AD — مثالي لأحمال Windows والموارد المنضمّة للدومين.",
    whyWrongEn:
      "Cognito is for app/web identity, not domain-join; RDS SQL Server is a database; Secrets Manager stores secrets, not a directory.",
    whyWrongAr:
      "الـ Cognito لهوية التطبيقات مش انضمام دومين؛ والـ RDS SQL Server قاعدة بيانات؛ والـ Secrets Manager بيخزّن أسرار مش directory.",
    services: ["Directory Service", "Active Directory"],
    difficulty: "medium",
  },
  {
    id: "sec-114",
    domain: "security",
    type: "single",
    question:
      "An auditor requires that a specific S3 bucket policy never allow public access, even if someone misconfigures it later. What is the strongest preventative control?",
    options: [
      "Enable S3 Block Public Access at the account and bucket level",
      "Rely on remembering not to make it public",
      "Add a CloudWatch alarm only",
      "Use S3 Versioning",
    ],
    correct: [0],
    explanationEn:
      "S3 Block Public Access (account + bucket) overrides any ACL/policy that would grant public access — a strong preventative guardrail.",
    explanationAr:
      "الـ S3 Block Public Access (على الحساب + الـ bucket) بيتغلّب على أي ACL/policy بتدّي وصول عام — guardrail وقائي قوي.",
    whyWrongEn:
      "Relying on memory isn't a control; an alarm only detects after the fact; Versioning protects against deletes, not public exposure.",
    whyWrongAr:
      "الاعتماد على الذاكرة مش تحكّم؛ والـ alarm بيكتشف بعد الحدوث؛ والـ Versioning بيحمي من الحذف مش من الكشف العام.",
    services: ["S3", "Block Public Access"],
    difficulty: "easy",
  },
  {
    id: "sec-115",
    domain: "security",
    type: "single",
    question:
      "A company must ensure data is encrypted in transit between clients and an Application Load Balancer, terminating TLS at the ALB with a managed certificate. What should they configure?",
    options: [
      "An HTTPS listener on the ALB using an ACM certificate",
      "An HTTP listener only",
      "Client-side encryption of payloads",
      "A NACL allowing port 80",
    ],
    correct: [0],
    explanationEn:
      "Configure an HTTPS (443) listener on the ALB with an ACM certificate to terminate TLS — encryption in transit with managed, auto-renewing certificates.",
    explanationAr:
      "اعمل HTTPS listener (443) على الـ ALB بشهادة ACM لإنهاء الـ TLS — تشفير أثناء النقل بشهادات مُدارة بتتجدّد تلقائيًا.",
    whyWrongEn:
      "An HTTP listener is unencrypted; client-side payload encryption doesn't secure the transport; a NACL on port 80 is plaintext.",
    whyWrongAr:
      "الـ HTTP listener غير مشفّر؛ وتشفير الـ payload في العميل مبيأمّنش النقل؛ والـ NACL على بورت 80 plaintext.",
    services: ["ALB", "ACM", "TLS"],
    difficulty: "easy",
  },
  {
    id: "sec-116",
    domain: "security",
    type: "single",
    question:
      "A Lambda function needs to call AWS APIs. Following best practice, how should it obtain permissions?",
    options: [
      "Attach a Lambda execution role (IAM role) with least-privilege permissions",
      "Embed an IAM user's access keys in the function code",
      "Use the account root credentials",
      "Store keys in a public S3 bucket",
    ],
    correct: [0],
    explanationEn:
      "A Lambda execution role grants temporary credentials automatically — the secure, key-less way to authorize a function with least privilege.",
    explanationAr:
      "الـ Lambda execution role بيدّي credentials مؤقتة تلقائيًا — الطريقة الآمنة بدون مفاتيح لإعطاء صلاحيات بأقل قدر.",
    whyWrongEn:
      "Embedding keys, using root, or storing keys publicly are all serious security anti-patterns.",
    whyWrongAr:
      "حقن المفاتيح أو استخدام الـ root أو تخزين المفاتيح بشكل عام كلها anti-patterns أمنية خطيرة.",
    services: ["Lambda", "IAM Role"],
    difficulty: "easy",
  },
  {
    id: "sec-117",
    domain: "security",
    type: "single",
    question:
      "A company wants to centrally restrict which AWS Regions and services member accounts can use, and prevent disabling of CloudTrail, across the whole organization. Which feature enforces these guardrails?",
    options: [
      "Service Control Policies (SCPs) in AWS Organizations",
      "IAM permission boundaries on each user",
      "Security groups",
      "KMS key policies",
    ],
    correct: [0],
    explanationEn:
      "SCPs centrally cap what member accounts can do (e.g., deny Regions, deny stopping CloudTrail) across the organization — guardrails no in-account admin can bypass.",
    explanationAr:
      "الـ SCPs بتحدّد مركزيًا اللي الحسابات تقدر تعمله (زي منع regions، منع إيقاف CloudTrail) عبر المؤسسة — guardrails مفيش admin جوّه الحساب يتخطاها.",
    whyWrongEn:
      "Permission boundaries are per-identity (not org-wide guardrails); security groups and KMS policies don't restrict Regions/services org-wide.",
    whyWrongAr:
      "الـ permission boundaries لكل هوية مش guardrails للمؤسسة؛ والـ SG و KMS policies مبيقيّدوش regions/خدمات على مستوى المؤسسة.",
    services: ["Organizations", "SCP"],
    difficulty: "medium",
  },
  {
    id: "sec-118",
    domain: "security",
    type: "single",
    question:
      "A company stores database credentials in AWS Secrets Manager and wants applications to retrieve them securely while limiting which apps can read which secret. How is access controlled?",
    options: [
      "IAM policies / resource policies scoping access to specific secret ARNs",
      "Making the secret public",
      "Hardcoding the secret in each app",
      "A security group on the secret",
    ],
    correct: [0],
    explanationEn:
      "Access to a secret is controlled by IAM identity policies and Secrets Manager resource policies scoped to specific secret ARNs — least privilege per app.",
    explanationAr:
      "الوصول للـ secret بيتحكّم فيه بـ IAM policies و resource policies محدّدة بـ ARNs لأسرار معيّنة — least privilege لكل تطبيق.",
    whyWrongEn:
      "Secrets are never public; hardcoding defeats the purpose; security groups are network controls, not secret authorization.",
    whyWrongAr:
      "الأسرار مش بتبقى عامة؛ والـ hardcoding بيلغي الهدف؛ والـ SG تحكّم شبكي مش authorization للأسرار.",
    services: ["Secrets Manager", "IAM"],
    difficulty: "medium",
  },
  {
    id: "sec-119",
    domain: "security",
    type: "single",
    question:
      "A company needs to protect a public REST API on API Gateway from being overwhelmed and from common web exploits. Which two-part control set is most appropriate?",
    options: [
      "API Gateway throttling/usage plans + AWS WAF web ACL",
      "A larger EC2 instance",
      "A NAT gateway",
      "S3 Block Public Access",
    ],
    correct: [0],
    explanationEn:
      "API Gateway throttling and usage plans cap request rates, while an AWS WAF web ACL blocks common exploits (SQLi/XSS) and bad bots.",
    explanationAr:
      "الـ throttling و usage plans في API Gateway بيحدّوا معدّل الطلبات، والـ WAF web ACL بيمنع الاستغلالات الشائعة (SQLi/XSS) والـ bots.",
    whyWrongEn:
      "A bigger instance doesn't apply to serverless API Gateway; NAT and S3 Block Public Access are unrelated to API protection.",
    whyWrongAr:
      "instance أكبر مالوش علاقة بـ API Gateway الـ serverless؛ والـ NAT و S3 Block Public Access مالهمش علاقة بحماية الـ API.",
    services: ["API Gateway", "WAF", "Throttling"],
    difficulty: "medium",
  },
  {
    id: "sec-120",
    domain: "security",
    type: "single",
    question:
      "A compliance rule requires issuing private X.509 certificates for internal services within the organization. Which AWS service should be used?",
    options: [
      "AWS Certificate Manager Private CA (AWS Private CA)",
      "ACM public certificates",
      "AWS KMS",
      "Amazon Cognito",
    ],
    correct: [0],
    explanationEn:
      "AWS Private CA issues and manages private certificates for internal resources — the right tool when certificates must be private, not publicly trusted.",
    explanationAr:
      "الـ AWS Private CA بيصدر ويدير شهادات خاصة للموارد الداخلية — الأداة الصح لما الشهادات لازم تكون خاصة مش موثوقة عامة.",
    whyWrongEn:
      "ACM public certs are for internet-facing trust; KMS manages keys not X.509 certs; Cognito is identity, not a CA.",
    whyWrongAr:
      "شهادات ACM العامة للثقة على الإنترنت؛ والـ KMS بيدير مفاتيح مش شهادات X.509؛ والـ Cognito هوية مش CA.",
    services: ["ACM Private CA", "Certificates"],
    difficulty: "medium",
  },
  {
    id: "sec-121",
    domain: "security",
    type: "single",
    question:
      "A team needs to restrict an IAM role so it can only be assumed by a specific external SaaS account, and only when that account presents a shared external ID, to prevent the confused-deputy problem. Where is this enforced?",
    options: [
      "In the role's trust policy using sts:ExternalId condition",
      "In a security group rule",
      "In a NACL",
      "In the S3 bucket policy",
    ],
    correct: [0],
    explanationEn:
      "The role trust policy with an sts:ExternalId condition ensures only the intended third party (presenting the agreed external ID) can assume the role — the standard confused-deputy mitigation.",
    explanationAr:
      "الـ trust policy بشرط sts:ExternalId بيضمن إن الطرف التالت المقصود بس (اللي معاه الـ external ID المتفق عليه) يقدر ياخد الـ role — الحل القياسي لمشكلة الـ confused deputy.",
    whyWrongEn:
      "Security groups and NACLs are network controls; an S3 bucket policy doesn't govern role assumption.",
    whyWrongAr:
      "الـ SG و NACL تحكّم شبكي؛ والـ S3 bucket policy مبتتحكّمش في أخذ الـ role.",
    services: ["IAM", "STS", "AssumeRole"],
    difficulty: "hard",
  },
  {
    id: "sec-122",
    domain: "security",
    type: "single",
    question:
      "A company wants to detect and be alerted when an EC2 instance communicates with a known cryptocurrency-mining or command-and-control domain. Which service detects this with no agents?",
    options: [
      "Amazon GuardDuty (analyzes DNS and VPC Flow Logs)",
      "Amazon Macie",
      "AWS Config",
      "AWS Budgets",
    ],
    correct: [0],
    explanationEn:
      "GuardDuty inspects DNS queries, VPC Flow Logs, and CloudTrail to detect malicious communication (e.g., crypto-mining, C2) using threat intelligence and ML — agentless.",
    explanationAr:
      "الـ GuardDuty بيفحص استعلامات DNS و VPC Flow Logs و CloudTrail لكشف الاتصالات الخبيثة (زي التعدين و C2) باستخدام threat intelligence و ML — بدون agents.",
    whyWrongEn:
      "Macie classifies S3 data; Config tracks configuration; Budgets is for cost — none detect malicious network behavior.",
    whyWrongAr:
      "الـ Macie بيصنّف داتا S3؛ والـ Config بيتتبّع الإعدادات؛ والـ Budgets للتكلفة — محدش فيهم بيكشف سلوك شبكي خبيث.",
    services: ["GuardDuty"],
    difficulty: "medium",
  },
  {
    id: "sec-123",
    domain: "security",
    type: "single",
    question:
      "A company must guarantee that audit log files written to an S3 bucket cannot be altered or deleted by anyone for 1 year, satisfying WORM compliance. Which configuration meets this?",
    options: [
      "S3 Object Lock in Compliance mode with a 1-year retention",
      "S3 Versioning alone",
      "A bucket policy that denies deletes",
      "Glacier lifecycle transition",
    ],
    correct: [0],
    explanationEn:
      "Object Lock in Compliance mode enforces WORM so no one (including root) can delete or overwrite objects until the retention period ends.",
    explanationAr:
      "الـ Object Lock في وضع Compliance بيفرض WORM فمحدش (حتى الـ root) يقدر يحذف أو يكتب فوق الأوبجكتس لحد ما تنتهي مدة الاحتفاظ.",
    whyWrongEn:
      "Versioning alone can be overridden; a bucket policy can be edited; lifecycle transitions don't make data immutable.",
    whyWrongAr:
      "الـ Versioning لوحده ممكن يتجاوز؛ والـ bucket policy ممكن تتعدّل؛ والـ lifecycle مبيخليش الداتا immutable.",
    services: ["S3", "Object Lock", "Compliance"],
    difficulty: "medium",
  },
  {
    id: "sec-124",
    domain: "security",
    type: "single",
    question:
      "A workload in a private subnet must call the Amazon DynamoDB API without traversing the internet and at no extra data-processing cost. What should be configured?",
    options: [
      "A Gateway VPC endpoint for DynamoDB",
      "An Interface endpoint with hourly + per-GB cost",
      "A NAT gateway",
      "An internet gateway",
    ],
    correct: [0],
    explanationEn:
      "DynamoDB (like S3) supports a free Gateway VPC endpoint that adds a route-table entry for private access with no data-processing charges.",
    explanationAr:
      "الـ DynamoDB (زي S3) بيدعم Gateway VPC endpoint مجاني بيضيف entry في الـ route table للوصول الخاص بدون رسوم معالجة بيانات.",
    whyWrongEn:
      "An interface endpoint works but costs per hour + per GB; NAT adds data charges and uses the internet edge; an internet gateway is public.",
    whyWrongAr:
      "الـ interface endpoint بيشتغل لكن بتكلفة بالساعة + بالـ GB؛ والـ NAT بيضيف رسوم وبيمرّ على حافة الإنترنت؛ والـ internet gateway عام.",
    services: ["VPC Endpoint", "Gateway Endpoint", "DynamoDB"],
    difficulty: "medium",
  },
  {
    id: "sec-125",
    domain: "security",
    type: "multi",
    question:
      "A company wants defense-in-depth for a public web tier. Which TWO measures align with this principle? (Select TWO.)",
    options: [
      "Put AWS WAF on CloudFront/ALB to filter Layer 7 attacks.",
      "Use security groups to allow only required ports to the instances.",
      "Give every instance a public IP and open all ports for flexibility.",
      "Disable encryption to simplify troubleshooting.",
      "Share one IAM admin user among the team.",
    ],
    correct: [0, 1],
    explanationEn:
      "Defense-in-depth layers controls: WAF filters application-layer attacks while tightly scoped security groups limit network exposure. Together they reduce risk at multiple layers.",
    explanationAr:
      "الـ defense-in-depth بيرصّ طبقات حماية: الـ WAF بيفلتر هجمات التطبيق والـ security groups المحكومة بتقلّل التعرّض الشبكي. مع بعض بيقلّلوا الخطر في أكتر من طبقة.",
    whyWrongEn:
      "Public IPs with all ports open, disabling encryption, and sharing an admin user all increase attack surface — the opposite of defense-in-depth.",
    whyWrongAr:
      "الـ public IPs بكل البورتات مفتوحة، وإلغاء التشفير، ومشاركة admin user كلها بتزوّد سطح الهجوم — عكس الـ defense-in-depth.",
    services: ["WAF", "Security Group", "Defense in Depth"],
    difficulty: "medium",
  },
  {
    id: "sec-126",
    domain: "security",
    type: "single",
    question:
      "A company needs to filter and control outbound (egress) traffic from its VPC to only approved domains, with stateful inspection. Which service is purpose-built for this?",
    options: [
      "AWS Network Firewall with domain allow-lists",
      "AWS WAF",
      "A security group outbound rule listing domains",
      "Amazon Inspector",
    ],
    correct: [0],
    explanationEn:
      "AWS Network Firewall performs stateful inspection and supports domain-name filtering for egress traffic at the VPC level.",
    explanationAr:
      "الـ AWS Network Firewall بيعمل stateful inspection وبيدعم فلترة بالـ domain لترافيك الـ egress على مستوى الـ VPC.",
    whyWrongEn:
      "WAF protects inbound L7 web apps; security groups can't match domain names (only IPs/ports); Inspector scans for vulnerabilities.",
    whyWrongAr:
      "الـ WAF بيحمي تطبيقات L7 inbound؛ والـ SG مبتعرفش domains (IP/بورت بس)؛ والـ Inspector بيفحص الثغرات.",
    services: ["Network Firewall", "VPC"],
    difficulty: "medium",
  },
  {
    id: "sec-127",
    domain: "security",
    type: "single",
    question:
      "A company wants temporary AWS credentials for a CI/CD pipeline running in GitHub Actions, without storing long-lived AWS keys as secrets. Which approach is recommended?",
    options: [
      "OIDC federation: configure an IAM identity provider and have the pipeline assume a role via OIDC",
      "Create an IAM user and paste its access keys into GitHub secrets",
      "Use the root account access keys",
      "Disable IAM and allow anonymous access",
    ],
    correct: [0],
    explanationEn:
      "Configuring GitHub's OIDC provider in IAM lets the pipeline assume a role for short-lived credentials — no long-lived keys stored anywhere.",
    explanationAr:
      "إعداد OIDC provider بتاع GitHub في IAM بيخلّي الـ pipeline تاخد role بـ credentials قصيرة العمر — من غير مفاتيح دائمة متخزّنة.",
    whyWrongEn:
      "Storing static access keys (especially root) in CI secrets is a long-lived-credential risk and an anti-pattern; anonymous access is never acceptable.",
    whyWrongAr:
      "تخزين access keys ثابتة (خصوصًا الـ root) في أسرار الـ CI خطر credentials دائمة وanti-pattern؛ والوصول المجهول مرفوض.",
    services: ["IAM", "OIDC", "STS"],
    difficulty: "hard",
  },
  {
    id: "sec-128",
    domain: "security",
    type: "single",
    question:
      "A solutions architect needs the simplest way to ensure all traffic to a CloudFront-fronted site uses HTTPS, redirecting any HTTP requests. What should be set?",
    options: [
      "CloudFront Viewer Protocol Policy = Redirect HTTP to HTTPS",
      "Block port 443 at the origin",
      "A NACL denying port 80 on the edge",
      "Disable the ACM certificate",
    ],
    correct: [0],
    explanationEn:
      "Setting the CloudFront Viewer Protocol Policy to 'Redirect HTTP to HTTPS' enforces encrypted connections for all viewers.",
    explanationAr:
      "ضبط الـ Viewer Protocol Policy في CloudFront على 'Redirect HTTP to HTTPS' بيفرض اتصالات مشفّرة لكل الزوّار.",
    whyWrongEn:
      "Blocking 443 would break HTTPS; you can't put NACLs on the CloudFront edge; disabling the certificate removes HTTPS entirely.",
    whyWrongAr:
      "قفل 443 هيكسر HTTPS؛ ومتقدرش تحط NACL على حافة CloudFront؛ وتعطيل الشهادة بيشيل HTTPS خالص.",
    services: ["CloudFront", "HTTPS", "TLS"],
    difficulty: "easy",
  },
];
