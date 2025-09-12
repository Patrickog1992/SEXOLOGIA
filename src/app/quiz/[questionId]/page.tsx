
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { questions } from "@/lib/quiz-data";
import QuestionScreen from "@/components/quiz/QuestionScreen";

type Answers = {
  [key: string]: string;
};

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const questionId = parseInt(params.questionId as string, 10);

  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem("quizAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const totalQuestions = questions.length;
  const currentQuestionIndex = questionId - 1;

  if (isNaN(questionId) || questionId < 1 || questionId > totalQuestions) {
    // maybe redirect to home or show an error
    return <p>Questão não encontrada.</p>;
  }

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));

    if (questionId < totalQuestions) {
      router.push(`/quiz/${questionId + 1}`);
    } else {
      router.push("/analysis");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <QuestionScreen
          questionData={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          progress={(currentQuestionIndex / totalQuestions) * 100}
        />
      </div>
    </main>
  );
}
