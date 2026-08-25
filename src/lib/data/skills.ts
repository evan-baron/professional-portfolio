export type SkillGroup = {
	label: string;
	items: string[];
};

const skills: SkillGroup[] = [
	{
		label: 'Languages',
		items: ['TypeScript', 'JavaScript', 'SCSS', 'SQL'],
	},
	{
		label: 'Frameworks',
		items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Redux', 'Tailwind CSS'],
	},
	{
		label: 'Databases',
		items: ['PostgreSQL', 'MySQL', 'Neon', 'Prisma', 'Firebase / Firestore'],
	},
	{
		label: 'Cloud & DevOps',
		items: ['AWS', 'Vercel', 'Railway', 'Netlify', 'CI/CD', 'Git'],
	},
	{
		label: 'Tools & Libraries',
		items: [
			'VS Code',
			'Figma',
			'Cloudinary',
			'OAuth',
			'Auth0',
			'TanStack Query',
			'Zod',
			'Bootstrap',
			'Sanity.io',
		],
	},
];

export default skills;
