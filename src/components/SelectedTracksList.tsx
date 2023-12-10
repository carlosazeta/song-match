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
		<div>
			<h4>Canciones añadidas</h4>
			<ul className='list-none p-0 m-0'>
				{tracks.map((track) => (
					<li
						key={track.id}
						className='flex justify-between items-center p-2 border-b border-gray-300'
					>
						<span className='text-sm text-gray-700'>
							{track.title} - {track.artist}
						</span>
						<button
							onClick={() => deleteTrack(track.id)}
							className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'
						>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SelectedTracksList
