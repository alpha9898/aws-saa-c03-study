import { QuizMode } from "@/components/QuizMode";

export const metadata = { title: "Practice Quiz · SAA-C03" };

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Practice Quiz</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Scenario-based questions in real SAA-C03 style. Pick an answer, submit,
          and read the explanation. Use the ع toggle in the navbar for Arabic.
        </p>
      </div>
      <QuizMode />
    </div>
  );
}
