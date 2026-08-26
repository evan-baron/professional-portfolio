import styles from './sectionHeading.module.scss';
import Reveal from '../Reveal/Reveal';

type SectionHeadingProps = {
	index: string;
	title: string;
	kicker?: string;
};

const SectionHeading = ({ index, title, kicker }: SectionHeadingProps) => {
	return (
		<Reveal className={styles.wrap}>
			<h2 className={styles.comment}>
				<span className={styles.index} aria-hidden='true'>
					{index}
				</span>
				{title}
			</h2>
			<div className={styles.rule} aria-hidden='true' />
			{kicker && <p className={styles.kicker}>{kicker}</p>}
		</Reveal>
	);
};

export default SectionHeading;
