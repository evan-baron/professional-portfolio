export type Experience = {
	role: string;
	org: string;
	dates: string;
	stack?: string[];
	bullets: string[];
	featured: boolean;
};

const experience: Experience[] = [
	{
		role: 'Full-Stack Engineer (Contract)',
		org: 'Infinite Outdoors',
		dates: 'Apr 2026 - Aug 2026',
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Sanity.io',
			'Firebase / Firestore',
		],
		bullets: [
			'**Reduced page-launch time for non-technical teams from days to minutes** by designing and shipping a custom CMS/page builder, empowering Marketing and Sales to launch and iterate on pages independently and eliminating the dev bottleneck from the content pipeline',
			'Enhanced marketability of properties for landowners and adventure seekers by building a user-facing live-camera platform with high-performance responsive media galleries and custom Lightbox views for **real-time field monitoring**',
			'**Optimized payload performance** by engineering an admin media management dashboard integrating and reshaping third-party API data across landowners, cameras, and photos',
			'Improved security posture of the application using RBAC and advanced state controls, including **multi-field URL-parameterized search/filtering** and **role-based gated permissions** for administrative user tiers',
		],
		featured: true,
	},
	{
		role: 'Technical Consultant',
		org: 'Retcon Consulting',
		dates: 'Jan 2025 - Present',
		stack: ['Next.js', 'React', 'TypeScript', 'SCSS'],
		bullets: [
			'Delivered a custom email automation platform with AI workflows, real-time CRUD operations, and dynamic React UI, **saving 20 FTE hours per user per week**',
			'**Drove 25% increase in customer acquisition** by providing GTM strategy and directional support for a B2B eCommerce platform',
			'Achieved **300% growth in traffic and sales inquiries** by providing UI/UX consulting and custom development for a local performer',
		],
		featured: true,
	},
	{
		role: 'Head of Business Development, North America',
		org: 'eClerx',
		dates: 'May 2023 - Oct 2024',
		bullets: [
			'Scoped a first-of-its-kind AI and RPA solution **reducing client operational workload by 20,000+ FTE hours/month**, translating complex technical capabilities into business value for executives.',
			'Identified **$5M+ in new growth opportunities** through cross-functional collaboration with engineering and delivery teams.',
			'**Closed $880K in new business**; promoted from Director of Business Development.',
		],
		featured: false,
	},
	{
		role: 'Regional Account Executive, Mid-Market',
		org: 'Smart Care',
		dates: 'May 2022 - May 2023',
		bullets: [
			'**Reduced ramp-up time for all new hires by 50%** by authoring a consultative sales playbook adopted company-wide.',
			'Developed an implementation workflow that enhanced customer product adoption; **closed $813K in new business**.',
		],
		featured: false,
	},
];

export default experience;
