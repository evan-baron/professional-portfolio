import Link from 'next/link';
import projects from '@/lib/data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './projects.module.scss';

const Projects = () => {
	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.inner}>
				<SectionHeading index='04' title='Projects' />

				<ol className={styles.list}>
					{projects.map((project, i) => (
						<Reveal as='li' key={project.name} delay={i * 0.08} className={styles.entry}>
							<span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>

							<div className={styles.content}>
								<div className={styles.head}>
									<h3 className={styles.name}>{project.name}</h3>
									<p className={styles.tagline}>{project.tagline}</p>
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

								<Link
									href={project.href}
									target='_blank'
									rel='noreferrer noopener'
									className={styles.link}
								>
									{project.linkLabel}
									<FiArrowUpRight />
									<span className='sr-only'> (opens in a new tab)</span>
								</Link>
							</div>
						</Reveal>
					))}
				</ol>
			</div>
		</section>
	);
};

export default Projects;
