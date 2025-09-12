"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle } from "lucide-react";

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
                Parabéns!
            </h3>
            <p className="text-lg sm:text-xl text-foreground/90">
            Você acaba de desbloquear o acesso proibido às Chaves do Prazer o método que já fez milhares de homens se tornarem fodas inesquecíveis.
            </p>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Antes */}
                <div className="space-y-3">
                    <h4 className="font-bold text-lg text-destructive text-center">A mulher que você pega ANTES das Chaves do Prazer</h4>
                    <Image src="https://i.imgur.com/d0efBEf.png" alt="Mulher insatisfeita" width={400} height={400} className="rounded-lg w-full" />
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Mais uma noite sem sentir prazer de verdade…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Ele nunca consegue me deixar molhada e implorando por mais…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Só sinto aquele sexo básico, sem intensidade, sem fogo…”</span></li>
                    </ul>
                </div>
                {/* Depois */}
                <div className="space-y-3">
                    <h4 className="font-bold text-lg text-green-500 text-center">A mulher que você pega DEPOIS das Chaves do Prazer</h4>
                    <Image src="https://i.imgur.com/dn9wi1S.png" alt="Mulher satisfeita" width={400} height={400} className="rounded-lg w-full" />
                     <ul className="space-y-2">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Agora cada toque me enlouquece e me faz gozar sem parar!”</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Ele aprendeu os segredos que me deixam implorar por mais toda vez…”</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Depois do Chaves do Prazer, não consigo esquecer o prazer que ele me dá.”</span></li>
                    </ul>
                </div>
            </div>

            <p className="text-lg sm:text-xl font-bold text-primary pt-4">
            👉 Domine as técnicas mais sujas, aprenda a chupar como um demônio e meter como um deus.
            </p>

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
