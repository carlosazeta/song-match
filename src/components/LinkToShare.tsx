import React, { useEffect, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebaseConfig'
import { SelectedTrack } from '../types'

interface LinkToShareProps {
	selectedTracks: SelectedTrack[]
}

const LinkToShare: React.FC<LinkToShareProps> = ({ selectedTracks }) => {
	const [link, setLink] = useState<string>('')

	useEffect(() => {
		if (selectedTracks.length === 5) {
			const saveTracks = async () => {
				try {
					const docRef = await addDoc(collection(db, 'tracks'), {
						ids: selectedTracks.map((track) => track.id),
					})
					setLink(`http://localhost:5173/tracks/${docRef.id}`)
				} catch (error) {
					console.error('Error adding document: ', error)
				}
			}

			saveTracks()
		}
	}, [selectedTracks])

	const copyToClipboard = () => {
		navigator.clipboard.writeText(link).then(
			() => {
				console.log('Link copied to clipboard!')
				// Aquí puedes manejar una notificación o un cambio de estado para indicar al usuario que el enlace ha sido copiado
			},
			(err) => {
				console.error('Failed to copy link: ', err)
			}
		)
	}

	return (
		<div className='flex items-center gap-2'>
			<input
				type='text'
				value={link}
				readOnly
				className='p-2 border border-gray-300 rounded-lg w-full'
			/>
			<button
				onClick={copyToClipboard}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				<span role='img' aria-label='copy'>
					📋
				</span>
			</button>
		</div>
	)
}

export default LinkToShare
