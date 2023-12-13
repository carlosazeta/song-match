import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebaseConfig'

const useFirestoreData = (docId?: string) => {
	const [trackIds, setTrackIds] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		if (!docId) return

		const fetchTracks = async () => {
			setIsLoading(true)
			try {
				const docRef = doc(db, 'tracks', docId)
				const docSnap = await getDoc(docRef)

				if (docSnap.exists()) {
					setTrackIds(docSnap.data().ids)
				} else {
					console.log('No such document!')
				}
			} catch (err) {
				setError(err as Error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchTracks()
	}, [docId])

	return { trackIds, isLoading, error }
}

export default useFirestoreData
