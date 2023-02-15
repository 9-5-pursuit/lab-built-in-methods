/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
// returns categories from assignments
// returns array of strings
// obj.keys(assignments)
function getAssignmentTypes(assignments) {

  return Object.keys(assignments);

}
// console.log(getAssignmentTypes());

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */

// returns rounded int representing percentage
// access score obj, divide received by max and math.round
function getPercentageScore(score) {

let scoreReceived = score.received;
let scoreMax = score.max

return Math.round((scoreReceived / scoreMax) * 100);

}
//console.log(getPercentageScore());

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */

// returns int that is the highest percentage btwn two scores
// if else - if one score is larger than the other, return first score
// should return highest percent, should return highest percent rounded up + down
// math.round and math.max
function getHighestOfTwoScores(score1, score2) {

// let scoreReceived = score1.received;
// let scoreMax = score1.max;

// if (score1 > score2) {
  // return Math.round((scoreRecieved / scoreMax) * 100);
//  } else if (score2 > score1) {

//  }

return Math.max(getPercentageScore(score1), getPercentageScore(score2));




}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
