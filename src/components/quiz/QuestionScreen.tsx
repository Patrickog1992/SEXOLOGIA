import type { Question } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuizLayout from "@/components/quiz/QuizLayout";

type QuestionScreenProps = {
  questionData: Question;
  onAnswer: (answer: string) => void;
  progress: number;
};

export default function QuestionScreen({ questionData, onAnswer, progress }: QuestionScreenProps) {
  return (
    <QuizLayout>
        <Progress value={progress} className="w-full mb-4 h-2 bg-muted" />
        <h2 className="text-2xl sm:text-3xl font-bold text-primary font-headline">
            {questionData.question}
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4 w-full pt-4">
            {questionData.options.map((option, index) => (
                <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="text-left justify-start h-auto whitespace-normal py-3 sm:py-4 text-base sm:text-lg border-primary/30 hover:bg-primary/10 hover:text-foreground"
                    onClick={() => onAnswer(option)}
                >
                    {option}
                </Button>
            ))}
        </div>
    </QuizLayout>
  );
}
