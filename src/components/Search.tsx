interface SearchProps {
	searchValue: string
	setSearchValue: (value: string) => void
}

function Search({ searchValue, setSearchValue }: SearchProps) {
	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	return <input type='text' value={searchValue} onChange={handleChangeSearch} />
}

export default Search
