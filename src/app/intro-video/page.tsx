
"use client";

import { useRouter } from "next/navigation";
import IntroVideoScreen from "@/components/quiz/IntroVideoScreen";

export default function IntroVideoPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/info");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <IntroVideoScreen onNext={handleNext} />
      </div>
    </main>
  );
}
