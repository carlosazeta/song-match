import TrackCard from './TrackCard'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebaseConfig'
import { useParams } from 'react-router-dom' // A
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import useSpotifyGetTracksData from '../hooks/useSpotifyGetTracksData'
import CircleReveal from './CircleReveal'
import ResultMessage from './ResultMessage'
import LoadingMatchCard from './LoadingMatchCard'

const ListOfTracks = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const [score, setScore] = useState(0)

	const [trackIds, setTrackIds] = useState([])

	const { docId } = useParams() // Obtiene el ID del documento de la URL

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyGetTracksData(token, trackIds)

	const x = useMotionValue(0)

	const background = useTransform(
		x,
		[-100, 0, 100],
		['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
	)

	const rotate = useTransform(x, [-100, 100], [-10, 10])

	const handleSwipeRight = () => {
		setScore(score + 1)
		setCurrentIndex(currentIndex + 1)
	}

	const handleSwipeLeft = () => {
		setCurrentIndex(currentIndex + 1)
	}

	const handleDragEnd = (
		_e: MouseEvent | TouchEvent | PointerEvent,
		{ offset }: PanInfo
	) => {
		const swipeThreshold = 90
		const userSwipe = offset.x

		if (userSwipe > swipeThreshold) {
			handleSwipeRight()
		} else if (userSwipe < -swipeThreshold) {
			handleSwipeLeft()
		}
	}

	useEffect(() => {
		const fetchTracks = async () => {
			if (docId) {
				try {
					const docRef = doc(db, 'tracks', docId)
					const docSnap = await getDoc(docRef)

					if (docSnap.exists()) {
						setTrackIds(docSnap.data().ids) // Asumiendo que el campo se llama 'ids'
					} else {
						console.log('No such document!')
					}
				} catch (error) {
					console.error('Error fetching document: ', error)
				}
			}
		}

		fetchTracks()
	}, [docId])

	if (loading) return <LoadingMatchCard />
	if (error) return <p>{error.message}</p>

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
