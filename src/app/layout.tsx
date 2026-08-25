import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono, Public_Sans } from 'next/font/google';
import './globals.scss';

const fraunces = Fraunces({
	variable: '--font-fraunces',
	subsets: ['latin'],
	axes: ['opsz', 'SOFT', 'WONK'],
	style: ['normal', 'italic'],
	weight: 'variable',
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
});

const publicSans = Public_Sans({
	variable: '--font-public-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://evanbaron.dev'),
	title: 'Evan Baron — Full-Stack Engineer',
	description:
		'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
	icons: {
		icon: '/favicon.svg',
	},
	openGraph: {
		title: 'Evan Baron — Full-Stack Engineer',
		description:
			'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
		type: 'website',
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${fraunces.variable} ${jetbrainsMono.variable} ${publicSans.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
