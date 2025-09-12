"use server";

import { analyzeSexualProfile, AnalyzeSexualProfileInput } from "@/ai/flows/analyze-sexual-profile";

export async function getAnalysis(answers: Record<string, string>) {
  const input: AnalyzeSexualProfileInput = {
    q1: answers.q1 || "",
    q2: answers.q2 || "",
    q3: answers.q3 || "",
    q4: answers.q4 || "",
    q5: answers.q5 || "",
    q6: answers.q6 || "",
    q7: answers.q7 || "",
    q8: answers.q8 || "",
    q9: answers.q9 || "", // AI flow expects 9 questions, user provided 8. Passing empty for q9.
  };

  try {
    const result = await analyzeSexualProfile(input);
    return result;
  } catch (error) {
    console.error("Error analyzing sexual profile:", error);
    // Provide a fallback response in case of an error
    return {
      profile: "Não foi possível analisar seu perfil. Tente novamente.",
      score: 0,
      category: "Indefinido",
      description: "Ocorreu um erro durante a análise.",
    };
  }
}
