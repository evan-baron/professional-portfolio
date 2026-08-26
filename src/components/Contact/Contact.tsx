import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import ContactForm from './ContactForm';
import styles from './contact.module.scss';

const Contact = () => {
	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.inner}>
				<SectionHeading index='06' title='Contact' />

				<div className={styles.grid}>
					<Reveal className={styles.intro}>
						<h3 className={styles.heading}>
							Have a project in mind, or just want to talk shop?
						</h3>
						<p className={styles.subtext}>
							I&apos;m open to full-stack roles and select contract work. Reach
							out directly or send a message and I&apos;ll respond within a day
							or two.
						</p>

						<ul className={styles.details}>
							<li>
								<FiMail aria-hidden='true' />
								<Link href='mailto:egbaron@gmail.com'>egbaron@gmail.com</Link>
							</li>
							{/* <li>
								<FiPhone aria-hidden='true' />
								<Link href='tel:+13035883117'>303-588-3117</Link>
							</li> */}
							<li>
								<FiLinkedin aria-hidden='true' />
								<Link
									href='https://linkedin.com/in/evangbaron'
									target='_blank'
									rel='noreferrer noopener'
								>
									linkedin.com/in/evangbaron
								</Link>
							</li>
							<li>
								<FiGithub aria-hidden='true' />
								<Link
									href='https://github.com/evan-baron'
									target='_blank'
									rel='noreferrer noopener'
								>
									github.com/evan-baron
								</Link>
							</li>
						</ul>
					</Reveal>

					<Reveal delay={0.1} className={styles.formWrap}>
						<ContactForm />
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default Contact;
