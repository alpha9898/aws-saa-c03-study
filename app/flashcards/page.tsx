import { FlashcardDeck } from "@/components/FlashcardDeck";

export const metadata = { title: "Flashcards · SAA-C03" };

export default function FlashcardsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">Flashcards</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Tap a card to flip it. Mark cards as Known or Review — your progress is
          saved in this browser.
        </p>
      </div>
      <FlashcardDeck />
    </div>
  );
}
