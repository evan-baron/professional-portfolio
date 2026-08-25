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
			<div className={styles.head}>
				<span className={styles.index}>{index}</span>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={styles.rule} aria-hidden='true' />
			{kicker && <p className={styles.kicker}>{kicker}</p>}
		</Reveal>
	);
};

export default SectionHeading;
