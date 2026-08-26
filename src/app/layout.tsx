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
	title: 'Evan Baron | Full-Stack Engineer',
	description:
		'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL. Portfolio, projects, and experience.',

	openGraph: {
		title: 'Evan Baron | Full-Stack Engineer',
		description:
			'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
		url: 'https://evanbaron.dev',
		siteName: 'Evan Baron',
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary',
		title: 'Evan Baron | Full-Stack Engineer',
		description:
			'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
	},

	keywords: [
		'Evan Baron',
		'full-stack engineer',
		'software engineer portfolio',
		'Next.js developer',
		'React developer',
		'TypeScript developer',
		'PostgreSQL',
		'web developer portfolio',
	],
	authors: [{ name: 'Evan Baron', url: 'https://evanbaron.dev' }],
	creator: 'Evan Baron',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	icons: {
		icon: '/favicon.svg',
	},
};

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Evan Baron',
	url: 'https://evanbaron.dev',
	jobTitle: 'Full-Stack Engineer',
	description:
		'Full-stack engineer building production web applications end-to-end with Next.js, React, TypeScript, and PostgreSQL.',
	sameAs: [
		'https://github.com/evan-baron',
		'https://linkedin.com/in/evangbaron',
	],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${fraunces.variable} ${jetbrainsMono.variable} ${publicSans.variable}`}
		>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
