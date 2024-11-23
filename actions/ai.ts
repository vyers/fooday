'use server';

import { mealsSchema } from '@/lib/zod';
import { MealFilters } from '@/types/meal';
import { createGroq } from '@ai-sdk/groq';
import { generateObject } from 'ai';

const groq = createGroq({
	apiKey: process.env.GROQ_API_KEY,
});

export const generateRecipe = async (filters: Partial<MealFilters>) => {
	const recipePrompt = `Generate meals sugestions. The meals must be follow the next filters and statements:
		- cuisine type: ${filters.cuisine ?? 'Indiferent'}.
		- diet: ${filters.diet ?? 'Indiferent'}.
		- difficult: ${filters.difficult ?? 'Indiferent'}.
		- time for do: ${filters.time ?? 'Indiferent'}.
		- meal: ${filters.meal ?? 'Indiferent'}.
		- allowed tags: Beverage, Dessert, Main course, Appetizer.
		- description: must be have minimun 20 words.
		- Ingredients and preparation must be specific with time and quantities.

		Generate minimum 8 meal suggestions.`;

	const result = await generateObject({
		model: groq('llama3-groq-70b-8192-tool-use-preview'),
		temperature: 0.5,
		schema: mealsSchema,
		prompt: recipePrompt,
		output: 'object',
	});

	return result.object.result;
};
