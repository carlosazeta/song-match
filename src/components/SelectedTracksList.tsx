import { SelectedTrack } from '../types'

interface SelectedTrackListProps {
	tracks: SelectedTrack[]
	deleteTrack: (id: string) => void
}

const SelectedTracksList: React.FC<SelectedTrackListProps> = ({
	tracks,
	deleteTrack,
}) => {
	return (
		<ul>
			{tracks.map((track) => (
				<div key={track.id} className='flex'>
					<li>{track.title}</li>
					<button onClick={() => deleteTrack(track.id)}>X</button>
				</div>
			))}
		</ul>
	)
}

export default SelectedTracksList
