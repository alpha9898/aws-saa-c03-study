import { QABrowser } from "@/components/QABrowser";

export const metadata = { title: "Concept Q&A · SAA-C03" };

export default function QAPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Concept Q&amp;A</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Quick &quot;when do you use…?&quot; explanations. Search by service or
          keyword, filter by domain, and expand any question.
        </p>
      </div>
      <QABrowser />
    </div>
  );
}
