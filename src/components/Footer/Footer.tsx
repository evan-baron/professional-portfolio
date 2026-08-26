import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './footer.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<p className={styles.copy}>
					<span aria-hidden='true'>{'// '}</span>© {year} Evan Baron.
				</p>

				<div className={styles.links}>
					<Link
						href='https://github.com/evan-baron'
						target='_blank'
						rel='noreferrer noopener'
						aria-label='GitHub'
					>
						<FiGithub />
					</Link>
					<Link
						href='https://linkedin.com/in/evangbaron'
						target='_blank'
						rel='noreferrer noopener'
						aria-label='LinkedIn'
					>
						<FiLinkedin />
					</Link>
					<Link href='mailto:egbaron@gmail.com' aria-label='Email'>
						<FiMail />
					</Link>
				</div>

				<Link href='#top' className={styles.toTop}>
					Back to top ↑
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
