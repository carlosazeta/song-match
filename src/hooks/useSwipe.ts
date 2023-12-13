import { useCallback, useState } from 'react'
import { PanInfo } from 'framer-motion'

const useSwipeScore = (initialIndex: number, dataLength: number) => {
	const [currentIndex, setCurrentIndex] = useState<number>(initialIndex)
	const [score, setScore] = useState<number>(0)

	const handleSwipeRight = useCallback(() => {
		setScore((score) => score + 1)
		setCurrentIndex((index) => (index < dataLength ? index + 1 : index))
	}, [dataLength])

	const handleSwipeLeft = useCallback(() => {
		setCurrentIndex((index) => (index < dataLength ? index + 1 : index))
	}, [dataLength])

	const handleDragEnd = useCallback(
		(_e: MouseEvent | TouchEvent | PointerEvent, { offset }: PanInfo) => {
			const swipeThreshold = 90
			const userSwipe = offset.x

			if (userSwipe > swipeThreshold) {
				handleSwipeRight()
			} else if (userSwipe < -swipeThreshold) {
				handleSwipeLeft()
			}
		},
		[handleSwipeRight, handleSwipeLeft]
	)

	return {
		currentIndex,
		score,
		handleSwipeRight,
		handleSwipeLeft,
		handleDragEnd,
	}
}

export default useSwipeScore
