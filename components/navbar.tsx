'use client';

import { IconPaperBag } from '@tabler/icons-react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='flex items-center p-5 justify-between w-full'>
			<Link
				href={'/'}
				className='flex items-center gap-1 font-black tracking-tight text-3xl'>
				<span className='p-1.5 text-blue-600'>
					<IconPaperBag size={30} />
				</span>
				<span>Fooday</span>
			</Link>
			<Link
				href={'/favorites'}
				className='border-2 shadow-sm bg-white px-3 py-2 rounded-full text-xs font-bold tracking-tight'>
				Favorites
			</Link>
		</nav>
	);
}
