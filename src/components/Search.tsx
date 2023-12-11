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
			{/* <button className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
				Search
			</button> */}
		</form>
	)
}

export default Search
