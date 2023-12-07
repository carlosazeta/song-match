export type Token = string

export interface SpotifyApiResponse {
	total: number
	items: SpotifyTrackItem[]
}

interface SpotifyTrackItem {
	track: Track
}

interface Track {
	album: Album
	artists: Artist[]
	name: string
	id: string
	preview_url: string
}

interface Album {
	images: Image[]
	name: string
	artists: Artist[]
}

export interface Artist {
	name: string
}
