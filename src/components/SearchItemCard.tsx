import { Album } from '../types'

type SearchItemCardProps = {
	trackName: string
	artistName: string
	album: Album
}

function SearchItemCard({ trackName, artistName, album }: SearchItemCardProps) {
	const coverImageUrl = album.images[2]?.url

	return (
		<div>
			<li className='flex gap-4 items-center bg-violet-500'>
				<img
					src={coverImageUrl}
					alt={`Cover image from ${trackName}`}
					className='w-12 h-12'
				/>
				<div className='max-w-xs truncate'>
					{trackName} - {artistName}
				</div>
			</li>
		</div>
	)
}

export default SearchItemCard
