'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.scss';

const LINKS = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' },
];

const Nav = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.documentElement.style.overflow = open ? 'hidden' : '';
	}, [open]);

	const handleNavClick = () => setOpen(false);

	return (
		<header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
			<div className={styles.inner}>
				<Link href='#top' className={styles.logo} aria-label='Evan Baron, home'>
					<span className={styles.logoMark}>EB</span>
					<span className={styles.logoStatus}>
						<span className={styles.dot} aria-hidden='true' />
						available for work
					</span>
				</Link>

				<nav className={styles.links} aria-label='Primary'>
					{LINKS.map((link, i) => (
						<Link key={link.href} href={link.href} className={styles.link}>
							<span className={styles.linkIndex}>0{i + 1}</span>
							{link.label}
						</Link>
					))}
				</nav>

				<Link href='#contact' className={styles.cta}>
					Get in touch
				</Link>

				<button
					type='button'
					className={styles.burger}
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					<span className={open ? styles.burgerOpen : ''} />
				</button>
			</div>

			<div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
				<nav aria-label='Mobile'>
					{LINKS.map((link, i) => (
						<Link
							key={link.href}
							href={link.href}
							className={styles.mobileLink}
							onClick={handleNavClick}
						>
							<span className={styles.linkIndex}>0{i + 1}</span>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Nav;
