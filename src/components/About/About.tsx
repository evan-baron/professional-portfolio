import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './about.module.scss';

const stats = [
	{ value: '3', label: 'Full-stack apps shipped solo, end-to-end' },
	{
		value: '30+ hrs',
		label: 'Saved per employee/week via automation platforms built',
	},
	{
		value: '$10M+',
		label: 'In enterprise business closed before the switch to code',
	},
];

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.inner}>
				<SectionHeading index='01' title='About' />

				<div className={styles.grid}>
					<Reveal className={styles.bio} delay={0.05}>
						<p>
							I spent ten years carrying enterprise SaaS quotas before I ever
							shipped a line of production code, closing seven-figure deals,
							writing the playbooks other reps ran on, and translating dense
							technical capability into business value for executives. Somewhere
							in that work I got more interested in{' '}
							<em className={styles.em}>how</em> the product worked than in
							selling it, so I rebuilt myself as an engineer.
						</p>
						<p>
							Today I build production web applications end-to-end: schema
							design, API layers, authentication, and the pixels a user actually
							clicks. I&apos;m comfortable owning a feature from ideation
							through deployment, and the sales background still shows up: I
							scope well, I communicate with non-technical stakeholders without
							losing precision, and I care whether the thing actually ships.
						</p>
					</Reveal>

					<div className={styles.stats}>
						{stats.map((stat, i) => (
							<Reveal
								key={stat.label}
								delay={0.1 + i * 0.08}
								className={styles.stat}
							>
								<span className={styles.statValue}>{stat.value}</span>
								<span className={styles.statLabel}>{stat.label}</span>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
