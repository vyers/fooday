import { MealDetails, Meals } from '@/lib/zod';
import { MealFilters } from '@/types/meal';
import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export type MealProps = {
	mealFilters: Partial<MealFilters>;
	updateMealFilters: (filters: Partial<MealFilters>) => void;
	favorites: Meals['result'];
	saveRecipe: (favorite: MealDetails) => void;
	removeRecipe: (item: MealDetails) => void;
};

export const useMealStore = createWithEqualityFn<MealProps>()(
	persist(
		(set, get) => ({
			mealFilters: {
				cuisine: 'Italian',
				difficult: 'Easy',
				meal: 'Lunch',
				time: '15 - 30 min',
			},
			updateMealFilters: (filters) => {
				set({ mealFilters: { ...get().mealFilters, ...filters } });
			},
			favorites: [],
			saveRecipe: (favorite) => {
				set({ favorites: [...get().favorites, favorite] });
			},
			removeRecipe: (item) => {
				set({
					favorites: get().favorites.filter((f) => f.title !== item.title),
				});
			},
		}),
		{ name: 'fooday' },
	),
);
