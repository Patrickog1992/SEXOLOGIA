import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type TestimonialsScreenProps = {
  onNext: () => void;
};

const Testimonial = ({ text, author }: { text: string, author: string }) => (
    <Card className="bg-card/80 border-primary/30">
        <CardContent className="pt-6 space-y-4">
            <div className="flex justify-center text-primary">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-foreground/90 italic">"{text}"</p>
            <p className="font-bold text-right text-primary">- {author}</p>
        </CardContent>
    </Card>
);

export default function TestimonialsScreen({ onNext }: TestimonialsScreenProps) {
  return (
    <QuizLayout>
        <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary font-headline">
            +10.000 homens já saíram do “sexo meia-boca” e hoje transam tão gostoso que são lembrados por toda buceta que tocaram.
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90">
            Veja o que eles falaram depois de usar as Chaves do Prazer 👀🔥
            </p>

            <div className="space-y-4">
                <Testimonial 
                    text="Pensei que sabia alguma coisa, mas depois disso aqui vi que eu era um amador. A mina que eu saio agora não para de falar da minha boca e da minha rola." 
                    author="Carlos M." 
                />
                <Testimonial 
                    text="Minha mulher gozou 3 vezes na mesma noite. Três. Em 5 anos de casado isso nunca tinha acontecido. Salvou meu relacionamento." 
                    author="J. Pires" 
                />
                <Testimonial 
                    text="É outro nível. As minas ficam me olhando diferente, pedindo pra repetir. Vicia mesmo, tanto elas quanto eu." 
                    author="Ricardo S." 
                />
            </div>
            
            <Button onClick={onNext} size="lg" className="w-full font-bold text-lg">
                CONTINUAR
            </Button>
        </div>
    </QuizLayout>
  );
}
