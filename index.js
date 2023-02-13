/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  //store the keys in a variable by using the object.keys built in method
  const keys = Object.keys(assignments);
  return keys;
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  // Calculate the percentage score by dividing the `score.received` / `score.max` *100 and round.
  let percentage = (score.received / score.max) * 100;
  let roundedPercentage = Math.round(percentage);
  return roundedPercentage;
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
  //Calculate the percentage of score1 and score 2 by dividing + multiplying
  let scoreOne = Math.floor((score1.received / score1.max) * 100);
  let scoreTwo = Math.floor((score2.received / score2.max) * 100);
  // Compare the two percentages to determine which is higher
  if (scoreOne > scoreTwo) {
    return scoreOne;
  } else {
    return scoreTwo;
  }
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
