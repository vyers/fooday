'use client';

import { generateRecipe } from '@/actions/ai';
import MealCard from '@/components/meal-card';
import Toolbar from '@/components/toolbar';
import { Meals } from '@/lib/zod';
import { useMealStore } from '@/store/meal';
import { IconLoader2, IconSparkles } from '@tabler/icons-react';
import { useState } from 'react';

export default function Home() {
	const [recipe, setRecipe] = useState<Meals['result']>();
	const [loading, setLoading] = useState(false);
	const { mealFilters } = useMealStore();

	const generateMeal = async () => {
		setLoading(true);
		try {
			const res = await generateRecipe(mealFilters);
			setRecipe(res);
		} catch (error) {
			console.error(error);
			alert('ERROR - please try again later');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col w-full justify-between items-center h-full p-5'>
			<header className='w-full bg-white flex flex-col items-center py-5 gap-14 justify-center'>
				<h1 className='font-extrabold tracking-tight text-5xl'>
					What to eat {mealFilters.meal ? 'for ' + mealFilters.meal : 'today'}?
				</h1>

				<div className='flex justify-center w-full gap-2'>
					<Toolbar />
					<button
						disabled={loading}
						onClick={generateMeal}
						className='bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 disabled:pointer-events-none disabled:opacity-80 text-white font-bold tracking-tight flex items-center gap-1 px-3 py-1 text-sm rounded-full border-2 border-blue-400 transition-all ease-in-out justify-center'>
						{loading ? (
							<>
								<span>Generating</span>
								<IconLoader2 size={17} className='animate-spin' />
							</>
						) : (
							<>
								<span>Generate</span>
								<IconSparkles size={17} className='fill-white' />
							</>
						)}
					</button>
				</div>
			</header>

			<div className='grid grid-cols-4 gap-3 h-full'>
				{recipe &&
					recipe.map((item, idx) => <MealCard key={idx} item={item} />)}
			</div>
		</div>
	);
}
