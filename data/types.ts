export type Domain =
  | "security"
  | "resilient"
  | "performance"
  | "cost"
  | "patterns";

export type Difficulty = "easy" | "medium" | "hard";

export interface MCQ {
  id: string;
  domain: Domain;
  type: "single" | "multi";
  /** English scenario stem + question (real-exam style). */
  question: string;
  /** 4 options for single-answer, 5 for multi-response. */
  options: string[];
  /** Indices into `options` that are correct. */
  correct: number[];
  explanationEn: string;
  explanationAr: string;
  /** Service/keyword tags for search + display. */
  services: string[];
  difficulty?: Difficulty;
}

export interface Flashcard {
  id: string;
  domain: Domain;
  /** Front prompt (English term / comparison). */
  front: string;
  backEn: string;
  backAr: string;
  services?: string[];
}

export interface QA {
  id: string;
  domain: Domain;
  questionEn: string;
  answerEn: string;
  answerAr: string;
  services?: string[];
}
