import { ReactNode } from "react";

type QuizLayoutProps = {
  children: ReactNode;
};

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 text-foreground animate-in fade-in duration-500">
      <div className="w-full max-w-xl space-y-6">{children}</div>
    </div>
  );
}
