import { useEffect, useState } from 'react'
import axios from 'axios'
import { Token, Track } from '../types'

const useSpotifyApiSearch = (token: Token, songSearched: string) => {
	const [data, setData] = useState<Track[] | []>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/search?q=${encodeURIComponent(
						songSearched
					)}&type=album,track,artist&limit=5`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setData(response.data.tracks.items)
			} catch (err) {
				setError(err as Error)
			} finally {
				setLoading(false)
			}
		}

		if (songSearched.trim()) {
			setLoading(true)
			fetchData()
		} else {
			setData([])
			setLoading(false)
		}
	}, [songSearched, token])

	return { data, loading, error }
}

export default useSpotifyApiSearch
