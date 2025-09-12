"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import QuizLayout from "@/components/quiz/QuizLayout";

export default function AnalysisScreen() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    const timer2 = setTimeout(() => setProgress(90), 1500);
    return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
    };
  }, []);

  return (
    <QuizLayout>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary font-headline">
        Aguarde… seu perfil sexual está sendo analisado…
      </h2>
      <div className="w-full space-y-4">
        <Progress value={progress} className="w-full h-4" />
        <p className="text-lg text-foreground/90">
          {Math.round(progress)}% 🔥 Será que você é mesmo o tipo de homem que fode tão
          gostoso que ela lembra da sua rola por dias? Ou você ainda está no
          nível “sexo comum”, como a maioria?
        </p>
        <p className="text-lg font-bold text-primary">Descobriremos agora…</p>
      </div>
    </QuizLayout>
  );
}
