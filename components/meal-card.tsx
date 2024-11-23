import { MealDetails } from '@/lib/zod';
import { useMealStore } from '@/store/meal';
import {
  IconBookmarks,
  IconChefHat,
  IconMinimize,
  IconPaperBag
} from '@tabler/icons-react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

export default function MealCard({ item }: { item: MealDetails }) {
	const { favorites, saveRecipe } = useMealStore();

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<div className='flex flex-col gap-4 border-2 border-neutral-100 p-2 rounded-3xl shadow-sm w-full min-h-full'>
					<div className='w-full flex items-center justify-center min-w-80 bg-gradient-to-br from-blue-500 via-blue-300 to-sky-500 min-h-80 h-80 aspect-square object-cover rounded-2xl shadow-sm'>
						<span className='text-blue-50 opacity-25'>
							<IconPaperBag size={65} />
						</span>
					</div>

					<div className='flex flex-col gap-2 px-3 pb-3 h-full text-left'>
						<div className='flex flex-wrap items-center gap-1'>
							{item.tags.map((tag) => (
								<small
									key={tag}
									className='capitalize whitespace-nowrap font-bold tracking-tight border rounded-full shadow-sm w-fit px-2 bg-neutral-100'>
									{tag}
								</small>
							))}
						</div>
						<span className='font-bold text-xl tracking-tight'>
							{item.title}
						</span>
						<span className='font-medium max-h-20 text-sm text-neutral-400 h-full line-clamp-4'>
							{item.description}
						</span>
					</div>
				</div>
			</AlertDialogTrigger>

			<AlertDialogContent className='!rounded-3xl max-h-[90dvh]'>
				<AlertDialogHeader>
					<AlertDialogTitle className='flex items-center gap-1 font-bold tracking-tight text-xl'>
						<span>
							<IconChefHat strokeWidth={2.3} />
						</span>
						<span>{item.title}</span>
					</AlertDialogTitle>
				</AlertDialogHeader>

				<article className='flex gap-2'>
					<div className='text-sm max-h-[32rem] overflow-y-scroll text-muted-foreground flex flex-col gap-2'>
						<span>{item.description}</span>

						<span className='font-semibold tracking-tight text-black'>
							Ingredients
						</span>

						<ul className='list-disc list-inside flex flex-col gap-1'>
							{item.preparation.ingredients.map((ingredient, idx) => (
								<li key={idx}>{ingredient}</li>
							))}
						</ul>

						<span className='font-semibold tracking-tight text-black'>
							Preparation
						</span>

						<ol className='list-decimal list-inside flex flex-col gap-1'>
							{item.preparation.steps.map((step, idx) => (
								<li key={idx}>{step}</li>
							))}
						</ol>
					</div>
				</article>

				<AlertDialogFooter className='gap-2'>
					<AlertDialogCancel className='font-bold w-fit text-sm tracking-tight border-2 border-neutral-200 rounded-xl px-3 py-2'>
						<span>Close</span>
						<span>
							<IconMinimize size={17} />
						</span>
					</AlertDialogCancel>
					<button
						onClick={() => {
							if (!favorites.some((f) => f.title === item.title)) {
								saveRecipe(item);
							}
						}}
						className='font-bold flex items-center justify-center gap-1 text-sm w-fit whitespace-nowrap hover:bg-blue-500 hover:text-white transition-all ease-in-out tracking-tight border-2 border-blue-500 rounded-xl px-3 py-2'>
						<span>
							{favorites.some((f) => f.title === item.title)
								? 'Saved'
								: 'Save recipe'}
						</span>
						<span>
							<IconBookmarks size={17} />
						</span>
					</button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
