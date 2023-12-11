import { Album, SelectedTrack } from '../types'

type SearchItemCardProps = {
	id: string
	trackName: string
	artistName: string
	album: Album
	onSelectTrack: (track: SelectedTrack) => void
}

function SearchItemCard({
	id,
	trackName,
	artistName,
	album,
	onSelectTrack,
}: SearchItemCardProps) {
	const coverImageUrl = album.images[2]?.url

	const handleOnSelectTrack = () => {
		onSelectTrack({
			id,
			title: trackName,
			artist: artistName,
			coverImage: coverImageUrl,
		})
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
