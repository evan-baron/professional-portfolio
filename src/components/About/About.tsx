import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './about.module.scss';

const fileStatus = [
	{ key: 'Before', value: 'Enterprise SaaS sales' },
	{ key: 'Now', value: 'Full-stack engineer' },
	{ key: 'Focus', value: 'End-to-end ownership' },
	{ key: 'Status', value: 'Available' },
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
							technical capability into business value for executives.
							Somewhere in that work I got more interested in{' '}
							<em className={styles.em}>how</em> the product worked than in
							selling it, so I rebuilt myself as an engineer.
						</p>
						<p>
							Today I build production web applications end-to-end: schema
							design, API layers, authentication, and the pixels a user
							actually clicks. I&apos;m comfortable owning a feature from
							ideation through deployment, and the sales background still
							shows up: I scope well, I communicate with non-technical
							stakeholders without losing precision, and I care whether the
							thing actually ships.
						</p>
					</Reveal>

					<Reveal delay={0.12} className={styles.statusPanel}>
						<div className={styles.statusHead}>File status</div>
						<dl className={styles.statusList}>
							{fileStatus.map((row) => (
								<div key={row.key} className={styles.statusRow}>
									<dt>{row.key}</dt>
									<dd>{row.value}</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default About;
