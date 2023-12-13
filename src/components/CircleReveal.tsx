import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CircleRevealProps {
	children: ReactNode
}

const CircleReveal: React.FC<CircleRevealProps> = ({ children }) => {
	const variants = {
		hidden: {
			scale: 0,
			borderRadius: '50%',
		},
		visible: {
			scale: [0, 1.2, 1],
			transition: {
				duration: 1.5,
			},
		},
	}

	return (
		<motion.div
			className='absolute inset-0 flex justify-center items-center'
			initial='hidden'
			animate='visible'
			variants={variants}
		>
			{children}
		</motion.div>
	)
}

export default CircleReveal
