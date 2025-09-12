'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing a user's sexual profile based on their quiz answers.
 *
 * - analyzeSexualProfile - A function that takes quiz answers as input and returns an analysis of the user's sexual profile.
 * - AnalyzeSexualProfileInput - The input type for the analyzeSexualProfile function, representing the user's quiz answers.
 * - AnalyzeSexualProfileOutput - The output type for the analyzeSexualProfile function, representing the analysis of the user's sexual profile.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSexualProfileInputSchema = z.object({
  q1: z.string().describe('Answer to question 1'),
  q2: z.string().describe('Answer to question 2'),
  q3: z.string().describe('Answer to question 3'),
  q4: z.string().describe('Answer to question 4'),
  q5: z.string().describe('Answer to question 5'),
  q6: z.string().describe('Answer to question 6'),
  q7: z.string().describe('Answer to question 7'),
  q8: z.string().describe('Answer to question 8'),
  q9: z.string().describe('Answer to question 9'),
});

export type AnalyzeSexualProfileInput = z.infer<typeof AnalyzeSexualProfileInputSchema>;

const AnalyzeSexualProfileOutputSchema = z.object({
  profile: z.string().describe('A detailed analysis of the user\'s sexual profile, strengths, and weaknesses.'),
  score: z.number().describe('Overall score of the quiz'),
  category: z.string().describe('The category the user falls into based on their score (e.g., Common, Inesquecível).'),
  description: z.string().describe('Category description.'),
});

export type AnalyzeSexualProfileOutput = z.infer<typeof AnalyzeSexualProfileOutputSchema>;

export async function analyzeSexualProfile(input: AnalyzeSexualProfileInput): Promise<AnalyzeSexualProfileOutput> {
  return analyzeSexualProfileFlow(input);
}

const analyzeSexualProfilePrompt = ai.definePrompt({
  name: 'analyzeSexualProfilePrompt',
  input: {schema: AnalyzeSexualProfileInputSchema},
  output: {schema: AnalyzeSexualProfileOutputSchema},
  prompt: `Analyze the user's sexual profile based on the following quiz answers:

Question 1: {{{q1}}}
Question 2: {{{q2}}}
Question 3: {{{q3}}}
Question 4: {{{q4}}}
Question 5: {{{q5}}}
Question 6: {{{q6}}}
Question 7: {{{q7}}}
Question 8: {{{q8}}}
Question 9: {{{q9}}}

Based on these answers, provide a detailed analysis of their strengths and weaknesses in bed, provide overall quiz score out of 100, determine the category the user falls into (Comuns, Os Machos Inesquecíveis), and short category description.
`,
});

const analyzeSexualProfileFlow = ai.defineFlow(
  {
    name: 'analyzeSexualProfileFlow',
    inputSchema: AnalyzeSexualProfileInputSchema,
    outputSchema: AnalyzeSexualProfileOutputSchema,
  },
  async input => {
    //Simple scoring logic based on responses
    let score = 0;

    //Award points based on the users answers. This is intentionally simplistic.
    //Note: the prompt will also analyze the answers given. This scoring logic is simply a numerical summary.
    if (input.q1.includes('Sim')) score += 10;
    if (input.q2.includes('molhada')) score += 10;
    if (input.q3.includes('18')) score += 5;
    if (input.q4.includes('forte')) score += 15;
    if (input.q5.includes('Menos')) score -= 5;
    if (input.q6.includes('Conheço')) score += 15;
    if (input.q7.includes('implorado')) score += 20;
    if (input.q8.includes('ofegante')) score += 25;

    let category = 'Comuns';
    let description = 'You are in the Comuns category.';

    if(score > 50) {
      category = 'Os Machos Inesquecíveis';
      description = 'You are in the Os Machos Inesquecíveis category.';
    }

    const {output} = await analyzeSexualProfilePrompt({...input, score});
    return {
      ...output!,
      score,
      category,
      description,
    };
  }
);
