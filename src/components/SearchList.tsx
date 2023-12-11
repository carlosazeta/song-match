import { Album, Artist, SelectedTrack, Track } from '../types'
import SearchItemCard from './SearchItemCard'

type SearchListProps = {
	tracks: Track[]
	onSelectTrack: (track: SelectedTrack) => void
}

function SearchList({ tracks, onSelectTrack }: SearchListProps) {
	if (!tracks || tracks.length === 0) {
		return <p>No hay resultados para mostrar.</p>
	}

	const getArtistName = (artists: Artist[]): string => {
		return artists.map((artist) => artist.name).join(', ')
	}

	const handleOnSelectTrack = (
		id: string,
		title: string,
		album: Album,
		artist: string
	) => {
		onSelectTrack({
			id,
			title,
			artist,
			coverImage: album,
		})
	}

	return (
		<div className='mt-10'>
			<ul className='list-none flex flex-col gap-3 w-full max-w-md'>
				{tracks.map((track) => (
					<SearchItemCard
						key={track.id}
						id={track.id}
						trackName={track.name}
						artistName={getArtistName(track.artists)}
						album={track.album}
						onSelectTrack={() =>
							handleOnSelectTrack(
								track.id,
								track.name,
								track.album,
								getArtistName(track.artists)
							)
						}
					/>
				))}
			</ul>
		</div>
	)
}

export default SearchList
