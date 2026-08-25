'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './hero.module.scss';

const Hero = () => {
	return (
		<section id='top' className={styles.hero}>
			<div className={styles.inner}>
				<motion.div
					className={styles.copy}
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className={styles.kicker}>
						<span aria-hidden='true'>{'// '}</span>full-stack engineer
					</p>
					<h1 className={styles.name}>
						Evan <em>Baron</em>
					</h1>
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

				<motion.div
					className={styles.panel}
					initial={{ opacity: 0, y: 32, rotate: -1 }}
					animate={{ opacity: 1, y: 0, rotate: -1 }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				>
					<div className={styles.panelHead}>
						<span className={styles.dotRed} />
						<span className={styles.dotYellow} />
						<span className={styles.dotGreen} />
						<span className={styles.panelTitle}>evan-baron.ts</span>
					</div>
					<pre className={styles.panelBody}>
						<code>
							<span className={styles.ln}>1</span>
							<span className={styles.kw}>const</span> engineer = {'{'}
							{'\n'}
							<span className={styles.ln}>2</span>
							{'  '}
							<span className={styles.prop}>name</span>:{' '}
							<span className={styles.str}>&apos;Evan Baron&apos;</span>,{'\n'}
							<span className={styles.ln}>3</span>
							{'  '}
							<span className={styles.prop}>role</span>:{' '}
							<span className={styles.str}>
								&apos;Full-Stack Engineer&apos;
							</span>
							,{'\n'}
							<span className={styles.ln}>4</span>
							{'  '}
							<span className={styles.prop}>stack</span>: [
							<span className={styles.str}>&apos;Next.js&apos;</span>,{' '}
							<span className={styles.str}>&apos;React&apos;</span>,{'\n'}
							<span className={styles.ln}>5</span>
							{'          '}
							<span className={styles.str}>&apos;TypeScript&apos;</span>,{' '}
							<span className={styles.str}>&apos;Node.js&apos;</span>,{'\n'}
							<span className={styles.ln}>6</span>
							{'          '}
							<span className={styles.str}>&apos;PostgreSQL&apos;</span>],{'\n'}
							<span className={styles.ln}>7</span>
							{'  '}
							<span className={styles.prop}>focus</span>:{' '}
							<span className={styles.str}>
								&apos;end-to-end ownership&apos;
							</span>
							,{'\n'}
							<span className={styles.ln}>8</span>
							{'  '}
							<span className={styles.prop}>available</span>:{' '}
							<span className={styles.bool}>true</span>,{'\n'}
							<span className={styles.ln}>9</span>
							{'}'}
							<span className={styles.cursor} aria-hidden='true' />
						</code>
					</pre>
				</motion.div>
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
