import { Album, Artist, SelectedTrack, Track } from '../types'
import SearchItemCard from './SearchItemCard'

type SearchListProps = {
	tracks: Track[]
	selectedTracks: SelectedTrack[]
	onSelectTrack: (track: SelectedTrack) => void
	setSongSearched: (newSongSearched: string) => void
}

function SearchList({
	tracks,
	selectedTracks,
	onSelectTrack,
	setSongSearched,
}: SearchListProps) {
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
		<div className='px-4 flex justify-center'>
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
						selectedTracks={selectedTracks}
						setSongSearched={setSongSearched}
					/>
				))}
			</ul>
		</div>
	)
}

export default SearchList
