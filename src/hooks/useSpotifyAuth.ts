import { useState, useEffect } from 'react'
import axios from 'axios'
import { Token } from '../types'

const useSpotifyAuth = () => {
	const [token, setToken] = useState<Token>('')

	useEffect(() => {
		const client_id = import.meta.env.VITE_CLIENT_ID
		const client_secret = import.meta.env.VITE_CLIENT_SECRET

		const authOptions = {
			method: 'POST',
			url: 'https://accounts.spotify.com/api/token',
			headers: {
				Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: 'grant_type=client_credentials',
		}

		axios(authOptions)
			.then((response) => {
				setToken(response.data.access_token)
			})
			.catch((error) => {
				throw new Error(error.message)
			})
	}, [])

	return token
}

export default useSpotifyAuth
