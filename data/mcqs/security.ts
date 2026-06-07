import type { MCQ } from "../types";

export const securityMcqs: MCQ[] = [
  {
    id: "sec-001",
    domain: "security",
    type: "single",
    question:
      "A company runs an application on Amazon EC2 instances that need to read objects from an Amazon S3 bucket. The security team requires that no long-term credentials be stored on the instances. What should a solutions architect do?",
    options: [
      "Create an IAM user, generate access keys, and store them in a file on each EC2 instance.",
      "Attach an IAM role with the required S3 permissions to the EC2 instances through an instance profile.",
      "Embed the AWS account root user credentials in the application configuration.",
      "Store access keys in environment variables on each instance.",
    ],
    correct: [1],
    explanationEn:
      "An IAM role attached via an instance profile provides temporary, automatically rotated credentials (through STS) so no long-term keys are stored on the instance. Roles are the correct way to grant AWS permissions to EC2/Lambda.",
    explanationAr:
      "الـ IAM Role المربوط بالـ instance profile بيدّي credentials مؤقتة بتتجدّد تلقائيًا عن طريق STS، فمفيش access keys دائمة بتتخزّن على الـ instance. ده الأسلوب الصح لإعطاء صلاحيات لـ EC2/Lambda.",
    services: ["IAM", "IAM Role", "STS", "EC2", "S3"],
    difficulty: "easy",
  },
  {
    id: "sec-002",
    domain: "security",
    type: "single",
    question:
      "An application in Account A needs temporary access to an Amazon DynamoDB table in Account B. The company wants to follow AWS best practices for cross-account access. Which approach should a solutions architect recommend?",
    options: [
      "Create an IAM user in Account B and share its access keys with Account A.",
      "Make the DynamoDB table public and restrict it with a security group.",
      "Create an IAM role in Account B with a trust policy for Account A, and have the application call sts:AssumeRole.",
      "Enable DynamoDB cross-Region replication between the two accounts.",
    ],
    correct: [2],
    explanationEn:
      "Cross-account access should use an IAM role in the resource account (B) with a trust policy allowing the other account (A) to assume it via sts:AssumeRole, yielding temporary credentials. Sharing access keys violates best practices.",
    explanationAr:
      "الوصول cross-account المفروض يتعمل بـ IAM Role في حساب المورد (B) وفيه trust policy بتسمح لحساب A إنه يعملها AssumeRole ويحصل على credentials مؤقتة. مشاركة الـ access keys مرفوضة.",
    services: ["IAM Role", "STS", "AssumeRole", "Cross-Account", "DynamoDB"],
    difficulty: "medium",
  },
  {
    id: "sec-003",
    domain: "security",
    type: "single",
    question:
      "A company uses AWS Organizations with multiple accounts. The security team must guarantee that no account in a specific organizational unit (OU) can ever use any AWS Region other than eu-west-1, regardless of the IAM permissions granted inside those accounts. What should the company use?",
    options: [
      "An IAM permission boundary applied to every user in the accounts.",
      "A Service Control Policy (SCP) attached to the OU that denies all actions outside eu-west-1.",
      "A resource-based policy on each service.",
      "A security group rule restricting the Region.",
    ],
    correct: [1],
    explanationEn:
      "An SCP sets the maximum permissions for accounts in an OU and an explicit Deny there cannot be overridden by any IAM policy inside the account. SCPs restrict; they don't grant. This is the central, organization-wide guardrail.",
    explanationAr:
      "الـ SCP بيحدّد السقف الأقصى للصلاحيات لكل الحسابات في الـ OU، والـ Explicit Deny فيه مفيش أي IAM policy جوّه الحساب تقدر تتغلّب عليه. الـ SCP بيقيّد مش بيمنح — أداة guardrail مركزية.",
    services: ["AWS Organizations", "SCP", "IAM"],
    difficulty: "medium",
  },
  {
    id: "sec-004",
    domain: "security",
    type: "single",
    question:
      "A developer has an IAM policy allowing many S3 actions. The security team wants to cap the maximum permissions this developer can ever have, even if additional policies are attached later, without granting any new access. Which feature meets this requirement?",
    options: [
      "An IAM permission boundary attached to the developer's IAM entity.",
      "An S3 bucket ACL.",
      "An additional AWS managed policy granting AdministratorAccess.",
      "An inline policy with full S3 access.",
    ],
    correct: [0],
    explanationEn:
      "A permission boundary defines the maximum permissions an IAM user/role can have. Effective permissions are the intersection of the identity policy and the boundary. It limits, never grants.",
    explanationAr:
      "الـ Permission Boundary بيحدّد أقصى صلاحيات ممكن الـ user/role يوصلها. الصلاحية الفعلية = تقاطع الـ identity policy مع الـ boundary. بيحدّ الأعلى، ومش بيمنح صلاحية جديدة.",
    services: ["IAM", "Permission Boundary"],
    difficulty: "medium",
  },
  {
    id: "sec-005",
    domain: "security",
    type: "single",
    question:
      "A mobile application needs to let users sign up and sign in, and then call AWS services on their behalf using temporary credentials. Which combination of Amazon Cognito features is most appropriate?",
    options: [
      "Use Cognito User Pools for nothing and store passwords in DynamoDB.",
      "Use Cognito User Pools for sign-up/sign-in (authentication) and Cognito Identity Pools to vend temporary AWS credentials (authorization).",
      "Use only Identity Pools for both authentication and password storage.",
      "Use IAM users, one per mobile user.",
    ],
    correct: [1],
    explanationEn:
      "User Pools handle authentication (sign-up/sign-in, a user directory, JWT tokens). Identity Pools handle authorization by exchanging a token for temporary AWS credentials (via STS) so the app can call AWS services.",
    explanationAr:
      "الـ User Pools للـ authentication (تسجيل دخول/اشتراك + directory + JWT). والـ Identity Pools للـ authorization — بتبدّل التوكن بـ AWS credentials مؤقتة عبر STS عشان التطبيق يكلّم خدمات AWS.",
    services: ["Cognito", "User Pools", "Identity Pools", "STS"],
    difficulty: "medium",
  },
  {
    id: "sec-006",
    domain: "security",
    type: "single",
    question:
      "A company wants employees to sign in to the AWS Management Console using their existing corporate Active Directory credentials, with a single sign-on experience across all AWS accounts in the organization. What is the most appropriate solution?",
    options: [
      "Create individual IAM users for every employee in each account.",
      "Use AWS IAM Identity Center (successor to AWS SSO) integrated with the corporate identity provider.",
      "Share one IAM user across the whole team.",
      "Use Amazon Cognito User Pools for console access.",
    ],
    correct: [1],
    explanationEn:
      "IAM Identity Center provides centralized single sign-on across all Organization accounts and integrates with an external IdP / Active Directory. It is the recommended way to manage workforce access to many accounts.",
    explanationAr:
      "الـ IAM Identity Center بيوفّر single sign-on مركزي لكل حسابات الـ Organization وبيتكامل مع IdP خارجي أو Active Directory. ده الأنسب لإدارة وصول الموظفين على حسابات كتير.",
    services: ["IAM Identity Center", "AWS SSO", "Active Directory", "Federation"],
    difficulty: "medium",
  },
  {
    id: "sec-007",
    domain: "security",
    type: "single",
    question:
      "A company must encrypt large files stored on Amazon EBS and S3 using a centrally managed key, with the ability to audit every use of the key in AWS CloudTrail and automatically rotate it. Which service should they use?",
    options: [
      "AWS Secrets Manager",
      "AWS Certificate Manager (ACM)",
      "AWS Key Management Service (KMS) with a customer managed key",
      "AWS Systems Manager Parameter Store SecureString only",
    ],
    correct: [2],
    explanationEn:
      "AWS KMS is the central service for managing encryption keys (CMKs). It logs every key usage in CloudTrail, supports automatic annual rotation for customer managed keys, and integrates with EBS, S3, and most AWS services.",
    explanationAr:
      "الـ AWS KMS هو الخدمة المركزية لإدارة مفاتيح التشفير (CMK). بيسجّل كل استخدام للمفتاح في CloudTrail، بيدعم rotation تلقائي سنوي للـ customer managed keys، وبيتكامل مع EBS و S3 ومعظم الخدمات.",
    services: ["KMS", "CMK", "CloudTrail", "EBS", "S3"],
    difficulty: "easy",
  },
  {
    id: "sec-008",
    domain: "security",
    type: "single",
    question:
      "A regulated company must use a dedicated, single-tenant hardware security module that they fully control, meeting FIPS 140-2 Level 3, to manage their own encryption keys. Which AWS service fits this requirement?",
    options: [
      "AWS KMS with an AWS managed key",
      "AWS CloudHSM",
      "AWS Secrets Manager",
      "Amazon Macie",
    ],
    correct: [1],
    explanationEn:
      "AWS CloudHSM provides single-tenant, dedicated HSMs that you fully control (FIPS 140-2 Level 3). Choose it when strict compliance requires single-tenant hardware or you must manage keys outside of the multi-tenant KMS.",
    explanationAr:
      "الـ CloudHSM بيدّي جهاز HSM مخصّص single-tenant إنت اللي بتتحكّم فيه بالكامل (FIPS 140-2 Level 3). اختاره لما الـ compliance الصارم يفرض single-tenant أو تحكّم كامل في المفاتيح بعيدًا عن KMS الـ multi-tenant.",
    services: ["CloudHSM", "KMS"],
    difficulty: "medium",
  },
  {
    id: "sec-009",
    domain: "security",
    type: "single",
    question:
      "A company stores objects in Amazon S3 and wants the simplest possible at-rest encryption with no key management overhead and no extra cost. Which option should they choose?",
    options: [
      "SSE-C (customer-provided keys)",
      "Client-side encryption with a custom KMS workflow",
      "SSE-S3 (Amazon S3 managed keys, AES-256)",
      "No encryption, rely on bucket policy",
    ],
    correct: [2],
    explanationEn:
      "SSE-S3 uses AWS-managed AES-256 keys, is enabled by default on new buckets, requires zero key management, and has no additional cost. SSE-KMS adds auditing/rotation control; SSE-C means you manage and supply the key on every request.",
    explanationAr:
      "الـ SSE-S3 بيستخدم مفاتيح AWS بالكامل (AES-256)، مفعّل افتراضيًا على الـ buckets الجديدة، بدون أي إدارة مفاتيح وبدون تكلفة إضافية. الـ SSE-KMS بيزوّد التدقيق/الـ rotation، والـ SSE-C يعني إنت اللي بتدير وتبعت المفتاح في كل request.",
    services: ["S3", "SSE-S3", "Encryption"],
    difficulty: "easy",
  },
  {
    id: "sec-010",
    domain: "security",
    type: "single",
    question:
      "A security policy requires that all data stored in Amazon S3 be encrypted at rest, that every decryption be logged for audit, and that the encryption key be rotated automatically. Which S3 encryption option best meets these requirements?",
    options: [
      "SSE-S3",
      "SSE-KMS using a customer managed key",
      "SSE-C",
      "No server-side encryption; use HTTPS only",
    ],
    correct: [1],
    explanationEn:
      "SSE-KMS with a customer managed key logs each key use in CloudTrail (audit trail) and supports key rotation. SSE-S3 does not give per-request CloudTrail visibility into key use, and SSE-C requires you to manage keys yourself.",
    explanationAr:
      "الـ SSE-KMS بمفتاح customer managed بيسجّل كل استخدام للمفتاح في CloudTrail (audit) وبيدعم الـ rotation. الـ SSE-S3 مبيدّيش رؤية CloudTrail لكل استخدام للمفتاح، والـ SSE-C لازم تدير المفاتيح بنفسك.",
    services: ["S3", "SSE-KMS", "KMS", "CloudTrail"],
    difficulty: "medium",
  },
  {
    id: "sec-011",
    domain: "security",
    type: "single",
    question:
      "An application stores a database password that must be automatically rotated every 30 days, with built-in integration for Amazon RDS. Which service is purpose-built for this?",
    options: [
      "AWS Systems Manager Parameter Store (Standard tier)",
      "AWS Secrets Manager",
      "Amazon S3 with SSE-KMS",
      "AWS KMS only",
    ],
    correct: [1],
    explanationEn:
      "Secrets Manager is built for secrets like DB passwords and API keys and provides managed automatic rotation with native RDS integration. Parameter Store stores config and secrets but has no built-in rotation (you'd script it with Lambda).",
    explanationAr:
      "الـ Secrets Manager متخصّص في الأسرار زي DB passwords و API keys وبيدّي rotation تلقائي مُدار متكامل مع RDS. الـ Parameter Store بيخزّن config وأسرار بسيطة لكن من غير rotation تلقائي (هتعمله يدوي بـ Lambda).",
    services: ["Secrets Manager", "Parameter Store", "RDS"],
    difficulty: "medium",
  },
  {
    id: "sec-012",
    domain: "security",
    type: "single",
    question:
      "A team needs to store hundreds of plain configuration values and a few simple secrets at the lowest possible cost, with no requirement for automatic rotation. Which service is the best fit?",
    options: [
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "Amazon DynamoDB with encryption",
      "AWS CloudHSM",
    ],
    correct: [1],
    explanationEn:
      "Parameter Store (Standard tier) is free for standard parameters and ideal for configuration plus simple SecureString secrets. Secrets Manager is paid per secret and is justified mainly when you need managed rotation.",
    explanationAr:
      "الـ Parameter Store (Standard) مجاني للـ parameters العادية ومثالي للـ config + أسرار بسيطة (SecureString). الـ Secrets Manager مدفوع لكل secret وبيكون مبرَّر أساسًا لما تحتاج rotation مُدار.",
    services: ["Parameter Store", "Secrets Manager"],
    difficulty: "easy",
  },
  {
    id: "sec-013",
    domain: "security",
    type: "single",
    question:
      "A company hosts a static website on Amazon CloudFront and needs a free, auto-renewing public SSL/TLS certificate. Where must the certificate be requested in AWS Certificate Manager (ACM)?",
    options: [
      "In the same Region as the S3 origin bucket",
      "In the us-east-1 (N. Virginia) Region",
      "In any Region; CloudFront is global so it does not matter",
      "Certificates cannot be used with CloudFront",
    ],
    correct: [1],
    explanationEn:
      "ACM public certificates are free and auto-renew, but a certificate used with CloudFront must be requested in us-east-1. ACM integrates with CloudFront, ALB, and API Gateway, but cannot be installed directly on EC2.",
    explanationAr:
      "شهادات ACM العامة مجانية وبتتجدّد تلقائيًا، لكن الشهادة المستخدمة مع CloudFront لازم تكون في region us-east-1. الـ ACM بيتكامل مع CloudFront و ALB و API Gateway، لكن مش بتتركّب مباشرة على EC2.",
    services: ["ACM", "CloudFront", "SSL/TLS"],
    difficulty: "medium",
  },
  {
    id: "sec-014",
    domain: "security",
    type: "single",
    question:
      "A solutions architect needs to control inbound and outbound traffic at the instance level for an Amazon EC2 web server. Return traffic for an allowed inbound request must be automatically permitted. Which feature provides this behavior?",
    options: [
      "Network ACL (NACL), which is stateless",
      "Security Group, which is stateful",
      "AWS WAF web ACL",
      "Route table entry",
    ],
    correct: [1],
    explanationEn:
      "Security Groups operate at the instance/ENI level and are stateful: if inbound traffic is allowed, the response is automatically allowed out. NACLs are stateless (you must allow both directions) and operate at the subnet level.",
    explanationAr:
      "الـ Security Group بتشتغل على مستوى الـ instance/ENI وهي stateful: لو سمحت بالـ inbound الرد بيطلع تلقائيًا. الـ NACL هي stateless (لازم تسمح للاتجاهين) وبتشتغل على مستوى الـ subnet.",
    services: ["Security Group", "NACL", "VPC", "EC2"],
    difficulty: "easy",
  },
  {
    id: "sec-015",
    domain: "security",
    type: "single",
    question:
      "A company must explicitly block a specific malicious IP address range from reaching all instances in a subnet, even before traffic hits the instances. Which control should they use?",
    options: [
      "A Security Group deny rule",
      "A Network ACL (NACL) deny rule on the subnet",
      "An IAM policy",
      "A KMS key policy",
    ],
    correct: [1],
    explanationEn:
      "NACLs operate at the subnet boundary and, unlike Security Groups, support explicit Deny rules (evaluated by rule number, lowest first). Security Groups can only allow, not deny, so they cannot block a specific IP range.",
    explanationAr:
      "الـ NACL بتشتغل على حدود الـ subnet وبتدعم قواعد Deny صريحة (بتتقيّم بالترتيب من الأصغر رقمًا) عكس الـ Security Group. الـ Security Group بتسمح بس ومبتعملش Deny، فمش هتقدر تمنع IP معيّن.",
    services: ["NACL", "Security Group", "VPC"],
    difficulty: "medium",
  },
  {
    id: "sec-016",
    domain: "security",
    type: "single",
    question:
      "A company wants to record metadata about all IP traffic going to and from the network interfaces in its VPC for connectivity troubleshooting and security analysis. The logs must capture whether traffic was accepted or rejected. What should they enable?",
    options: [
      "AWS CloudTrail",
      "VPC Flow Logs delivered to CloudWatch Logs or S3",
      "Amazon Macie",
      "AWS Config",
    ],
    correct: [1],
    explanationEn:
      "VPC Flow Logs capture metadata (source/destination, ports, ACCEPT/REJECT) for IP traffic at the VPC/subnet/ENI level and deliver it to CloudWatch Logs or S3. They do not capture packet contents.",
    explanationAr:
      "الـ VPC Flow Logs بتسجّل metadata (المصدر/الوجهة، البورتات، ACCEPT/REJECT) للـ IP traffic على مستوى الـ VPC/subnet/ENI وبتوصّلها لـ CloudWatch Logs أو S3. مش بتشوف محتوى الـ packets.",
    services: ["VPC Flow Logs", "CloudWatch Logs", "VPC"],
    difficulty: "easy",
  },
  {
    id: "sec-017",
    domain: "security",
    type: "single",
    question:
      "A public web application running behind an Application Load Balancer is being targeted by SQL injection and cross-site scripting (XSS) attacks. Which service should be used to filter these Layer 7 attacks?",
    options: [
      "AWS Shield Standard",
      "AWS WAF with managed rule groups",
      "Network ACLs",
      "Amazon GuardDuty",
    ],
    correct: [1],
    explanationEn:
      "AWS WAF inspects Layer 7 (HTTP) traffic and can block SQL injection, XSS, bots, and rate-based floods. It attaches to ALB, CloudFront, API Gateway, and AppSync. Shield focuses on DDoS, not application-layer exploits.",
    explanationAr:
      "الـ AWS WAF بيفحص الـ Layer 7 (HTTP) وبيقدر يمنع SQL injection و XSS و bots وهجمات الـ rate. بيتركّب على ALB و CloudFront و API Gateway و AppSync. الـ Shield متخصّص في الـ DDoS مش ثغرات التطبيق.",
    services: ["WAF", "ALB", "Shield"],
    difficulty: "easy",
  },
  {
    id: "sec-018",
    domain: "security",
    type: "single",
    question:
      "A company needs advanced DDoS protection with access to the AWS DDoS Response Team (DRT) and financial protection against scaling costs caused by an attack. Which service provides this?",
    options: [
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "AWS WAF only",
      "Amazon Inspector",
    ],
    correct: [1],
    explanationEn:
      "Shield Advanced adds enhanced DDoS protection, 24/7 access to the DDoS Response Team, and cost protection for usage spikes during an attack. Shield Standard is free and automatic but does not include these features.",
    explanationAr:
      "الـ Shield Advanced بيزوّد حماية DDoS متقدّمة + وصول لفريق الـ DRT + تعويض مالي عن تكاليف التوسّع وقت الهجوم. الـ Shield Standard مجاني وتلقائي لكن من غير المزايا دي.",
    services: ["Shield Advanced", "Shield Standard", "DDoS"],
    difficulty: "medium",
  },
  {
    id: "sec-019",
    domain: "security",
    type: "single",
    question:
      "EC2 instances in a private subnet need to access Amazon S3 without their traffic traversing the public internet, and the company wants to avoid NAT data-processing charges for this traffic. What should the solutions architect configure?",
    options: [
      "An Interface VPC endpoint (PrivateLink) for S3",
      "A Gateway VPC endpoint for S3 with a route table entry",
      "A NAT gateway in a public subnet",
      "An internet gateway attached to the private subnet",
    ],
    correct: [1],
    explanationEn:
      "A Gateway VPC endpoint (for S3 and DynamoDB) adds a route-table entry to reach the service privately and is free, avoiding NAT data charges. Interface endpoints (PrivateLink) use an ENI and are billed per hour + per GB.",
    explanationAr:
      "الـ Gateway VPC Endpoint (لـ S3 و DynamoDB) بيضيف entry في الـ route table عشان توصل للخدمة بشكل خاص وهو مجاني، فبتتجنّب رسوم الـ NAT. الـ Interface Endpoint (PrivateLink) بيستخدم ENI ومدفوع بالساعة + بالـ GB.",
    services: ["VPC Endpoint", "Gateway Endpoint", "S3", "PrivateLink"],
    difficulty: "medium",
  },
  {
    id: "sec-020",
    domain: "security",
    type: "single",
    question:
      "A company wants private connectivity from its VPC to a third-party SaaS service and to many AWS service APIs using a private IP through an elastic network interface. Which option should be used?",
    options: [
      "Gateway VPC endpoint",
      "Interface VPC endpoint (AWS PrivateLink)",
      "Internet gateway",
      "VPC peering to AWS",
    ],
    correct: [1],
    explanationEn:
      "Interface endpoints, powered by AWS PrivateLink, place an ENI with a private IP in your subnet to reach most AWS services and partner/SaaS services privately. Gateway endpoints only support S3 and DynamoDB.",
    explanationAr:
      "الـ Interface Endpoint المبني على PrivateLink بيحط ENI بـ private IP في الـ subnet عشان توصل لمعظم خدمات AWS وخدمات الشركاء/SaaS بشكل خاص. الـ Gateway Endpoint بيدعم S3 و DynamoDB بس.",
    services: ["Interface Endpoint", "PrivateLink", "VPC"],
    difficulty: "medium",
  },
  {
    id: "sec-021",
    domain: "security",
    type: "single",
    question:
      "A security team wants intelligent threat detection that continuously analyzes CloudTrail events, VPC Flow Logs, and DNS logs to surface suspicious activity such as crypto-mining or compromised credentials, without deploying any agents. Which service should they enable?",
    options: [
      "Amazon Inspector",
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Config",
    ],
    correct: [1],
    explanationEn:
      "GuardDuty is the managed, agentless threat-detection service that analyzes CloudTrail, VPC Flow Logs, and DNS logs using ML to detect suspicious behavior. The keyword 'intelligent threat detection' maps to GuardDuty.",
    explanationAr:
      "الـ GuardDuty خدمة كشف تهديدات مُدارة بدون agents، بتحلّل CloudTrail و VPC Flow Logs و DNS logs بالـ ML عشان تكشف نشاط مشبوه. كلمة 'intelligent threat detection' بتروح على GuardDuty على طول.",
    services: ["GuardDuty", "CloudTrail", "VPC Flow Logs"],
    difficulty: "easy",
  },
  {
    id: "sec-022",
    domain: "security",
    type: "single",
    question:
      "A company must continuously scan its Amazon EC2 instances, container images in Amazon ECR, and Lambda functions for software vulnerabilities and CVEs. Which service is purpose-built for this?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Security Hub",
    ],
    correct: [1],
    explanationEn:
      "Amazon Inspector performs automated vulnerability/CVE scanning of EC2, ECR container images, and Lambda functions. 'Vulnerability scanning' is the keyword that maps to Inspector.",
    explanationAr:
      "الـ Amazon Inspector بيعمل فحص vulnerabilities/CVE تلقائي لـ EC2 و ECR container images و Lambda. كلمة 'vulnerability scanning' بتروح على Inspector.",
    services: ["Inspector", "EC2", "ECR", "Lambda"],
    difficulty: "easy",
  },
  {
    id: "sec-023",
    domain: "security",
    type: "single",
    question:
      "A company needs to automatically discover and classify sensitive data such as personally identifiable information (PII) stored in Amazon S3. Which service should they use?",
    options: [
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Config",
      "Amazon Inspector",
    ],
    correct: [0],
    explanationEn:
      "Amazon Macie uses machine learning to discover and classify sensitive data (like PII) in Amazon S3. The keyword 'sensitive data in S3' maps directly to Macie.",
    explanationAr:
      "الـ Amazon Macie بيستخدم ML لاكتشاف وتصنيف البيانات الحساسة (زي PII) جوه S3. كلمة 'sensitive data in S3' بتروح على Macie مباشرة.",
    services: ["Macie", "S3", "PII"],
    difficulty: "easy",
  },
  {
    id: "sec-024",
    domain: "security",
    type: "single",
    question:
      "An auditor asks: 'Which user made this specific API call and when?' The company needs a record of all management and data API activity across the account for governance and audit. Which service provides this?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "VPC Flow Logs",
    ],
    correct: [1],
    explanationEn:
      "CloudTrail records who made which API call and when (account activity / audit). CloudWatch is about resource performance (metrics/alarms), and Config tracks resource configuration changes and compliance over time.",
    explanationAr:
      "الـ CloudTrail بيسجّل مين عمل أنهي API call وإمتى (نشاط الحساب/التدقيق). الـ CloudWatch خاص بأداء الموارد (metrics/alarms)، والـ Config بيتتبّع تغييرات إعدادات الموارد والامتثال عبر الزمن.",
    services: ["CloudTrail", "CloudWatch", "Config"],
    difficulty: "easy",
  },
  {
    id: "sec-025",
    domain: "security",
    type: "single",
    question:
      "A company must continuously evaluate whether its AWS resources comply with a rule such as 'every EBS volume must be encrypted', and be alerted when a resource drifts out of compliance. Which service should they use?",
    options: [
      "AWS CloudTrail",
      "AWS Config with config rules",
      "Amazon CloudWatch alarms",
      "Amazon Detective",
    ],
    correct: [1],
    explanationEn:
      "AWS Config tracks configuration history and evaluates resources against rules for compliance and drift (e.g., unencrypted EBS volumes). CloudTrail logs API calls but does not evaluate ongoing configuration compliance.",
    explanationAr:
      "الـ AWS Config بيتتبّع تاريخ الإعدادات وبيقيّم الموارد مقابل قواعد للامتثال والـ drift (زي EBS مش مشفّر). الـ CloudTrail بيسجّل الـ API calls لكن مش بيقيّم الامتثال المستمر للإعدادات.",
    services: ["Config", "CloudTrail", "EBS"],
    difficulty: "medium",
  },
  {
    id: "sec-026",
    domain: "security",
    type: "single",
    question:
      "After a security incident, an investigator needs to analyze relationships and find the root cause across GuardDuty findings, CloudTrail, and VPC Flow Logs using a prebuilt graph. Which service is designed for this?",
    options: [
      "Amazon Detective",
      "AWS Security Hub",
      "Amazon Macie",
      "AWS Config",
    ],
    correct: [0],
    explanationEn:
      "Amazon Detective automatically builds a linked data graph from CloudTrail, VPC Flow Logs, and GuardDuty to help investigate and find the root cause of security issues. Security Hub aggregates findings; Detective investigates them.",
    explanationAr:
      "الـ Amazon Detective بيبني graph مربوط من CloudTrail و VPC Flow Logs و GuardDuty عشان تحقّق وتلاقي السبب الجذري للحوادث. الـ Security Hub بيجمّع النتائج، والـ Detective بيحقّق فيها.",
    services: ["Detective", "GuardDuty", "Security Hub"],
    difficulty: "medium",
  },
  {
    id: "sec-027",
    domain: "security",
    type: "single",
    question:
      "A company wants a single dashboard that aggregates and prioritizes security findings from GuardDuty, Inspector, and Macie across multiple accounts. Which service provides this central view?",
    options: [
      "Amazon Detective",
      "AWS Security Hub",
      "AWS Config",
      "Amazon CloudWatch",
    ],
    correct: [1],
    explanationEn:
      "AWS Security Hub provides a unified, aggregated view of security findings from GuardDuty, Inspector, Macie, and more, with compliance checks across accounts. 'Aggregate / central security view' is the keyword for Security Hub.",
    explanationAr:
      "الـ AWS Security Hub بيدّي رؤية موحّدة بتجمّع نتائج GuardDuty و Inspector و Macie وغيرهم مع فحوصات امتثال عبر الحسابات. كلمة 'aggregate/central security view' بتروح على Security Hub.",
    services: ["Security Hub", "GuardDuty", "Inspector", "Macie"],
    difficulty: "easy",
  },
  {
    id: "sec-028",
    domain: "security",
    type: "single",
    question:
      "A company wants to centrally configure and enforce AWS WAF rules, security groups, and Shield protections across all accounts in its AWS Organization. Which service should they use?",
    options: [
      "AWS Firewall Manager",
      "AWS WAF in each account separately",
      "Amazon GuardDuty",
      "AWS Config aggregator",
    ],
    correct: [0],
    explanationEn:
      "AWS Firewall Manager centrally applies and enforces WAF rules, Shield Advanced, and security group policies across all accounts in an Organization, ensuring consistent protection. WAF alone is per-account.",
    explanationAr:
      "الـ AWS Firewall Manager بيطبّق ويفرض قواعد WAF و Shield Advanced و security groups مركزيًا عبر كل حسابات الـ Organization عشان حماية متّسقة. الـ WAF لوحده بيكون لكل حساب على حدة.",
    services: ["Firewall Manager", "WAF", "Shield", "Organizations"],
    difficulty: "medium",
  },
  {
    id: "sec-029",
    domain: "security",
    type: "single",
    question:
      "The security team wants to be notified whenever the AWS account root user is used and to enforce multi-factor authentication on it. Which is the recommended best practice for the root user?",
    options: [
      "Create access keys for the root user for daily automation.",
      "Enable MFA on the root user, avoid using it for daily tasks, and remove root access keys.",
      "Share the root credentials with the whole admin team.",
      "Disable CloudTrail to reduce noise from root activity.",
    ],
    correct: [1],
    explanationEn:
      "Best practice is to enable MFA on the root user, not use it for everyday work (use IAM roles/Identity Center instead), and remove any root access keys. The root user should be locked down and rarely used.",
    explanationAr:
      "أفضل ممارسة: فعّل MFA على الـ root، ما تستخدمهوش في الشغل اليومي (استخدم IAM roles/Identity Center)، وامسح أي access keys للـ root. الـ root لازم يكون مقفول ونادرًا ما يُستخدم.",
    services: ["IAM", "MFA", "Root User"],
    difficulty: "easy",
  },
  {
    id: "sec-030",
    domain: "security",
    type: "single",
    question:
      "A solutions architect wants to identify which IAM resources (such as S3 buckets or roles) are shared with an external entity outside the AWS account or organization. Which tool should be used?",
    options: [
      "IAM Access Analyzer",
      "Amazon Macie",
      "AWS Trusted Advisor only",
      "VPC Flow Logs",
    ],
    correct: [0],
    explanationEn:
      "IAM Access Analyzer analyzes resource policies and reports resources (S3 buckets, roles, KMS keys, etc.) that are accessible from outside your account or organization, helping enforce least privilege.",
    explanationAr:
      "الـ IAM Access Analyzer بيحلّل policies الموارد وبيبلّغ عن الموارد (S3 buckets، roles، KMS keys...) اللي ممكن يوصلها حد من برّه حسابك أو الـ organization، عشان يساعد في الـ least privilege.",
    services: ["IAM Access Analyzer", "IAM", "S3"],
    difficulty: "medium",
  },
  {
    id: "sec-031",
    domain: "security",
    type: "single",
    question:
      "A company wants to allow an IAM policy to grant access only when the request comes from a specific corporate IP range and only when MFA is present. How can this be enforced within the policy?",
    options: [
      "Use IAM policy conditions such as aws:SourceIp and aws:MultiFactorAuthPresent.",
      "Use a security group restricting the IP range.",
      "Use a NACL on the IAM service.",
      "Use a KMS key policy.",
    ],
    correct: [0],
    explanationEn:
      "IAM policy condition keys like aws:SourceIp (restrict source network) and aws:MultiFactorAuthPresent (require MFA) add fine-grained, context-based controls to least-privilege policies. Security groups/NACLs are network controls, not IAM authorization.",
    explanationAr:
      "مفاتيح الشروط في IAM زي aws:SourceIp (تقييد الشبكة المصدر) و aws:MultiFactorAuthPresent (فرض MFA) بتضيف تحكّم دقيق حسب السياق للـ least privilege. الـ SG/NACL تحكّم شبكي مش authorization.",
    services: ["IAM", "IAM Conditions", "MFA"],
    difficulty: "medium",
  },
  {
    id: "sec-032",
    domain: "security",
    type: "single",
    question:
      "An application running on AWS Lambda needs to access an Amazon RDS database password securely at runtime without hardcoding it. Which approach is most secure and operationally simple?",
    options: [
      "Hardcode the password in the Lambda environment variables in plaintext.",
      "Retrieve the password at runtime from AWS Secrets Manager using the function's IAM role.",
      "Store the password in the code and encrypt the whole deployment package manually.",
      "Pass the password as a query string parameter.",
    ],
    correct: [1],
    explanationEn:
      "The function's IAM role should grant permission to read the secret from Secrets Manager (or Parameter Store) at runtime. This avoids hardcoded credentials and supports rotation. Plaintext environment variables are not secure.",
    explanationAr:
      "الـ IAM Role بتاع الـ function يدّي صلاحية قراءة الـ secret من Secrets Manager (أو Parameter Store) وقت التشغيل. ده بيتجنّب الـ credentials المكتوبة في الكود وبيدعم الـ rotation. الـ env vars plaintext مش آمنة.",
    services: ["Lambda", "Secrets Manager", "IAM Role", "RDS"],
    difficulty: "medium",
  },
  {
    id: "sec-033",
    domain: "security",
    type: "single",
    question:
      "A company encrypts large objects efficiently by having KMS generate a data key: a plaintext copy encrypts the data locally, and an encrypted copy is stored next to the data. What is this technique called?",
    options: [
      "Envelope encryption",
      "Client-side hashing",
      "Transport Layer Security",
      "Tokenization",
    ],
    correct: [0],
    explanationEn:
      "Envelope encryption: KMS issues a data key; the plaintext key encrypts the data locally (avoiding the 4 KB KMS limit and improving speed), and the encrypted data key is stored alongside the ciphertext for later decryption.",
    explanationAr:
      "الـ Envelope Encryption: الـ KMS بيطلّع data key؛ النسخة الـ plaintext بتشفّر الداتا محليًا (عشان نتجنّب حد الـ 4KB ونسرّع)، والنسخة المشفّرة من الـ data key بتتخزّن جنب الداتا لفك التشفير بعدين.",
    services: ["KMS", "Envelope Encryption", "Data Keys"],
    difficulty: "medium",
  },
  {
    id: "sec-034",
    domain: "security",
    type: "multi",
    question:
      "A company's security team requires that all data stored in the cloud be encrypted at rest at all times using encryption keys stored on premises. Which encryption options meet these requirements? (Select TWO.)",
    options: [
      "Use server-side encryption with Amazon S3 managed keys (SSE-S3).",
      "Use server-side encryption with AWS KMS managed keys (SSE-KMS).",
      "Use server-side encryption with customer-provided keys (SSE-C).",
      "Use client-side encryption to provide at-rest encryption.",
      "Disable encryption and rely on bucket policies.",
    ],
    correct: [2, 3],
    explanationEn:
      "Both SSE-C and client-side encryption let the customer keep and supply their own keys (kept on premises). SSE-S3 and SSE-KMS use AWS-held keys, which does not satisfy 'keys stored on premises'.",
    explanationAr:
      "كل من SSE-C والـ client-side encryption بيخلّوا العميل يحتفظ بمفاتيحه ويزوّدها (محفوظة on-prem). الـ SSE-S3 و SSE-KMS بيستخدموا مفاتيح في AWS، فمش بيحقّقوا شرط 'المفاتيح محفوظة on-prem'.",
    services: ["S3", "SSE-C", "Client-Side Encryption"],
    difficulty: "hard",
  },
  {
    id: "sec-035",
    domain: "security",
    type: "single",
    question:
      "An analytics company offers a web service where users' webpages include a JavaScript script that makes authenticated GET requests to the company's Amazon S3 bucket. The browser blocks the requests. What must the solutions architect do to ensure the script executes successfully?",
    options: [
      "Enable cross-origin resource sharing (CORS) on the S3 bucket.",
      "Enable S3 Versioning on the bucket.",
      "Provide users with a signed URL for the script.",
      "Configure an S3 bucket policy to allow public execute privileges.",
    ],
    correct: [0],
    explanationEn:
      "Browsers block scripts that call a different origin unless CORS is configured. Enabling CORS on the S3 bucket sends the headers that allow the cross-origin requests from the users' pages to succeed.",
    explanationAr:
      "المتصفح بيمنع السكربت اللي بينادي origin مختلف إلا لو الـ CORS متظبّط. تفعيل CORS على الـ S3 bucket بيبعت الـ headers اللي بتسمح بالطلبات cross-origin من صفحات المستخدمين.",
    services: ["S3", "CORS"],
    difficulty: "medium",
  },
  {
    id: "sec-036",
    domain: "security",
    type: "single",
    question:
      "A company runs a managed firewall at the VPC level that must perform stateful inspection, intrusion prevention (IPS/IDS), and domain filtering for outbound traffic. Which service should they use?",
    options: [
      "AWS WAF",
      "AWS Network Firewall",
      "Security Groups",
      "Amazon GuardDuty",
    ],
    correct: [1],
    explanationEn:
      "AWS Network Firewall is a managed L3–L7 firewall at the VPC level supporting stateful inspection, IPS/IDS, and domain filtering. WAF protects L7 HTTP apps; security groups are basic stateful allow rules at the instance level.",
    explanationAr:
      "الـ AWS Network Firewall جدار ناري مُدار على مستوى الـ VPC (L3–L7) بيدعم stateful inspection و IPS/IDS وفلترة الـ domains. الـ WAF بيحمي تطبيقات L7، والـ SG قواعد allow بسيطة على مستوى الـ instance.",
    services: ["Network Firewall", "WAF", "VPC"],
    difficulty: "medium",
  },
  {
    id: "sec-037",
    domain: "security",
    type: "single",
    question:
      "A company needs to centrally manage encryption keys but wants AWS to handle the underlying hardware, while still controlling key rotation and key policies, and have full CloudTrail auditing. Which option fits best?",
    options: [
      "AWS CloudHSM",
      "AWS KMS with a customer managed key",
      "SSE-S3",
      "Client-side keys only",
    ],
    correct: [1],
    explanationEn:
      "A KMS customer managed key lets AWS manage the multi-tenant hardware while you control rotation and the key policy, with full CloudTrail auditing. CloudHSM is for single-tenant, fully customer-controlled hardware needs.",
    explanationAr:
      "الـ KMS customer managed key بيخلّي AWS تدير الـ hardware (multi-tenant) وإنت تتحكّم في الـ rotation والـ key policy مع audit كامل في CloudTrail. الـ CloudHSM للحالات اللي تحتاج single-tenant وتحكّم كامل في العتاد.",
    services: ["KMS", "CMK", "CloudHSM", "CloudTrail"],
    difficulty: "medium",
  },
  {
    id: "sec-038",
    domain: "security",
    type: "single",
    question:
      "A company wants to grant temporary, federated access to AWS for users who authenticate through a corporate SAML 2.0 identity provider. Which AWS capability supports this?",
    options: [
      "SAML 2.0 identity federation with IAM and STS",
      "Creating one IAM user per employee",
      "Amazon Macie",
      "S3 pre-signed URLs",
    ],
    correct: [0],
    explanationEn:
      "SAML 2.0 federation lets enterprise users authenticate with a corporate IdP (e.g., Active Directory) and assume an IAM role to receive temporary STS credentials—no per-user IAM accounts needed.",
    explanationAr:
      "الـ SAML 2.0 federation بيخلّي مستخدمي المؤسسة يسجّلوا دخول بالـ IdP (زي Active Directory) ويعملوا AssumeRole عشان ياخدوا credentials مؤقتة من STS — من غير IAM user لكل موظف.",
    services: ["SAML", "IAM", "STS", "Federation"],
    difficulty: "medium",
  },
  {
    id: "sec-039",
    domain: "security",
    type: "single",
    question:
      "A web/mobile application uses Login with Google and Facebook to authenticate users, who then need temporary AWS credentials to upload files directly to S3. Which approach should be used?",
    options: [
      "Web Identity Federation through Amazon Cognito Identity Pools",
      "Create IAM users for each social login",
      "Embed an IAM access key in the mobile app",
      "Use a Gateway VPC endpoint",
    ],
    correct: [0],
    explanationEn:
      "Cognito Identity Pools support Web Identity Federation (Google/Facebook/Amazon, OIDC) and exchange the social token for temporary AWS credentials via STS, letting users upload to S3 with scoped permissions.",
    explanationAr:
      "الـ Cognito Identity Pools بتدعم Web Identity Federation (Google/Facebook/Amazon, OIDC) وبتبدّل توكن السوشيال بـ AWS credentials مؤقتة عبر STS، فالمستخدم يرفع على S3 بصلاحيات محدودة.",
    services: ["Cognito", "Identity Pools", "Web Identity Federation", "STS", "S3"],
    difficulty: "medium",
  },
  {
    id: "sec-040",
    domain: "security",
    type: "single",
    question:
      "A solutions architect must ensure objects in a sensitive S3 bucket cannot be read even by users who somehow obtain the object URLs, and access must require valid AWS credentials with explicit permission. Which combination is the foundation of this control?",
    options: [
      "Make the bucket public and rely on obscure object names.",
      "Block Public Access on the bucket and use IAM/bucket policies granting least-privilege access.",
      "Use only client-side obfuscation of URLs.",
      "Disable encryption to simplify access.",
    ],
    correct: [1],
    explanationEn:
      "Enabling S3 Block Public Access and granting access only through least-privilege IAM/bucket policies ensures objects require authenticated, explicitly authorized requests. Obscure names or URL obfuscation are not security controls.",
    explanationAr:
      "تفعيل S3 Block Public Access وإعطاء الوصول فقط عبر IAM/bucket policies بصلاحيات least-privilege بيضمن إن الوصول لازم يكون authenticated ومصرّح به. الأسماء الغامضة أو إخفاء الـ URL مش وسائل أمان.",
    services: ["S3", "Block Public Access", "IAM", "Bucket Policy"],
    difficulty: "easy",
  },
];
