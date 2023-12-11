import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import SearchList from './components/SearchList'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApiSearch from './hooks/useSpotifySearch'
import { SelectedTrack } from './types'
import SelectedTracksList from './components/SelectedTracksList'
import Header from './components/Header'
import Arrow from './components/Arrow'

function App() {
	const [songSearched, setSongSearched] = useState<string>('')
	const [selectedTracks, setSelectedTracks] = useState<SelectedTrack[]>([])

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyApiSearch(token, songSearched)

	const handleSelectTrack = (track: SelectedTrack) => {
		if (selectedTracks.length < 10) {
			setSelectedTracks([...selectedTracks, track])
		} else {
			console.log('Limite Excedido')
		}
	}

	const deleteTrack = (id: string) => {
		const newSelectedTracks = selectedTracks.filter(
			(selectedTrack) => selectedTrack.id !== id
		)
		setSelectedTracks(newSelectedTracks)
	}

	return (
		<div className='flex flex-col min-h-screen px-4 bg-green-300'>
			<Header />
			<Arrow />
			<div className='flex items-center justify-center h-1/2'>
				<Search searchSong={setSongSearched} />
			</div>

			<div className='overflow-auto h-1/2'>
				<SearchList tracks={data} onSelectTrack={handleSelectTrack} />
				<SelectedTracksList tracks={selectedTracks} deleteTrack={deleteTrack} />
			</div>
		</div>
	)
}

export default App
