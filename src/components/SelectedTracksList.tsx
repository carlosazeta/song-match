import { SelectedTrack } from '../types'
import DeleteSVG from '../assets/delete.svg'

interface SelectedTrackListProps {
	tracks: SelectedTrack[]
	deleteTrack: (id: string) => void
}

const SelectedTracksList: React.FC<SelectedTrackListProps> = ({
	tracks,
	deleteTrack,
}) => {
	return (
		<div className=' px-4 max-w-md mx-auto lg:max-w-xl'>
			<ul className='list-none pt-4 m-0'>
				{tracks.map((track) => (
					<li
						key={track.id}
						className='flex justify-between items-center p-2 border-b border-gray-300'
					>
						<span className='text-sm text-gray-700'>
							{track.title} - {track.artist}
						</span>
						<button onClick={() => deleteTrack(track.id)}>
							<img className='w-8' src={DeleteSVG} alt='' />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SelectedTracksList
