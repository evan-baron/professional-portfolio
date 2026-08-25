import experience from '@/lib/data/experience';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './experience.module.scss';

const Experience = () => {
	return (
		<section id='experience' className={styles.experience}>
			<div className={styles.inner}>
				<SectionHeading index='03' title='Experience' />

				<ol className={styles.log}>
					{experience.map((item, i) => (
						<Reveal
							key={`${item.org}-${item.role}`}
							as='li'
							delay={i * 0.06}
							className={`${styles.entry} ${item.featured ? styles.featured : styles.compact}`}
						>
							<div className={styles.dateCol}>{item.dates}</div>

							<div className={styles.content}>
								<h3 className={styles.role}>{item.role}</h3>
								<p className={styles.org}>{item.org}</p>

								{item.stack && (
									<ul className={styles.stack}>
										{item.stack.map((tech) => (
											<li key={tech}>{tech}</li>
										))}
									</ul>
								)}

								<ul className={styles.bullets}>
									{item.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}

					<Reveal
						as='li'
						delay={experience.length * 0.06}
						className={`${styles.entry} ${styles.compact}`}
					>
						<div className={styles.dateCol} />
						<p className={styles.foldNote}>
							Earlier roles in sales, omitted for brevity; happy to share on
							request.
						</p>
					</Reveal>
				</ol>
			</div>
		</section>
	);
};

export default Experience;
