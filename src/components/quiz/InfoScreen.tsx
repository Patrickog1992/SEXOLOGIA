"use client";

import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type InfoScreenProps = {
  onNext: () => void;
};

const InfoItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
        <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
        <p className="text-base sm:text-lg text-foreground/90 text-left">{children}</p>
    </div>
);


export default function InfoScreen({ onNext }: InfoScreenProps) {
  return (
    <QuizLayout>
        <Card className="bg-card/80 border-primary/30 text-left">
            <CardContent className="pt-6 space-y-6">
                <p className="text-base sm:text-lg text-foreground/90">
                O Chaves do Prazer é o atalho pra você deixar de ser apenas “mais um cara que transa” e se transformar no macho que faz qualquer buceta tremer, gozar e pedir mais.
                </p>

                <div className="space-y-4">
                    <p className="font-bold text-lg text-primary">Com ele você vai:</p>
                    <InfoItem>Aprender como chupar uma buceta até ela gozar na sua boca.</InfoItem>
                    <InfoItem>Descobrir os segredos pra meter de um jeito que ela implore pra você não parar.</InfoItem>
                    <InfoItem>Entender como usar o clitóris, o ponto G e até a mente dela pra viciar qualquer mulher na sua rola.</InfoItem>
                    <InfoItem>Virar o homem que marca na memória e no corpo, porque nenhuma mulher esquece quem a fodeu direito.</InfoItem>
                </div>

                <div className="text-center space-y-2">
                    <p className="font-semibold italic text-foreground/80">Não é teoria chata.</p>
                    <p className="font-semibold italic text-foreground/80">Não é “romancezinho água com açúcar”.</p>
                    <p className="font-bold text-lg text-primary">É pornô educativo, explícito, direto ao ponto.</p>
                </div>
                
                <div>
                    <p className="font-bold text-lg text-primary">O resultado?</p>
                    <p className="text-base sm:text-lg text-foreground/90">
                    Você vai transar diferente de todos os outros caras que ela já teve. Vai ser o nome que ela lembra quando toca a buceta pensando em prazer. Vai ser o sexo inesquecível da vida dela.
                    </p>
                </div>

                <Button onClick={onNext} size="lg" className="w-full font-bold text-lg">
                    VEJA A REPORTAGEM
                </Button>
            </CardContent>
        </Card>
    </QuizLayout>
  );
}
