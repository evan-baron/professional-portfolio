import type { ReactNode } from 'react';
import experience from '@/lib/data/experience';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './experience.module.scss';

const dividerLabel = (featured: boolean) =>
	featured
		? 'Since transitioning to engineering'
		: 'Before the switch — enterprise sales';

// Minimal inline markup: wrap a phrase in **double asterisks** in the data
// file to render it emphasized, without pulling in a markdown dependency.
const renderEmphasis = (text: string) =>
	text
		.split(/\*\*(.+?)\*\*/g)
		.map((part, i) =>
			i % 2 === 1 ? (
				<strong key={i} className={styles.emphasis}>
					{part}
				</strong>
			) : (
				part
			)
		);

const Experience = () => {
	return (
		<section id='experience' className={styles.experience}>
			<div className={styles.inner}>
				<SectionHeading index='03' title='Experience' />

				<ol className={styles.timeline}>
					{experience.flatMap((item, i) => {
						const prev = experience[i - 1];
						const nodes: ReactNode[] = [];

						if (i === 0 || item.featured !== prev.featured) {
							nodes.push(
								<li
									key={`divider-${item.org}-${item.role}`}
									className={styles.divider}
									aria-hidden='true'
								>
									<span className={styles.dividerLabel}>
										{dividerLabel(item.featured)}
									</span>
									<span className={styles.dividerLine} />
								</li>
							);
						}

						nodes.push(
							<Reveal
								key={`${item.org}-${item.role}`}
								as='li'
								delay={i * 0.06}
								className={styles.item}
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
											<li key={bullet}>{renderEmphasis(bullet)}</li>
										))}
									</ul>
								</div>
							</Reveal>
						);

						return nodes;
					})}

					<Reveal
						as='li'
						delay={experience.length * 0.06}
						className={styles.item}
					>
						<p className={styles.foldNote}>
							<span aria-hidden='true'>{'/* '}</span>
							earlier roles in sales, omitted for brevity; happy to share on
							request
							<span aria-hidden='true'>{' */'}</span>
						</p>
					</Reveal>
				</ol>
			</div>
		</section>
	);
};

export default Experience;
