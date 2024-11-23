import { z } from 'zod';

const mealSchema = z.object({
	title: z.string().describe('the title of item'),
	description: z.string().describe('the description of item, min of 20 words'),
	image: z
		.string()
		.describe('image of item, always be empty string')
		.optional()
		.default(''),
	preparation: z.object({
		ingredients: z.string().array(),
		steps: z
			.string()
			.array()
			.describe(
				'The detailed step-by-step preparation of the meal includes specific time and quantities.',
			),
	}),
	tags: z.array(z.enum(['Beverage', 'Dessert', 'Main course', 'Appetizer'])),
});

export const mealsSchema = z.object({
	result: z.array(mealSchema),
});

export type Meals = z.infer<typeof mealsSchema>;
export type MealDetails = z.infer<typeof mealSchema>;
