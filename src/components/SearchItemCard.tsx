type SearchItemCardProps = {
	trackName: string
	artistName: string
}

function SearchItemCard({ trackName, artistName }: SearchItemCardProps) {
	return (
		<div>
			<li>{trackName}</li>
			<li>{artistName}</li>
		</div>
	)
}

export default SearchItemCard
