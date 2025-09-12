import type { AnalyzeSexualProfileOutput } from "@/ai/flows/analyze-sexual-profile";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResultsScreenProps = {
  analysis: AnalyzeSexualProfileOutput;
  onNext: () => void;
};

export default function ResultsScreen({ analysis, onNext }: ResultsScreenProps) {
  const scorePosition = Math.max(0, Math.min(100, analysis.score || 30));

  return (
    <QuizLayout>
      <Card className="bg-card/80 border-primary/30">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-primary font-headline">
            {analysis.category === "Comuns" ? "Você está no grupo: Comuns meia bomba" : `Você está no grupo: ${analysis.category}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg sm:text-xl text-foreground/90">
            Mas, irmão, nenhuma buceta quer só o básico.
          </p>

          <div className="w-full py-4">
            <div className="relative w-full h-2 bg-muted rounded-full">
              <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full w-full"></div>
            </div>
            <div className="flex justify-between text-xs text-foreground/70 mt-2 px-1">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
             <div className="relative w-full mt-2" style={{ left: `${scorePosition}%`, transform: 'translateX(-50%)' }}>
                <div className="absolute flex flex-col items-center">
                    <span className="text-sm font-bold text-primary whitespace-nowrap">👉 VOCÊ ({analysis.score})</span>
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary"></div>
                </div>
            </div>
            <div className="flex justify-between text-sm font-bold text-foreground mt-12 pt-2">
                <span className="w-1/2 text-center text-red-500">COMUNS</span>
                <span className="w-1/2 text-center text-green-500">OS INESQUECÍVEIS</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-foreground/90">
            Se você quer sair da média e virar aquele cara que faz qualquer mulher gozar molhada, implorar e te chamar de viciado na cama, eu tenho um convite sujo pra te fazer:
          </p>

          <Button onClick={onNext} size="lg" className="w-full font-bold text-lg animate-pulse">
            QUERO AS CHAVES DO PRAZER
          </Button>
        </CardContent>
      </Card>
    </QuizLayout>
  );
}
