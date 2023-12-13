import TrackCard from './TrackCard'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom' // A
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import useSpotifyGetTracksData from '../hooks/useSpotifyGetTracksData'
import CircleReveal from './CircleReveal'
import ResultMessage from './ResultMessage'
import LoadingMatchCard from './LoadingMatchCard'
import useSwipeScore from '../hooks/useSwipe'
import useFirestoreData from '../hooks/useFirestoreData'

const ListOfTracks = () => {
	const { docId } = useParams() // Obtiene el ID del documento de la URL

	const { token } = useSpotifyAuth()

	const { trackIds } = useFirestoreData(docId)

	const { data, loading, error } = useSpotifyGetTracksData(token, trackIds)

	const { currentIndex, score, handleDragEnd } = useSwipeScore(0, data.length)

	const x = useMotionValue(0)

	const background = useTransform(
		x,
		[-100, 0, 100],
		['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
	)

	const rotate = useTransform(x, [-100, 100], [-10, 10])

	if (loading) return <LoadingMatchCard />
	if (error) return <p>{error.message}</p>

	console.log(data.length)
	console.log(currentIndex)

	return (
		<>
			{data.length <= currentIndex ? (
				<CircleReveal>
					<ResultMessage score={score} />
				</CircleReveal>
			) : (
				<div>
					<motion.div
						style={{ background }}
						className='min-h-screen min-w-full flex flex-col justify-center items-center'
					>
						<div className='border-4 rounded-md p-4 mt-14'>
							<motion.div
								drag='x'
								dragConstraints={{ left: 0, right: 0 }}
								style={{ x, rotate }}
								onDragEnd={handleDragEnd}
							>
								<TrackCard trackData={data[currentIndex]} />
							</motion.div>
						</div>
					</motion.div>
				</div>
			)}
		</>
	)
}

export default ListOfTracks
