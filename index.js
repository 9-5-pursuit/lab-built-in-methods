const { TestWatcher } = require("jest");

/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  /**  created a new obj variable, gave the value of a built in method .key and return that new variable */
  let obj = Object.keys(assignments);
  return obj
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score,) {
  /** created 2 new variables and used the built in method Math.round to round a result to the nearest integer */
  let score1 = score.received 
  let score2 = score.max
  return Math.round(score1/ score2 * 100);
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
  /** use the same formula for the second fuction with the extra built in method math.max to takes in any amount of numbers and returns the highest one */
  return Math.max(Math.round(score1.received / score1.max * 100), Math.round(score2.received / score2.max * 100));
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
