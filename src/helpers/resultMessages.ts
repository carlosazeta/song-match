import { Score, ScoreMessages } from '../types'

const scoreMessages: ScoreMessages = {
	0: [
		'Oops, musical misfire! Better stick to friendship, or find a better Cupid!',
		'Musical mismatch! Maybe you two are better off in different playlists.',
		'Like a violin at a metal concert. Better enjoy the music solo!',
		"Musical planets not aligning? You're the DJ, they're the rockstar – worlds apart!",
		'Like mixing jazz with heavy metal – better enjoy your own solo!',
		'Musical misfits! Might as well be playing air guitar in a silent disco.',
		'Zero harmony. It’s like a broken record, but the record is on fire.',
		'Your music tastes just ghosted each other. Time for a solo tour!',
	],
	1: [
		"A glimmer of hope, but you're not quite in tune. Maybe start as concert buddies?",
		'One or two shared tracks, but mostly playing solo. Keep exploring!',
		'Some harmony, but mostly discord. You might need a different genre!',
		'Barely hitting the same note, but mostly off-key. More tuning needed!',
		'Caught a beat, but lost the rhythm. Are you even listening to the same station?',
		'One shared song, but the rest is noise. Maybe stick to texting?',
		'Like a one-hit-wonder – nice try, but not making the charts.',
		'A musical blind date gone meh. Maybe try a different genre?',
	],
	2: [
		'Not quite a band yet, but there are a few shared hits!',
		'Your musical connection is budding – like a band in the garage phase.',
		'Halfway to a playlist party! You share some beats, but not a full rhythm.',
		'Halfway to a band, but still searching for that lead singer.',
		'Your playlists flirt a bit, but it’s not love at first song.',
		'A few shared tracks, but it’s like a shuffle mode gone rogue.',
		'Musical buddies in the making? Or just stuck in the elevator music phase.',
		'Hit a few right notes, but mostly remixes that no one asked for.',
	],
	3: [
		'Now we’re jamming! You’ve got some tunes in common.',
		'Like a well-coordinated dance, your musical tastes align quite nicely!',
		'You share a good beat! Time to create a shared playlist?',
		'Now we’re vibing! Not a perfect concert, but definitely worth a ticket.',
		'Your music tastes just high-fived each other. Keep the beat going!',
		'Like a good cover band – not the original, but pretty darn close.',
		'You’re the opening act, and they’re the headliner. Almost stealing the show!',
		'Your playlists should go on a date. You could tag along.',
	],
	4: [
		'Almost a perfect band! You rock out to the same rhythm.',
		'So in tune! Is it time for a duet?',
		'Just one track short of a greatest hits album! You’re musically aligned!',
		'Musical soulmates on the horizon! Just one more verse to nail it.',
		'So close to a duet, you can almost hear the applause.',
		'Your tunes are in sync! Are you secretly sharing earbuds?',
		'Rock and roll! Your music tastes are almost writing love songs.',
		'Like a perfect playlist on a road trip – just cruising on the same tunes.',
	],
	5: [
		'Perfect harmony! Start a band already!',
		'It’s a match made in music heaven! Totally in sync.',
		'Concert companions for life – your tastes are a total match!',
		'Music gods have spoken – it’s a perfect harmony!',
		'Your playlists just eloped. When’s the musical honeymoon?',
		'Total sync! Are you sure you’re not the same person?',
		'It’s a full-blown music festival in here! Absolute tune-mates.',
		'You hit the musical jackpot! Time to start your own band!',
	],
}

export const getFinalMessage = (score: Score) => {
	const messages = scoreMessages[score]
	const randomIndex = Math.floor(Math.random() * messages.length)
	return messages[randomIndex]
}
