import { ExamMode } from "@/components/ExamMode";

export const metadata = { title: "Mock Exam · SAA-C03" };

export default function ExamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Mock Exam</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          A full timed simulation — 65 domain-weighted questions in 130 minutes,
          scored at the end with a per-domain breakdown.
        </p>
      </div>
      <ExamMode />
    </div>
  );
}
