import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './education.module.scss';

const Education = () => {
	return (
		<section id='education' className={styles.education}>
			<div className={styles.inner}>
				<SectionHeading index='05' title='Education' />

				<Reveal className={styles.row}>
					<div>
						<h3 className={styles.degree}>
							Bachelor of Science, Business Marketing
						</h3>
						<p className={styles.school}>University of Colorado, Denver</p>
					</div>
					<span className={styles.year}>2014</span>
				</Reveal>

				<Reveal delay={0.08} className={styles.note}>
					/* The engineering skill set came after. Self-directed,
					project-driven, and stress-tested in production rather than in a
					classroom. */
				</Reveal>
			</div>
		</section>
	);
};

export default Education;
