export type Token = string

export interface SpotifyApiResponse {
	albums: SpotifyAlbumsResponse
	artists: SpotifyArtistsResponse
	tracks: SpotifyTracksResponse
}

interface SpotifyAlbumsResponse {
	items: Album[]
}

interface SpotifyArtistsResponse {
	items: Artist[]
}

interface SpotifyTracksResponse {
	items: Track[]
}

interface Album {
	id: string
	name: string
	images: Image[]
	artists: Artist[]
}

interface Artist {
	id: string
	name: string
}

interface Track {
	id: string
	name: string
	preview_url: string
	album: Album
	artists: Artist[]
}

interface Image {
	url: string
	height: number
	width: number
}

interface SelectedTrack {
	id: string
	title: string
	artist: string
	coverImage: Album | string
}

export type Score = number

interface ScoreMessages {
	[key: number]: string
}

interface ScoreMessageProps {
	score: Score
}
