
"use client";

import { useRouter } from "next/navigation";
import TestimonialsScreen from "@/components/quiz/TestimonialsScreen";

export default function TestimonialsPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/offer");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <TestimonialsScreen onNext={handleNext} />
      </div>
    </main>
  );
}
