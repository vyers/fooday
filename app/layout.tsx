import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fooday - Meal generator',
	description: 'Generate your next meal with fooday',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} antialiased`}>
				<Navbar />
				{children}

				<footer className='p-7 w-full flex justify-center'>
					<small className='text-xs font-medium text-neutral-400'>
						Recipes may contain errors. Please, review ingredients, proportions
						and times before preparing them.
					</small>
				</footer>
			</body>
		</html>
	);
}
