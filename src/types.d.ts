export type Token = string

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
