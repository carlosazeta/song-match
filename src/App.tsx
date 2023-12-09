import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import SearchList from './components/SearchList'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApiSearch from './hooks/useSpotifySearch'
import { SelectedSong } from './types'

function App() {
	const [songSearched, setSongSearched] = useState<string>('')
	const [selectedSongs, setSelectedSongs] = useState<SelectedSong[]>([])

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyApiSearch(token, songSearched)

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4'>
			<div className='w-full max-w-md'>
				<Search searchSong={setSongSearched} />
				<SearchList tracks={data} addSong={setSelectedSongs} />
			</div>
		</div>
	)
}

export default App
