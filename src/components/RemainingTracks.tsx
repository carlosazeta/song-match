import { SelectedTrack } from '../types'

interface RemainingTracksProps {
	selectedTracks: SelectedTrack[]
}

const RemainingTracks: React.FC<RemainingTracksProps> = ({
	selectedTracks,
}) => {
	const maxTracks = 5

	return selectedTracks.length < 5 ? (
		<span className='text-center pt-2'>
			There are {maxTracks - selectedTracks.length} songs left to add
		</span>
	) : (
		<span className='text-center pt-2'>
			Ready! Your share link is now available below
		</span>
	)
}

export default RemainingTracks
