'use client';

import { cn } from '@/lib/utils';
import { useMealStore } from '@/store/meal';
import {
	Cuisine,
	CuisineTypes,
	Diet,
	DietType,
	Difficult,
	DifficultTypes,
	Meal,
	MealType,
	TimeCook,
	TimeCookTypes,
} from '@/types/meal';
import { IconCircleX } from '@tabler/icons-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Separator } from './ui/separator';

export default function Toolbar() {
	const { mealFilters, updateMealFilters } = useMealStore();

	return (
		<div className='flex justify-center text-sm w-fit gap-2 items-center font-bold tracking-tight'>
			<DropdownMenu>
				<div className='flex py-2 px-4 gap-2 relative - rounded-full border-2 shadow-sm border-blue-500 bg-white'>
					<DropdownMenuTrigger>
						<span className='text-xs absolute w-full left-0 -top-5 text-muted-foreground'>
							Meal
						</span>

						<div className=''>
							<span
								className={cn(!mealFilters.meal && 'text-muted-foreground')}>
								{mealFilters.meal ?? 'Select'}
							</span>
						</div>
					</DropdownMenuTrigger>
					{mealFilters.meal && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								updateMealFilters({ meal: undefined });
							}}>
							<span className='text-muted-foreground'>
								<IconCircleX size={17} />
							</span>
						</button>
					)}
				</div>

				<DropdownMenuContent
					className='shadow-sm rounded-2xl font-bold tracking-tight text-sm'
					align='start'
					sideOffset={15}
					alignOffset={-15}>
					{Object.keys(MealType).map((mealType) => (
						<DropdownMenuItem
							onClick={() => {
								updateMealFilters({ meal: mealType as Meal });
							}}
							key={mealType}
							className='rounded-2xl'>
							{mealType}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>

			<div className='flex relative items-center border-2 w-fit border-neutral-100 rounded-full bg-white'>
				<DropdownMenu>
					<div className='flex py-2 px-4 gap-2 relative'>
						<DropdownMenuTrigger>
							<span className='text-xs absolute w-full left-0 -top-5 text-muted-foreground'>
								Cuisine
							</span>

							<div className='flex items-center w-fit rounded-full font-bold tracking-tight text-sm'>
								<span
									className={cn(
										!mealFilters.cuisine && 'text-muted-foreground',
									)}>
									{mealFilters.cuisine ?? 'Select'}
								</span>
							</div>
						</DropdownMenuTrigger>
						{mealFilters.cuisine && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateMealFilters({ cuisine: undefined });
								}}>
								<span className='text-muted-foreground'>
									<IconCircleX size={17} />
								</span>
							</button>
						)}
					</div>

					<DropdownMenuContent
						className='shadow-sm rounded-2xl font-bold tracking-tight text-sm'
						align='start'>
						{Object.keys(CuisineTypes).map((type) => (
							<DropdownMenuItem
								onClick={() => {
									updateMealFilters({ cuisine: type as Cuisine });
								}}
								key={type}
								className='rounded-2xl'>
								{type}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<Separator orientation='vertical' className='h-5' />

				<DropdownMenu>
					<div className='flex py-2 px-4 gap-2 relative'>
						<DropdownMenuTrigger>
							<span className='text-xs absolute w-full left-0 -top-5 text-muted-foreground'>
								Diet
							</span>

							<div className='flex items-center w-fit rounded-full font-bold tracking-tight text-sm'>
								<span
									className={cn(!mealFilters.diet && 'text-muted-foreground')}>
									{mealFilters.diet ?? 'Select'}
								</span>
							</div>
						</DropdownMenuTrigger>
						{mealFilters.diet && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateMealFilters({ diet: undefined });
								}}>
								<span className='text-muted-foreground'>
									<IconCircleX size={17} />
								</span>
							</button>
						)}
					</div>

					<DropdownMenuContent
						className='shadow-sm rounded-2xl font-bold tracking-tight text-sm'
						align='start'>
						{Object.keys(DietType).map((dietType) => (
							<DropdownMenuItem
								onClick={() => {
									updateMealFilters({ diet: dietType as Diet });
								}}
								key={dietType}
								className='rounded-2xl'>
								{dietType}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<Separator orientation='vertical' className='h-5' />

				<DropdownMenu>
					<div className='flex py-2 px-4 gap-2 relative'>
						<DropdownMenuTrigger>
							<span className='text-xs absolute w-full left-0 -top-5 text-muted-foreground'>
								Time
							</span>

							<div className='flex items-center w-fit rounded-full font-bold tracking-tight text-sm'>
								<span
									className={cn(!mealFilters.time && 'text-muted-foreground')}>
									{mealFilters.time ?? 'Select'}
								</span>
							</div>
						</DropdownMenuTrigger>
						{mealFilters.time && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateMealFilters({ time: undefined });
								}}>
								<span className='text-muted-foreground'>
									<IconCircleX size={17} />
								</span>
							</button>
						)}
					</div>

					<DropdownMenuContent
						className='shadow-sm rounded-2xl font-bold tracking-tight text-sm'
						align='start'>
						{Object.keys(TimeCookTypes).map((timeStep) => (
							<DropdownMenuItem
								onClick={() => {
									updateMealFilters({ time: timeStep as TimeCook });
								}}
								key={timeStep}
								className='rounded-2xl'>
								{timeStep}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<Separator orientation='vertical' className='h-5' />

				<DropdownMenu>
					<div className='flex py-2 px-4 gap-2 relative'>
						<DropdownMenuTrigger>
							<span className='text-xs absolute w-full left-0 -top-5 text-muted-foreground'>
								Difficulty
							</span>

							<div className='flex items-center w-fit rounded-full font-bold tracking-tight text-sm'>
								<span
									className={cn(
										!mealFilters.difficult && 'text-muted-foreground',
									)}>
									{mealFilters.difficult ?? 'Select'}
								</span>
							</div>
						</DropdownMenuTrigger>
						{mealFilters.difficult && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									updateMealFilters({ difficult: undefined });
								}}>
								<span className='text-muted-foreground'>
									<IconCircleX size={17} />
								</span>
							</button>
						)}
					</div>

					<DropdownMenuContent
						className='shadow-sm rounded-2xl font-bold tracking-tight text-sm'
						align='start'>
						{Object.keys(DifficultTypes).map((category) => (
							<DropdownMenuItem
								onClick={() => {
									updateMealFilters({ difficult: category as Difficult });
								}}
								key={category}
								className='rounded-2xl'>
								{category}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
