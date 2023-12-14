import React, { useEffect, useState } from 'react'
import { SelectedTrack } from '../types'

interface RemainingTracksProps {
	selectedTracks: SelectedTrack[]
}

const RemainingTracks: React.FC<RemainingTracksProps> = ({
	selectedTracks,
}) => {
	const maxTracks = 5
	const [animationStyle, setAnimationStyle] = useState({})

	useEffect(() => {
		setAnimationStyle({
			backgroundSize: '100% 100%',
			animation: 'highlight 0.5s ease-in-out',
		})

		const timer = setTimeout(() => {
			setAnimationStyle({})
		}, 500)

		return () => clearTimeout(timer)
	}, [selectedTracks.length])

	const message =
		selectedTracks.length < maxTracks
			? `There are ${maxTracks - selectedTracks.length} songs left to add`
			: 'Ready! Your share link is now available below'

	return (
		<div className='text-center pt-4'>
			<span style={animationStyle} className='highlight'>
				{message}
			</span>
		</div>
	)
}

export default RemainingTracks
