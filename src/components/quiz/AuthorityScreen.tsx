import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

type AuthorityScreenProps = {
  onNext: () => void;
};

export default function AuthorityScreen({ onNext }: AuthorityScreenProps) {
  const authorityImage = PlaceHolderImages.find(img => img.id === 'authority-woman');

  return (
    <QuizLayout>
      <Card className="bg-card/80 border-primary/30">
        <CardContent className="pt-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary font-headline">
              Essa é a Ana Julia, a sexóloga que vai abrir as Chaves do Prazer para você
            </h2>
            
            {authorityImage && (
              <div className="flex justify-center">
                <Image
                  src={authorityImage.imageUrl}
                  alt={authorityImage.description}
                  data-ai-hint={authorityImage.imageHint}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary shadow-lg"
                />
              </div>
            )}
            
            <p className="text-base sm:text-lg text-foreground/90">
              👉 Educadora sexual, especialista em prazer feminino e responsável por treinar mais de 10 mil homens a meter gostoso, chupar buceta de verdade e fazer qualquer mulher gozar em segundos.
            </p>
            <p className="text-base sm:text-lg text-foreground/90">
              Ela não fala de teoria, ela mostra na prática: posições, chupadas, técnicas de meter e até truques psicológicos pra viciar qualquer buceta.
            </p>
            <p className="text-lg sm:text-xl font-bold text-primary">
              Explícito. Direto. Sem censura.
            </p>
            
            <Button onClick={onNext} size="lg" className="w-full font-bold text-lg">
                👉 Clique abaixo e veja como entrar no universo das Chaves do Prazer.
            </Button>
        </CardContent>
      </Card>
    </QuizLayout>
  );
}
