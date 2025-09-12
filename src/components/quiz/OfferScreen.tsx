
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle, Heart, ThumbsUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const testimonials = [
    {
      id: 1,
      author: "J. Pires",
      imageUrl: "https://i.imgur.com/cGzrRGs.jpg",
      text: "Minha mulher gozou 3 vezes na mesma noite. Três. Em 5 anos de casado isso nunca tinha acontecido. Salvou meu relacionamento.",
      likes: 132,
      hearts: 45,
    },
    {
      id: 2,
      author: "Carlos M.",
      imageUrl: "https://i.imgur.com/lUUhU1Y.jpg",
      text: "Pensei que sabia alguma coisa, mas depois disso aqui vi que eu era um amador. A mina que eu saio agora não para de falar da minha boca e da minha rola.",
      likes: 98,
      hearts: 23,
    },
    {
      id: 3,
      author: "Ricardo S.",
      imageUrl: "https://i.imgur.com/iGAged5.png",
      text: "É outro nível. As minas ficam me olhando diferente, pedindo pra repetir. Vicia mesmo, tanto elas quanto eu.",
      likes: 210,
      hearts: 88,
    },
     {
      id: 4,
      author: "Fernanda O.",
      imageUrl: "https://i.imgur.com/WYOZOHu.png",
      text: "Eu dei de presente pro meu marido e, nossa... que diferença! Parece que tenho um homem novo em casa, a cama tá pegando fogo!",
      likes: 189,
      hearts: 62,
    }
  ];

const FacebookTestimonial = ({testimonial}: {testimonial: typeof testimonials[0]}) => (
    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
        <div className="flex items-center gap-3 mb-3">
            <Image 
                src={testimonial.imageUrl} 
                alt={testimonial.author}
                width={40}
                height={40}
                className="rounded-full object-cover"
            />
        </div>
        <p className="text-zinc-300 text-sm mb-3">{testimonial.text}</p>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-zinc-400 text-xs">
                <ThumbsUp className="w-4 h-4 text-blue-500 fill-current" />
                <span>{testimonial.likes}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-400 text-xs">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>{testimonial.hearts}</span>
            </div>
        </div>
    </div>
);


export default function OfferScreen() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      );

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
                Parabéns
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
                    <div className="flex justify-center">
                        <Image src="https://i.imgur.com/d0efBEf.png" alt="Mulher insatisfeita" width={300} height={200} className="rounded-lg mx-auto object-cover w-[300px] h-[200px]" />
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Mais uma noite sem sentir prazer de verdade…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Ele nunca consegue me deixar molhada e implorando por mais…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Só sinto aquele sexo básico, sem intensidade, sem fogo…”</span></li>
                    </ul>
                </div>
                {/* Depois */}
                <div className="space-y-3">
                    <h4 className="font-bold text-lg text-green-500 text-center">A mulher que você pega DEPOIS das Chaves do Prazer</h4>
                    <div className="flex justify-center">
                        <Image src="https://i.imgur.com/dn9wi1S.png" alt="Mulher satisfeita" width={300} height={200} className="rounded-lg mx-auto object-cover w-[300px] h-[200px]" />
                    </div>
                     <ul className="space-y-2">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Agora cada toque me enlouquece e me faz gozar sem parar!”</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Ele aprendeu os segredos que me deixam implorar por mais toda vez…”</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>“Depois do Chaves do Prazer, não consigo esquecer o prazer que ele me dá.”</span></li>
                    </ul>
                </div>
            </div>

            <div className="pt-4 space-y-4">
                <p className="text-lg sm:text-xl font-bold text-primary">
                Aprenda a deixá-la com as pernas trêmulas de prazer, gemendo e implorando por mais! Esse curso não é só técnicas: é o guia completo pra você se tornar o homem que ela não consegue esquecer nem dentro, nem fora da cama.
                </p>
                <p className="text-lg sm:text-xl font-bold text-primary">
                Domine cada técnica, entenda a mente dela e veja tudo na prática com demonstrações explícitas e extremamente picantes 😏🔥
                </p>
                <p className="text-lg sm:text-xl font-bold text-primary">
                Imagine ser o cara que a faz tremer de prazer, gemendo e implorando por mais 👅💦😎 Esse curso vai muito além de simples técnicas: é um guia completo para transformar você no homem confiante que ela não vai conseguir tirar da cabeça nem da cama
                </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/50 shadow-lg">
                <p className="text-2xl font-bold text-primary font-headline">AS CHAVES DO PRAZER</p>
                <p className="text-lg text-foreground/70 mt-2">De <span className="line-through">R$297</span> por apenas</p>
                <p className="text-5xl font-bold text-primary my-2">R$47</p>
                <p className="text-base text-foreground/90">ou 12x de R$9,70</p>
            </div>
          
            <Button size="lg" className="w-full font-bold text-xl h-16 bg-green-600 hover:bg-green-700 text-white animate-pulse" onClick={() => console.log("Purchase clicked")}>
                EU QUERO GARANTIR AGORA
            </Button>

            <Separator className="my-4 bg-primary/20" />

            <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold text-primary font-headline">
                    Veja o que falaram do curso
                </h3>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-xs mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id}>
                            <div className="p-1">
                                <FacebookTestimonial testimonial={testimonial} />
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>

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
