import { useEffect, useState } from 'react'
import axios from 'axios'
import { Token, Track } from '../types'

const useSpotifyGetTracksData = (token: Token, trackIds: string[]) => {
	const [data, setData] = useState<Track[] | []>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			if (trackIds.length === 0) {
				setData([])
				setLoading(false)
				return
			}

			const idsParam = trackIds.join(',')
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/tracks?ids=${encodeURIComponent(
						idsParam
					)}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setData(response.data.tracks)
			} catch (err) {
				setError(err as Error)
			} finally {
				setLoading(false)
			}
		}

		setLoading(true) // Iniciar carga antes de la solicitud
		fetchData()
	}, [trackIds, token])

	return { data, loading, error }
}

export default useSpotifyGetTracksData
