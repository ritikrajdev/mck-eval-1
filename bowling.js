function getFrames(rolls) {
  if (!Array.isArray(rolls) || rolls.some(isNaN))
    throw TypeError('Unsupported Type');

  const frames = [];

  for (let i = 0; i < rolls.length; i += 2) {
    if (i + 1 < rolls.length && (rolls[i] == 10 || rolls[i + 1] == 10)) {
      // strike
      frames.push([rolls[i], rolls[i + 1], rolls[i + 2]]);
      i -= rolls[i] == 10;
    }
    else if (i + 1 < rolls.length && rolls[i] + rolls[i + 1] == 10) {
      // spare
      frames.push([rolls[i], rolls[i + 1], rolls[i + 2]]);
    }
    else if (i + 1 < rolls.length && rolls[i] + rolls[i + 1] < 10) {
      // open
      frames.push([rolls[i], rolls[i + 1]]);
    }
    else throw Error('Invalid Input');

    if (frames.length == 10)
      break;
  }

  return frames;
}

function getScores(rolls) {
  return getFrames(rolls).map(listOfScores => listOfScores.reduce((acc, item) => acc + item, 0));
}

function getScore(rolls) {
  return getScores(rolls).reduce((acc, score) => acc + score);
}

function getBestScore(rolls) {
  return Math.max(...getScores(rolls));
}

module.exports = {
  getScore,
  getBestScore,
};

