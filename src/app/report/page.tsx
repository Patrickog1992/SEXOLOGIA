
"use client";

import { useRouter } from "next/navigation";
import ReportScreen from "@/components/quiz/ReportScreen";

export default function ReportPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quiz/1");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <ReportScreen onNext={handleNext} />
      </div>
    </main>
  );
}
