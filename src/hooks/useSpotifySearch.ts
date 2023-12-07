import { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyApiResponse, Token } from '../types'

const useSpotifyApi = (token: Token, searchValue: string) => {
	const [data, setData] = useState<SpotifyApiResponse | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/search?q=${encodeURIComponent(
						searchValue
					)}&type=album,track,artist&limit=5`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setData(response.data)
			} catch (err) {
				setError(err as Error)
			} finally {
				setLoading(false)
			}
		}

		if (searchValue.trim()) {
			setLoading(true) // Iniciar carga solo cuando hay un valor de búsqueda
			fetchData()
		} else {
			setData(null)
			setLoading(false) // Importante establecer la carga en false cuando no hay búsqueda
		}
	}, [searchValue, token])

	return { data, loading, error }
}

export default useSpotifyApi
