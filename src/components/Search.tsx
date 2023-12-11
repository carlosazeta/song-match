import React, { useState, useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'
import { SelectedTrack } from '../types'

interface SearchProps {
	searchSong: (newSongSearched: string) => void
	selectedTracks: SelectedTrack[]
}

const Search: React.FC<SearchProps> = ({ searchSong, selectedTracks }) => {
	const [inputValue, setInputValue] = useState('')

	const debouncedSearch = useCallback(
		debounce((nextValue: string) => {
			searchSong(nextValue)
		}, 300),
		[]
	)

	useEffect(() => {
		setInputValue('')
	}, [selectedTracks])

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
		<form
			onSubmit={handleOnSubmit}
			className='flex flex-col items-center justify-center w-full pt-4'
		>
			<input
				type='text'
				value={inputValue}
				onChange={handleChangeSearch}
				placeholder='Search a song...'
				className='w-60 p-2 m-2 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 transition duration-300 ease-in-out'
			/>
		</form>
	)
}

export default Search
