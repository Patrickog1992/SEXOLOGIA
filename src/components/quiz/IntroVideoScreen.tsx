"use client";

import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent } from "@/components/ui/card";

type IntroVideoScreenProps = {
  onNext: () => void;
};

export default function IntroVideoScreen({ onNext }: IntroVideoScreenProps) {
  return (
    <QuizLayout>
        <Card className="bg-card/80 border-primary/30 w-full">
            <CardContent className="pt-6 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-headline">
                    Escute o recado da nossa sexóloga Ana Julia
                </h2>
                
                <div className="aspect-w-9 aspect-h-16 w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.youtube.com/embed/8DfWNp2VyFw?rel=0&controls=1&modestbranding=1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        className="absolute top-0 left-0 w-full h-full">
                    </iframe>
                </div>
                
                <Button onClick={onNext} size="lg" className="w-full font-bold text-lg">
                    CONTINUAR
                </Button>
            </CardContent>
        </Card>
    </QuizLayout>
  );
}
