
"use client";

import { useRouter } from "next/navigation";
import AuthorityScreen from "@/components/quiz/AuthorityScreen";

export default function AuthorityPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/offer");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="w-full max-w-2xl mx-auto">
        <AuthorityScreen onNext={handleNext} />
      </div>
    </main>
  );
}
