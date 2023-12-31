import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import './App.css'
import { SelectedTrack } from './types'
import useSpotifyAuth from './hooks/useSpotifyAuth'
import useSpotifyApiSearch from './hooks/useSpotifySearch'
import Search from './components/Search'
import SearchList from './components/SearchList'
import SelectedTracksList from './components/SelectedTracksList'
import Header from './components/Header'
import Arrow from './components/Arrow'
import RemainingTracks from './components/RemainingTracks'
import LinkToShare from './components/LinkToShare'
import ListOfTracks from './components/ListOfTracks'

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
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div className='flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-300 to-violet-400'>
							<Header />
							<Arrow />
							<RemainingTracks selectedTracks={selectedTracks} />
							<div className='flex items-center justify-center h-1/2'>
								<Search
									searchSong={setSongSearched}
									selectedTracks={selectedTracks}
								/>
							</div>
							<div className='overflow-auto h-1/2'>
								<SearchList
									tracks={data}
									onSelectTrack={handleSelectTrack}
									selectedTracks={selectedTracks}
									setSongSearched={setSongSearched}
								/>
								{!!selectedTracks.length && (
									<SelectedTracksList
										tracks={selectedTracks}
										deleteTrack={deleteTrack}
									/>
								)}
							</div>
							{selectedTracks.length === 5 && (
								<LinkToShare selectedTracks={selectedTracks} />
							)}
						</div>
					}
				/>
				<Route path='/tracks/:docId' element={<ListOfTracks />} />
			</Routes>
			<Toaster />
		</Router>
	)
}

export default App
