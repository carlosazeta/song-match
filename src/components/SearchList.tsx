import { Track } from '../types'

type SearchListProps = {
	tracks: Track[]
}

function SearchList({ tracks }: SearchListProps) {
	if (!tracks || tracks.length === 0) {
		return <p>No hay resultados para mostrar.</p>
	}
	return (
		<ul>
			{tracks.map((track) => (
				<li>{track.name}</li>
			))}
		</ul>
	)
}

export default SearchList
