
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/quiz/QuizLayout";
import { Card, CardContent } from "@/components/ui/card";

type ReportScreenProps = {
  onNext: () => void;
};

export default function ReportScreen({ onNext }: ReportScreenProps) {
  return (
    <QuizLayout>
      <Card className="bg-card/80 border-primary/30">
        <CardContent className="pt-6 space-y-6">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/h77bTC6.jpeg"
              alt="Reportagem"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <Button onClick={onNext} size="lg" className="w-full font-bold text-lg">
            CONTINUAR
          </Button>
        </CardContent>
      </Card>
    </QuizLayout>
  );
}
