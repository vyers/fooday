'use client';

import MealCard from '@/components/meal-card';
import { useMealStore } from '@/store/meal';
import { IconChefHat, IconMeat, IconTrash } from '@tabler/icons-react';

export default function FavoritesPage() {
	const { favorites, removeRecipe } = useMealStore();
	return (
		<div className='p-10 flex flex-col gap-10'>
			<div className='flex items-center w-full justify-center gap-2 font-bold text-5xl tracking-tight text-center'>
				<span className='text-amber-400'>
					<IconChefHat size={45} strokeWidth={2.5} className='fill-amber-200' />
				</span>
				<span>Favorite Meals</span>
			</div>
			<div className='grid grid-cols-4 gap-3'>
				{favorites.map((meal, idx) => (
					<div key={idx} className='relative'>
						<button
							onClick={() => {
								removeRecipe(meal);
							}}
							className='bg-white rounded-lg p-1 absolute top-5 right-5'
							title='remove'>
							<span className=''>
								<IconTrash strokeWidth={1.7} size={20} />
							</span>
						</button>
						<MealCard item={meal} />
					</div>
				))}
				{favorites.length === 0 && (
					<div className='p-10 py-20 text-neutral-300 font-medium tracking-tight col-span-full flex flex-col gap-4 items-center justify-center w-full'>
						<span>
							<IconMeat size={60} strokeWidth={1.7} />
						</span>
						<span>Your favorite meals appears here</span>
					</div>
				)}
			</div>
		</div>
	);
}
