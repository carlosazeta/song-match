import { useState } from 'react'

interface SearchProps {
	searchSong: (newSongSearched: string) => void
}

const Search: React.FC<SearchProps> = ({ searchSong }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		searchSong(searchTerm)
	}

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault
		setSearchTerm(searchTerm)
		searchSong(searchTerm)
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<input type='text' value={searchTerm} onChange={handleChangeSearch} />
			<button>Search</button>
		</form>
	)
}

export default Search
