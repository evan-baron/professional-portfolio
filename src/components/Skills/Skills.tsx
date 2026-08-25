import skills from '@/lib/data/skills';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import styles from './skills.module.scss';

const Skills = () => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.inner}>
				<SectionHeading index='02' title='Skills' />

				<div className={styles.groups}>
					{skills.map((group, i) => (
						<Reveal key={group.label} delay={i * 0.07} className={styles.group}>
							<h3 className={styles.groupLabel}>{group.label}</h3>
							<ul className={styles.chips}>
								{group.items.map((item) => (
									<li key={item} className={styles.chip}>
										{item}
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
