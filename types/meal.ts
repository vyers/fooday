export enum CuisineTypes {
	'Mexican' = 'Mexican',
	'Colombian' = 'Colombian',
	'Peruvian' = 'Peruvian',
	'Italian' = 'Italian',
	'French' = 'French',
	'Indian' = 'Indian',
	'Chinese' = 'Chinese',
	'British' = 'British',
	'Spanish' = 'Spanish',
	'Greek' = 'Greek',
	'Middle Eastern' = 'Middle Eastern',
	'American' = 'American',
}

export enum DifficultTypes {
	'Easy' = 'Easy',
	'Medium' = 'Medium',
	'Advanced' = 'Advanced',
}

export enum TimeCookTypes {
	'<15 min' = '<15 min',
	'15 - 30 min' = '15 - 30 min',
	'>30 min' = '>30 min',
}

export enum MealType {
	'Lunch' = 'Lunch',
	'Dinner' = 'Dinner',
	'Breakfast' = 'Breakfast',
	'Snack' = 'Snack',
	'Dessert' = 'Dessert',
}

export enum DietType {
	'Vegan' = 'Vegan',
	'Vegetarian' = 'Vegetarian',
	'Gluten free' = 'Gluten free',
	'Plant based' = 'Plant based',
	'Keto' = 'Keto',
}

export type Cuisine = keyof typeof CuisineTypes;
export type Meal = keyof typeof MealType;
export type Difficult = keyof typeof DifficultTypes;
export type TimeCook = keyof typeof TimeCookTypes;
export type Diet = keyof typeof DietType;

export type MealFilters = {
	cuisine: Cuisine;
	difficult: Difficult;
	time: TimeCook;
	meal: Meal;
	diet: Diet;
};
