import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './footer.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<p className={styles.copy}>
					<span aria-hidden='true'>{'// '}</span>© {year} Evan Baron. Built with Next.js.
				</p>

				<div className={styles.links}>
					<a href='https://github.com/evan-baron' target='_blank' rel='noreferrer noopener' aria-label='GitHub'>
						<FiGithub />
					</a>
					<a
						href='https://linkedin.com/in/evangbaron'
						target='_blank'
						rel='noreferrer noopener'
						aria-label='LinkedIn'
					>
						<FiLinkedin />
					</a>
					<a href='mailto:egbaron@gmail.com' aria-label='Email'>
						<FiMail />
					</a>
				</div>

				<a href='#top' className={styles.toTop}>
					Back to top ↑
				</a>
			</div>
		</footer>
	);
};

export default Footer;
