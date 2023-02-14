/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {

  return Object.keys(assignments);
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {

  let roundedInteger = 0;

  roundedInteger = score.received / score.max;

  // result = Math.floor(roundedInteger) * 100;

  return  Math.round(roundedInteger*100);
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
// console.log(score1.received)
  let highestScore1 = 0;
  let highestScore2 = 0;
  let highestOfTwoScores = 0;

  highestScore1 = (score1.received / score1.max) * 100;

  highestScore2 = (score2.received / score2.max) * 100;
  if (highestScore2 > highestScore1) {
    highestOfTwoScores = highestScore2
  } else {
    highestOfTwoScores = highestScore1
  }
  return Math.floor(highestOfTwoScores);
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
