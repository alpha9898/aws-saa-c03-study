# AWS SAA-C03 Study Hub

An interactive study website for the **AWS Certified Solutions Architect – Associate (SAA-C03)** exam, generated from a bilingual (Arabic + English) study guide.

🌍 **Bilingual** — English exam-style question stems with optional Arabic explanations (toggle with **ع** in the navbar).

## Features

- **📝 Practice Quiz** — 145 scenario-based MCQs (single & multi-answer / "Select TWO") in real SAA-C03 style, with instant grading and EN/AR explanations.
- **🃏 Flashcards** — 80 flip cards covering the key "X vs Y" comparisons and facts, with a Known/Review tracker.
- **💡 Concept Q&A** — 50 searchable "when do you use…?" explanations.
- **Domain filtering + search** across every mode (Security 30% · Resilient 26% · Performance 24% · Cost 20% · Patterns).
- **Progress saving** in your browser (localStorage) — scores, answered questions, and flashcard states persist.
- **Dark / light theme** and the original **PDF guide** bundled at `/guide`.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Content stored as typed local data in `/data` — no database required.

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/            dashboard + /quiz, /flashcards, /qa pages
components/     Navbar, QuizMode, FlashcardDeck, QABrowser, filters…
data/           types, domains, mcqs/*, flashcards, qa  (the question bank)
lib/            theme / language / progress contexts + helpers
public/guide/   the source PDF study guide
```

## Content

The question bank is generated from the SAA-C03 study guide and follows the
official AWS sample-exam phrasing: a multi-sentence company scenario, a
"Which solution meets these requirements?" stem, four options (A–D) or five
(A–E for *Select TWO*), and a concise explanation of the correct answer.

---

Study tip from the guide: in the exam, find the **keyword** —
*highly available* → Multi-AZ · *most cost-effective* → Spot/Serverless/S3 tiers ·
*decouple* → SQS/SNS · *another Region* → Multi-Region · *without managing servers* → Lambda/Fargate.
