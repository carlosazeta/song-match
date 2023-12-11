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
import RemainingTracks from './components/RemainingTracks'
import { Toaster, toast } from 'sonner'
import LinkToShare from './components/LinkToShare'
function App() {
	const [songSearched, setSongSearched] = useState<string>('')
	const [selectedTracks, setSelectedTracks] = useState<SelectedTrack[]>([])

	const { token } = useSpotifyAuth()

	const { data, loading, error } = useSpotifyApiSearch(token, songSearched)

	const handleSelectTrack = (track: SelectedTrack) => {
		if (selectedTracks.length < 5) {
			setSelectedTracks([...selectedTracks, track])
		} else {
			toast(`You have already added all the songs needed!`)
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
			<RemainingTracks selectedTracks={selectedTracks} />
			<div className='flex items-center justify-center h-1/2'>
				<Search searchSong={setSongSearched} selectedTracks={selectedTracks} />
			</div>

			<div className='overflow-auto h-1/2'>
				<SearchList
					tracks={data}
					onSelectTrack={handleSelectTrack}
					selectedTracks={selectedTracks}
					setSongSearched={setSongSearched}
				/>
				<SelectedTracksList tracks={selectedTracks} deleteTrack={deleteTrack} />
			</div>
			<LinkToShare selectedTracks={selectedTracks} />
			<Toaster />
		</div>
	)
}

export default App
