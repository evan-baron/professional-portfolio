import experience from '@/lib/data/experience';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './experience.module.scss';

const Experience = () => {
	return (
		<section id='experience' className={styles.experience}>
			<div className={styles.inner}>
				<SectionHeading index='03' title='Experience' />

				<ol className={styles.timeline}>
					{experience.map((item, i) => (
						<Reveal
							key={`${item.org}-${item.role}`}
							as='li'
							delay={i * 0.06}
							className={`${styles.item} ${item.featured ? styles.featured : styles.compact}`}
						>
							<div className={styles.marker} aria-hidden='true' />
							<div className={styles.content}>
								<div className={styles.headRow}>
									<div>
										<h3 className={styles.role}>{item.role}</h3>
										<p className={styles.org}>{item.org}</p>
									</div>
									<span className={styles.dates}>{item.dates}</span>
								</div>

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
				</ol>
			</div>
		</section>
	);
};

export default Experience;
