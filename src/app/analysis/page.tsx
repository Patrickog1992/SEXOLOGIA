
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAnalysis } from "@/app/actions";
import AnalysisScreen from "@/components/quiz/AnalysisScreen";

export default function AnalysisPage() {
  const router = useRouter();

  useEffect(() => {
    const analyze = async () => {
      const savedAnswers = localStorage.getItem("quizAnswers");
      if (savedAnswers) {
        const answers = JSON.parse(savedAnswers);
        const result = await getAnalysis(answers);
        localStorage.setItem("quizAnalysis", JSON.stringify(result));
        router.push("/results");
      } else {
        // Handle case where there are no answers, maybe redirect home
        router.push("/");
      }
    };

    const timeoutId = setTimeout(analyze, 3000); // Wait for animations on AnalysisScreen

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <AnalysisScreen />
      </div>
    </main>
  );
}
