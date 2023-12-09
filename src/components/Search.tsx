import React, { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

interface SearchProps {
	searchSong: (newSongSearched: string) => void
}

const Search: React.FC<SearchProps> = ({ searchSong }) => {
	const [inputValue, setInputValue] = useState('')

	const debouncedSearch = useCallback(
		debounce((nextValue: string) => {
			searchSong(nextValue)
		}, 300),
		[]
	)

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.target.value
		setInputValue(newSearchTerm)
		debouncedSearch(newSearchTerm)
	}

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchSong(inputValue)
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				type='text'
				value={inputValue}
				onChange={handleChangeSearch}
				className='w-56'
			/>
			<button>Search</button>
		</form>
	)
}

export default Search
