import { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyApiResponse, Token } from '../types'

const useSpotifyApi = (token: Token, searchValue: string) => {
	const [data, setData] = useState<SpotifyApiResponse | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/search?q=${searchValue}&type=album%2Ctrack%2Cartist&limit=5`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setData(response.data)
				setLoading(false)
			} catch (err) {
				setError(err as Error)
				setLoading(false)
			}
		}

		if (token) {
			fetchData()
		}
	}, [token, searchValue])

	return { data, loading, error }
}

export default useSpotifyApi
