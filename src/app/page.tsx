"use client";

import { useState, useTransition } from "react";
import type { AnalyzeSexualProfileOutput } from "@/ai/flows/analyze-sexual-profile";
import { getAnalysis } from "@/app/actions";
import { questions } from "@/lib/quiz-data";

import WelcomeScreen from "@/components/quiz/WelcomeScreen";
import QuestionScreen from "@/components/quiz/QuestionScreen";
import AnalysisScreen from "@/components/quiz/AnalysisScreen";
import ResultsScreen from "@/components/quiz/ResultsScreen";
import AuthorityScreen from "@/components/quiz/AuthorityScreen";
import OfferScreen from "@/components/quiz/OfferScreen";

type Answers = {
  [key: string]: string;
};

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [analysis, setAnalysis] = useState<AnalyzeSexualProfileOutput | null>(
    null
  );
  const [isPending, startTransition] = useTransition();

  const totalQuestions = questions.length;
  const currentQuestionIndex = step - 1;

  const handleStart = () => {
    setStep(1);
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (step < totalQuestions) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // Move to analysis screen
      startTransition(async () => {
        const result = await getAnalysis(newAnswers);
        setAnalysis(result);
        setStep(step + 2); // Move to results screen
      });
    }
  };
  
  const handleNext = () => {
    setStep(s => s + 1);
  }

  const renderStep = () => {
    if (step === 0) {
      return <WelcomeScreen onStart={handleStart} />;
    }
    
    if (step > 0 && step <= totalQuestions) {
      return (
        <QuestionScreen
          questionData={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          progress={(currentQuestionIndex / totalQuestions) * 100}
        />
      );
    }

    if (step === totalQuestions + 1) {
      return <AnalysisScreen />;
    }
    
    if (step === totalQuestions + 2 && analysis) {
      return <ResultsScreen analysis={analysis} onNext={handleNext} />;
    }
    
    if (step === totalQuestions + 3) {
      return <AuthorityScreen onNext={handleNext} />;
    }

    if (step === totalQuestions + 4) {
      return <OfferScreen />;
    }

    return null;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        {renderStep()}
      </div>
    </main>
  );
}
