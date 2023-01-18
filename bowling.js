function getFrames(rolls) {
	const frames = []

	for (let i = 0; i < rolls.length; i += 2) {
		console.log(i, rolls[i]);
		console.log(rolls[i], rolls[i+1])
		if (i + 1 < frames.length && (rolls[i] == 10 || rolls[i + 1] == 10)) {
			// strike
			frames.push([rolls[i], rolls[i + 1], rolls[i + 2]]);
			i -= rolls[i] == 10;
		}
		else if (i + 1 < frames.length && rolls[i] + rolls[i + 1] == 10) {
			// spare
			frames.push([rolls[i], rolls[i + 1], rolls[i + 2]]);
		}
		else if (i + 1 < frames.length && rolls[i] + rolls[i + 1] < 10) {
			// open
			frames.push([rolls[i], rolls[i + 1]]);
		}
		else throw Error('Invalid Input')
		console.log(frames[i], '\n')
	}

	return frames;
}

function getScores(rolls) {
	return getFrames(rolls).map(listOfScores => listOfScores.reduce((acc, item) => acc + item, 0))
}

function getScore(rolls) {
	return getScores(rolls).reduce((acc,score) => acc + score);
}

getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])

module.exports = {
	getFrames,
	getScores,
	getScore
}

