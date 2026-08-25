export type Project = {
	name: string;
	tagline: string;
	stack: string[];
	bullets: string[];
	href: string;
	linkLabel: string;
};

const projects: Project[] = [
	{
		name: 'Repliably',
		tagline: 'Email automation & customer engagement platform',
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
		name: 'YoyoCollector.com',
		tagline: 'Collection management database platform',
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
	{
		name: 'Retcon Consulting',
		tagline: 'Digital consulting services web application',
		stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Netlify', 'Railway'],
		bullets: [
			'Performance-optimized marketing site with custom animations, full SEO implementation, and complete UI/UX ownership from concept to production.',
			'Managed the CI/CD pipeline and hosting infrastructure; iterated rapidly on design and user journey from stakeholder feedback.',
		],
		href: 'https://retconconsulting.com',
		linkLabel: 'Visit site',
	},
];

export default projects;
