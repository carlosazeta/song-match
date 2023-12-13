import { useEffect, useRef } from 'react'
import { Artist, Track } from '../types'

const TrackCard = ({ trackData }: { trackData: Track }) => {
	const audioRef = useRef<HTMLAudioElement>(null)

	const getArtistNames = (artists: Artist[]): string => {
		return artists.map((artist) => artist.name).join(' - ')
	}

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.06
		}
	}, [])

	return (
		<div className='text-center text-lg antialiased text-white font-medium'>
			<img
				className='rounded pointer-events-none'
				src={trackData.album.images[1].url}
				alt=''
			/>
			<p>{trackData.name}</p>
			<p className='max-w-[200px] mx-auto overflow-hidden text-ellipsis whitespace-nowrap'>
				{getArtistNames(trackData.artists)}
			</p>
			<div>
				<audio
					ref={audioRef}
					src={trackData.preview_url}
					preload='auto'
					autoPlay
				/>
			</div>
		</div>
	)
}

export default TrackCard
