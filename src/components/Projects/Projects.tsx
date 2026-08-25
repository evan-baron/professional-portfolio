import projects from '@/lib/data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './projects.module.scss';

const accents = ['accentA', 'accentB', 'accentC'] as const;

const Projects = () => {
	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.inner}>
				<SectionHeading index='04' title='Projects' />

				<div className={styles.grid}>
					{projects.map((project, i) => (
						<Reveal key={project.name} delay={i * 0.08}>
							<a
								href={project.href}
								target='_blank'
								rel='noreferrer noopener'
								className={`${styles.card} ${styles[accents[i % accents.length]]}`}
							>
								<div className={styles.cardHead}>
									<div>
										<h3 className={styles.name}>{project.name}</h3>
										<p className={styles.tagline}>{project.tagline}</p>
									</div>
									<span className={styles.dates}>{project.dates}</span>
								</div>

								<ul className={styles.bullets}>
									{project.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>

								<ul className={styles.stack}>
									{project.stack.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>

								<span className={styles.link}>
									{project.linkLabel}
									<FiArrowUpRight />
									<span className='sr-only'> (opens in a new tab)</span>
								</span>
							</a>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
