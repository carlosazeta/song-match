import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import SearchList from './components/SearchList'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApi from './hooks/useSpotifySearch'

function App() {
	const [searchValue, setSearchValue] = useState<string>('')
	const token = useSpotifyAuth()
	const { data, loading, error } = useSpotifyApi(token, searchValue)

	console.log(data)

	if (loading) return <p>Loading...</p>

	return (
		<>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			{!loading && data && <SearchList tracks={data.tracks.items} />}
		</>
	)
}

export default App
