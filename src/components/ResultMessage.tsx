import { getFinalMessage } from '../helpers/resultMessages'
import { ScoreMessageProps } from '../types'

const ResultMessage = ({ score }: ScoreMessageProps) => {
	const message = getFinalMessage(score)
	return (
		<div className='min-h-screen min-w-full bg-violet-600 flex flex-col justify-center items-center text-white text-center font-semibold antialiased'>
			<p className='text-4xl mb-8'>Conoces {score} canciones</p>
			<p className='p-8'>{message}</p>
		</div>
	)
}

export default ResultMessage
