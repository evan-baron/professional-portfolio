'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import projects from '@/lib/data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './projects.module.scss';

const accents = ['accentA', 'accentB', 'accentC'] as const;

const Projects = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		slidesToScroll: 1,
		breakpoints: {
			'(max-width: 900px)': { active: false },
		},
	});

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallback((api: EmblaCarouselType) => {
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		// eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial state from the embla instance, per embla's own integration pattern
		onSelect(emblaApi);
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
	}, [emblaApi, onSelect]);

	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.inner}>
				<SectionHeading index='04' title='Projects' />

				<div className={styles.carousel}>
					<button
						type='button'
						className={`${styles.navButton} ${styles.navPrev}`}
						onClick={() => emblaApi?.scrollPrev()}
						disabled={!canScrollPrev}
						aria-label='Scroll to previous project'
					>
						<FiChevronLeft />
					</button>

					<div className={styles.viewport} ref={emblaRef}>
						<div className={styles.track}>
							{projects.map((project, i) => (
								<div className={styles.slide} key={project.name}>
									<Reveal delay={i * 0.08} className={styles.reveal}>
										<Link
											href={project.href}
											target='_blank'
											rel='noreferrer noopener'
											className={`${styles.card} ${styles[accents[i % accents.length]]}`}
										>
											<div className={styles.cardHead}>
												<h3 className={styles.name}>{project.name}</h3>
											</div>
											<p className={styles.tagline}>{project.tagline}</p>

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
										</Link>
									</Reveal>
								</div>
							))}
						</div>
					</div>

					<button
						type='button'
						className={`${styles.navButton} ${styles.navNext}`}
						onClick={() => emblaApi?.scrollNext()}
						disabled={!canScrollNext}
						aria-label='Scroll to next project'
					>
						<FiChevronRight />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
