'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
	children: ReactNode;
	delay?: number;
	y?: number;
	className?: string;
	as?: 'div' | 'li';
};

const Reveal = ({ children, delay = 0, y = 22, className, as = 'div' }: RevealProps) => {
	const Component = motion[as];

	return (
		<Component
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</Component>
	);
};

export default Reveal;
