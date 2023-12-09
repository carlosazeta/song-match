import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import SearchList from './components/SearchList'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApiSearch from './hooks/useSpotifySearch'
import { SelectedTrack } from './types'
import SelectedTracksList from './components/SelectedTracksList'

function App() {
	const [songSearched, setSongSearched] = useState<string>('')
	const [selectedTracks, setSelectedTracks] = useState<SelectedTrack[]>([])

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyApiSearch(token, songSearched)

	const handleSelectTrack = (track: SelectedTrack) => {
		setSelectedTracks([...selectedTracks, track])
	}

	const deleteTrack = (id: string) => {
		const newSelectedTracks = selectedTracks.filter(
			(selectedTrack) => selectedTrack.id !== id
		)
		setSelectedTracks(newSelectedTracks)
	}

	console.log(selectedTracks)

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4'>
			<div className='w-full max-w-md'>
				<Search searchSong={setSongSearched} />
				<SearchList tracks={data} onSelectTrack={handleSelectTrack} />
				<SelectedTracksList tracks={selectedTracks} deleteTrack={deleteTrack} />
			</div>
		</div>
	)
}

export default App
