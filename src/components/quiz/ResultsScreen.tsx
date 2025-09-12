import type { AnalyzeSexualProfileOutput } from "@/ai/flows/analyze-sexual-profile";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResultsScreenProps = {
  analysis: AnalyzeSexualProfileOutput;
  onNext: () => void;
};

const Wave = ({ score }: { score: number }) => {
    const points = 100;
    const pathData = Array.from({ length: points }, (_, i) => {
      const x = (i / (points - 1)) * 100;
      const y = 50 + 30 * Math.sin((i / points) * 2 * Math.PI - Math.PI / 2);
      return `${x},${y}`;
    }).join(' ');
  
    const scoreX = score;
    const scoreY = 50 + 30 * Math.sin((score / 100) * 2 * Math.PI - Math.PI / 2);
  
    return (
      <div className="relative w-full h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(239 68 68)" />
              <stop offset="50%" stopColor="rgb(234 179 8)" />
              <stop offset="100%" stopColor="rgb(34 197 94)" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            points={pathData}
          />
        </svg>
        <div 
          className="absolute flex flex-col items-center" 
          style={{ 
            left: `${scoreX}%`, 
            top: `${scoreY}%`,
            transform: `translate(-50%, -100%)`
          }}
        >
          <span className="text-sm font-bold text-primary whitespace-nowrap -mt-4">
            👉 VOCÊ ({score})
          </span>
          <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-md"></div>
        </div>
      </div>
    );
  };
  
  export default function ResultsScreen({ analysis, onNext }: ResultsScreenProps) {
    const scorePosition = Math.max(0, Math.min(100, analysis.score || 0));
  
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
  
            <div className="w-full py-4 space-y-2">
                <Wave score={scorePosition} />
                <div className="flex justify-between text-sm font-bold text-foreground pt-2">
                    <span className="w-1/2 text-left text-red-500">COMUNS</span>
                    <span className="w-1/2 text-right text-green-500">OS INESQUECÍVEIS</span>
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
  