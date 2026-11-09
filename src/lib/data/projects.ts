export type Project = {
	name: string;
	tagline: string;
	year: string;
	stack: string[];
	bullets: string[];
	href: string;
	linkLabel: string;
};

const projects: Project[] = [
	{
		name: 'Oskar Saks Photography',
		tagline: 'Photography portfolio site with custom admin console',
		year: '2026',
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'SCSS',
			'Zod',
			'Cloudinary',
			'Resend',
			'Neon',
			'Vercel',
		],
		bullets: [
			'Full-stack portfolio site for a professional photographer, owned solo from design through deployment, with category galleries, services, and about pages.',
			'Custom admin console with session-based auth, drag-and-drop photo ordering, and direct-to-Cloudinary signed uploads so the client manages galleries and site content without a developer.',
			'PostgreSQL schema with Prisma on Neon serverless, Zod-validated inputs, and full SEO coverage including structured data, sitemap, and robots.',
		],
		href: 'https://www.oskarsaksphoto.com',
		linkLabel: 'Visit site',
	},
	{
		name: 'Spoke&Circle',
		tagline: 'Cycling team & group ride discovery platform',
		year: '2026',
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'PostgreSQL',
			'Node.js',
			'TanStack Query',
			'Zod',
			'Auth0',
			'SCSS',
			'Prisma',
			'Cloudinary',
			'Resend',
			'Google Analytics',
			'Vitest',
			'Neon',
			'Vercel',
			'Cloudflare',
		],
		bullets: [
			'Full-stack SaaS platform for discovering and joining local cycling teams and group rides, owned solo across schema, backend, frontend, and deployment.',
			'Location search with gazetteer-backed autocomplete and radius filtering, plus a timezone-aware group ride calendar with pace filters.',
			'Cloudinary media with signed uploads and Strava and RideWithGPS route embeds behind strict URL validation.',
			'Auth0 role-gated admin review, Zod-validated API with database-backed rate limiting, and Cloudflare origin verification; deployed on Vercel with Neon Postgres.',
		],
		href: 'https://spokeandcircle.com',
		linkLabel: 'Visit site',
	},
	{
		name: 'Repliably',
		tagline: 'Email automation & customer engagement platform',
		year: '2025',
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'PostgreSQL',
			'Node.js',
			'TanStack Query',
			'Zod',
			'Auth0',
			'Gmail API',
			'Prisma',
			'Neon',
			'Vercel',
		],
		bullets: [
			'Full-stack SaaS platform with Gmail API integration, OAuth/Auth0 authentication, and real-time CRUD, owned solo across frontend, backend, schema, and deployment.',
			'Designed a PostgreSQL schema with Prisma ORM and performant queries for dynamic scheduling logic, cutting user follow-up time by 50%.',
			'RESTful API layer in Node.js with Zod input validation and Auth0 session management.',
			'Deployment pipeline on Vercel with AWS-backed Neon serverless Postgres; handled auth hardening, SEO, and WCAG compliance.',
		],
		href: 'https://repliably.com',
		linkLabel: 'Visit site',
	},
	{
		name: 'Retcon Consulting',
		tagline: 'Digital consulting services web application',
		year: '2025',
		stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Netlify', 'Railway'],
		bullets: [
			'Performance-optimized marketing site with custom animations, full SEO implementation, and complete UI/UX ownership from concept to production.',
			'Managed the CI/CD pipeline and hosting infrastructure; iterated rapidly on design and user journey from stakeholder feedback.',
		],
		href: 'https://retconconsulting.com',
		linkLabel: 'Visit site',
	},
	{
		name: 'YoyoCollector.com',
		tagline: 'Collection management database platform',
		year: '2025',
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'SCSS',
			'MySQL',
			'Railway',
			'Netlify',
		],
		bullets: [
			'Full-stack collection management platform with authentication, dynamic data retrieval, and public sharing, with iterative improvements shipped through direct end-user collaboration.',
			'Designed a normalized MySQL schema supporting complex joins, real-time operations, and user-scoped data views; optimized queries as data volume grew.',
		],
		href: 'https://yoyocollector.com',
		linkLabel: 'Visit site',
	},
];

export default projects;
