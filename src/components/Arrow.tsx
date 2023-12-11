import ArrowDownSVG from '../assets/arrow-down.svg'

const Arrow: React.FC = () => {
	return (
		<div className='flex justify-center pt-4'>
			<img className=' w-16 h-16' src={ArrowDownSVG} alt='Arrow separator' />
		</div>
	)
}

export default Arrow
