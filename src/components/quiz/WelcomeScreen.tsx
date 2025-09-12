import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import Image from "next/image";

type WelcomeScreenProps = {
  onStart: () => void;
};

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <QuizLayout>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary uppercase font-headline">
        PROCURA-SE HOMENS QUE ACHAM QUE SÃO BONS DE CAMA
      </h1>
      <p className="text-lg sm:text-xl text-foreground/90">
        Será que você realmente sabe foder uma mulher até ela gozar molhada,
        gritando e implorando por mais… ou só acha que manda bem? 😏💦
      </p>
      <div className="flex justify-center">
        <Image
          src="https://i.imgur.com/drdyRal.jpeg"
          alt="Homem e mulher se beijando"
          width={400}
          height={267}
          className="rounded-lg shadow-lg"
        />
      </div>
      <Button onClick={onStart} size="lg" className="w-full sm:w-auto text-lg font-bold">
        👉 Vamos descobrir agora!
      </Button>
    </QuizLayout>
  );
}
