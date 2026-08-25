'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './hero.module.scss';

const facts = [
	{ value: '3', label: 'Full-stack apps shipped solo' },
	{ value: '$10M+', label: 'Enterprise deals closed' },
	{ value: '30+', label: 'Hours/week saved via automation built' },
	{ value: '10+', label: 'Years enterprise SaaS sales' },
];

const Hero = () => {
	return (
		<section id='top' className={styles.hero}>
			<div className={styles.inner}>
				<motion.p
					className={styles.kicker}
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
				>
					<span className={styles.kickerMark} aria-hidden='true' />
					Full-Stack Engineer &mdash; Denver, CO
				</motion.p>

				<motion.h1
					className={styles.name}
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
				>
					Evan
					<br />
					Baron
				</motion.h1>

				<motion.div
					className={styles.rule}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				/>

				<div className={styles.row}>
					<motion.div
						className={styles.copy}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className={styles.tagline}>
							I build production web applications end-to-end, from schema design
							to the pixels you click. Formerly enterprise SaaS sales, now
							shipping Next.js and TypeScript for a living.
						</p>

						<div className={styles.actions}>
							<Link href='#projects' className={styles.primaryCta}>
								View projects
							</Link>
							<Link href='#contact' className={styles.secondaryCta}>
								Get in touch
							</Link>
						</div>

						<div className={styles.social}>
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
					</motion.div>

					<motion.dl
						className={styles.facts}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.4 }}
					>
						{facts.map((fact) => (
							<div key={fact.label} className={styles.fact}>
								<dt>{fact.value}</dt>
								<dd>{fact.label}</dd>
							</div>
						))}
					</motion.dl>
				</div>
			</div>

			<Link
				href='#about'
				className={styles.scrollCue}
				aria-label='Scroll to about section'
			>
				<FiArrowDown />
			</Link>
		</section>
	);
};

export default Hero;
