import { Album, SelectedTrack } from '../types'
import { toast } from 'sonner'
type SearchItemCardProps = {
	id: string
	trackName: string
	artistName: string
	album: Album
	selectedTracks: SelectedTrack[]
	onSelectTrack: (track: SelectedTrack) => void
	setSongSearched: (newSongSearched: string) => void
}

function SearchItemCard({
	id,
	trackName,
	artistName,
	album,
	selectedTracks,
	onSelectTrack,
	setSongSearched,
}: SearchItemCardProps) {
	const coverImageUrl = album.images[2]?.url

	const checkRepeatedTrack = selectedTracks.some(
		(selectedTrack) => selectedTrack.id === id
	)
	const handleOnSelectTrack = () => {
		if (checkRepeatedTrack) {
			toast(`This song is already on your list`)
			return
		} else {
			onSelectTrack({
				id,
				title: trackName,
				artist: artistName,
				coverImage: coverImageUrl,
			})
			setSongSearched('')
		}
	}

	return (
		<li
			className='flex gap-3 items-center bg-green-200 cursor-pointer rounded-r-lg'
			onClick={handleOnSelectTrack}
		>
			<img
				src={coverImageUrl}
				alt={`Cover image from ${trackName}`}
				className='w-12 h-12'
			/>
			<div className='max-w-xs truncate'>
				{trackName} - {artistName}
			</div>
		</li>
	)
}

export default SearchItemCard
