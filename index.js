/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
//The function will take in an object with different types of assignments and return an array of the assignment types.
function getAssignmentTypes(assignments) {  
  return Object.keys(assignments)
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
//It converts raw scores into percentage scores. This function takes in a parameter called "score". The object "score" has two properties. They are "received" and "max". The property "received" is divided by "max", and then is multiplyed by 100 to get the result percentage. The result is rounded to the nearest integer using the "Math.round" function.
function getPercentageScore(score) {
  return Math.round((score.received / score.max) * 100)
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
//This function takes in two parameters: "score1" and "score2". Inside the function, it calls the "getPercentageScore" function on each score parameter to convert them to a percentage value, and then it uses the "Math.max" function to return the higher of the two percentage scores. Any two test scores will be converted to percentages, and then the higher of the two percentage scores will be returned.
function getHighestOfTwoScores(score1, score2) {
  return Math.max(getPercentageScore(score1), getPercentageScore(score2));
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
