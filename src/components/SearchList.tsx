import { Artist, Track } from '../types'
import SearchItemCard from './SearchItemCard'

type SearchListProps = {
	tracks: Track[]
}

function SearchList({ tracks }: SearchListProps) {
	if (!tracks || tracks.length === 0) {
		return <p>No hay resultados para mostrar.</p>
	}

	const getArtistName = (artists: Artist[]): string => {
		return artists.map((artist) => artist.name).join(', ')
	}

	return (
		<div className='mt-10'>
			<ul className='list-none flex flex-col gap-4'>
				{tracks.map((track) => (
					<SearchItemCard
						key={track.id}
						trackName={track.name}
						artistName={getArtistName(track.artists)}
						album={track.album}
					/>
				))}
			</ul>
		</div>
	)
}

export default SearchList
