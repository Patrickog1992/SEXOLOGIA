
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      text: "Minha mulher gozou 3 vezes na mesma noite. Três. Em 5 anos de casado isso nunca tinha acontecido. Salvou meu relacionamento.",
      likes: 132,
      hearts: 45,
    },
    {
      id: 2,
      text: "Pensei que sabia alguma coisa, mas depois disso aqui vi que eu era um amador. A mina que eu saio agora não para de falar da minha boca e da minha rola.",
      likes: 98,
      hearts: 23,
    },
    {
      id: 3,
      text: "É outro nível. As minas ficam me olhando diferente, pedindo pra repetir. Vicia mesmo, tanto elas quanto eu.",
      likes: 210,
      hearts: 88,
    },
     {
      id: 4,
      text: "Eu dei de presente pro meu marido e, nossa... que diferença! Parece que tenho um homem novo em casa, a cama tá pegando fogo!",
      likes: 189,
      hearts: 62,
    },
    {
        id: 5,
        text: "As técnicas são muito diretas e fáceis de aplicar. Na primeira vez que usei, a reação dela foi completamente diferente. Recomendo demais!",
        likes: 154,
        hearts: 51,
      },
      {
        id: 6,
        text: "Nunca me senti tão confiante na cama. O curso destravou um lado meu que eu não conhecia. As mulheres sentem essa energia.",
        likes: 233,
        hearts: 95,
      },
      {
        id: 7,
        text: "O módulo sobre sexo oral é uma obra de arte. Só com aquilo já valeu o investimento. A mina ficou louca.",
        likes: 176,
        hearts: 78,
      },
  ];

const FacebookTestimonial = ({testimonial}: {testimonial: typeof testimonials[0]}) => (
    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 h-full flex flex-col justify-between">
        <p className="text-zinc-300 text-sm mb-3">{testimonial.text}</p>
        <div className="flex items-center gap-4 mt-auto">
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

const faqItems = [
    {
        question: "Como vou receber o acesso?",
        answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a área de membros. Verifique sua caixa de spam caso não encontre."
    },
    {
        question: "Por quanto tempo tenho acesso?",
        answer: "O acesso ao Chaves do Prazer é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu ritmo, para sempre."
    },
    {
        question: "É seguro comprar?",
        answer: "Sim, 100% seguro. O pagamento é processado por uma das maiores plataformas de produtos digitais do mundo, utilizando criptografia de ponta para proteger seus dados."
    },
    {
        question: "E se eu não gostar?",
        answer: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta pedir o reembolso e devolveremos todo o seu dinheiro, sem perguntas."
    },
    {
        question: "As aulas são explícitas?",
        answer: "Sim. Este não é um curso teórico. Mostramos tudo na prática, de forma explícita e sem censura, para que você aprenda de verdade como dar o máximo de prazer."
    }
]


export default function OfferScreen() {
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
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
             <Button size="lg" className="w-full font-bold text-xl h-16 bg-green-600 hover:bg-green-700 text-white animate-pulse" onClick={() => console.log("Purchase clicked")}>
                EU QUERO GARANTIR AGORA
            </Button>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-start">
                {/* Antes */}
                <div className="space-y-3">
                    <h4 className="font-bold text-lg text-destructive text-center">A mulher que você pega ANTES das Chaves do Prazer</h4>
                    <Image
                        src="https://i.imgur.com/d0efBEf.png"
                        alt="Mulher insatisfeita"
                        width={300}
                        height={200}
                        className="rounded-lg mx-auto"
                    />
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Mais uma noite sem sentir prazer de verdade…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Ele nunca consegue me deixar molhada e implorando por mais…”</span></li>
                        <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>“Só sinto aquele sexo básico, sem intensidade, sem fogo…”</span></li>
                    </ul>
                </div>
                {/* Depois */}
                <div className="space-y-3">
                    <h4 className="font-bold text-lg text-green-500 text-center">A mulher que você pega DEPOIS das Chaves do Prazer</h4>
                    <Image
                        src="https://i.imgur.com/dn9wi1S.png"
                        alt="Mulher satisfeita"
                        width={300}
                        height={200}
                        className="rounded-lg mx-auto"
                    />
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
                <p className="text-base text-foreground/90">ou 11x de R$5,17</p>
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
                    className="w-full max-w-sm mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
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

      <div className="w-full mt-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary font-headline mb-4">
                Perguntas Frequentes
            </h3>
            <Accordion type="single" collapsible className="w-full text-left">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index+1}`}>
                        <AccordionTrigger className="font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </QuizLayout>
  );
}

    

    