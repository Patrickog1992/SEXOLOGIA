
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AnalyzeSexualProfileOutput } from "@/ai/flows/analyze-sexual-profile";
import ResultsScreen from "@/components/quiz/ResultsScreen";

export default function ResultsPage() {
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalyzeSexualProfileOutput | null>(null);

  useEffect(() => {
    const savedAnalysis = localStorage.getItem("quizAnalysis");
    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    } else {
      // Handle case where there is no analysis, maybe redirect home
      router.push("/");
    }
  }, [router]);

  const handleNext = () => {
    router.push("/authority");
  };

  if (!analysis) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <p>Carregando resultados...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <ResultsScreen analysis={analysis} onNext={handleNext} />
      </div>
    </main>
  );
}
