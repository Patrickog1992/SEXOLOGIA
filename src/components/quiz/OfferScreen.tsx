"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="text-2xl font-bold text-primary animate-pulse">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    );
};


export default function OfferScreen() {
  return (
    <QuizLayout>
        <div className="w-full text-center p-2 sm:p-4 border-2 border-dashed border-primary rounded-lg bg-primary/10">
            <h2 className="text-xl sm:text-2xl font-bold text-primary font-headline animate-pulse">
                ⚠️ Atenção: Essa oferta vai expirar em poucos minutos. ⚠️
            </h2>
            <Timer />
        </div>
        
      <Card className="bg-card/80 border-primary/30 w-full">
        <CardHeader className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary font-headline">
                🎉 Parabéns! 🎉
            </h3>
            <p className="text-lg sm:text-xl text-foreground/90">
            Você acaba de desbloquear o acesso proibido às Chaves do Prazer o método que já fez milhares de homens se tornarem fodas inesquecíveis.
            </p>
            <p className="text-lg sm:text-xl font-bold text-primary">
            👉 Domine as técnicas mais sujas, aprenda a chupar como um demônio e meter como um deus.
            </p>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <p className="font-bold text-lg text-primary">Versão sem censura 🔥</p>
                <p className="text-lg line-through text-foreground/70">De R$297 por apenas</p>
                <p className="text-4xl font-bold text-primary">R$97</p>
                <p className="text-lg text-foreground/90">ou 12x de R$9,70</p>
            </div>
          
            <Button size="lg" className="w-full font-bold text-xl h-16" onClick={() => console.log("Purchase clicked")}>
                Eu quero meter como um deus agora! 👅💦
            </Button>
        </CardContent>
        <Separator className="my-4 bg-primary/20" />
        <CardFooter className="flex-col gap-4">
            <h4 className="font-bold text-xl text-primary">Garantia</h4>
            <p className="text-base text-foreground/80">
            Se não fizer diferença na sua foda, você tem 7 dias de garantia pra pedir reembolso.
            </p>
            <p className="text-base font-semibold text-foreground">
            Mas a real? Depois que usar as Chaves do Prazer, você nunca mais vai querer transar sem elas.
            </p>
        </CardFooter>
      </Card>
    </QuizLayout>
  );
}
