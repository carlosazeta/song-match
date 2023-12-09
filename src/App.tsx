import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import SearchList from './components/SearchList'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApiSearch from './hooks/useSpotifySearch'

function App() {
	const [songSearched, setSongSearched] = useState<string>('')

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyApiSearch(token, songSearched)

	const searchSong = (newSongSearched: string) => {
		setSongSearched(newSongSearched)
	}

	return (
		<>
			<Search searchSong={searchSong} />
			<SearchList tracks={data} />
		</>
	)
}

export default App
