/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  // Object method .keys() scans through the given assignments object for me to find all the "keys" in the object. By returning this operation I can return all the keys found in the given object even when I don't know what they are.
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
  // Math.round will round up or down as needed according to the number given. by combining this with my arithmetic to get the percentage of the score I can return a whole number as a percentage.
  return Math.round((score.received/score.max) * 100);
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
  // Math.max will scan through the assigned list of numbers found through my arithmetic and return the largest of the numbers. My artihmetic is the same as the function above, I simply separated the two equations to ensure the list would still be fed to the Math.max in the correct manner.
  return Math.max(Math.round(((score2.received/score2.max) * 100), ((score1.received/score1.max) * 100)));
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
