'use client';

import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './scrollToTop.module.scss';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const showAfter = Math.max(window.innerHeight / 2, 300);
			setVisible(window.scrollY > showAfter);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
			<button
				type='button'
				className={styles.button}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label='Scroll to top'
				tabIndex={visible ? 0 : -1}
			>
				<MdKeyboardArrowUp className={styles.icon} />
			</button>
			<span className={styles.tooltip} role='tooltip'>
				To the top
			</span>
		</div>
	);
};

export default ScrollToTop;
