import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";

type WelcomeScreenProps = {
  onStart: () => void;
};

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <QuizLayout>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary uppercase font-headline">
        PROCURA-SE MACHOS DE VERDADE
      </h1>
      <p className="text-lg sm:text-xl text-foreground/90">
        Será que você realmente sabe foder uma mulher até ela gozar molhada,
        gritando e implorando por mais… ou só acha que manda bem? 😏💦
      </p>
      <Button onClick={onStart} size="lg" className="w-full sm:w-auto text-lg font-bold">
        👉 Vamos descobrir agora!
      </Button>
    </QuizLayout>
  );
}
