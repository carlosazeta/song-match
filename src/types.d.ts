export type Token = string

export interface SpotifyApiResponse {
	albums: SpotifyAlbumsResponse
	artists: SpotifyArtistsResponse
	tracks: SpotifyTracksResponse
}

interface SpotifyAlbumsResponse {
	items: Album[]
	// Puedes añadir aquí otros campos relevantes de la respuesta, como 'href', 'limit', etc.
}

interface SpotifyArtistsResponse {
	items: Artist[]
	// Campos adicionales según sea necesario
}

interface SpotifyTracksResponse {
	items: Track[]
	// Campos adicionales según sea necesario
}

interface Album {
	id: string
	name: string
	images: Image[]
	artists: Artist[]
	// Otros campos del álbum si es necesario
}

interface Artist {
	id: string
	name: string
	// Otros campos del artista si es necesario
}

interface Track {
	id: string
	name: string
	preview_url: string
	album: Album
	artists: Artist[]
	// Otros campos del track si es necesario
}

interface Image {
	url: string
	height: number
	width: number
}
