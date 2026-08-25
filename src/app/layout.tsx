import type { Metadata } from 'next';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.scss';

const hankenGrotesk = Hanken_Grotesk({
	variable: '--font-hanken',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://evanbaron.dev'),
	title: 'Evan Baron | Full-Stack Engineer',
	description:
		'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
	icons: {
		icon: '/favicon.svg',
	},
	openGraph: {
		title: 'Evan Baron | Full-Stack Engineer',
		description:
			'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
		type: 'website',
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
