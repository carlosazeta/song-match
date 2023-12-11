import React, { useEffect, useState } from 'react'
import { SelectedTrack } from '../types'

interface LinkToShareProps {
	selectedTracks: SelectedTrack[]
}

const LinkToShare: React.FC<LinkToShareProps> = ({ selectedTracks }) => {
	const [link, setLink] = useState<string>('')

	useEffect(() => {
		const ids = selectedTracks
			.map((selectedTrack: SelectedTrack) => selectedTrack.id)
			.join(',')
		setLink(`http://localhost:5173/${ids}`)
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
