/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  //takes in parameter of assignments
  return Object.keys(assignments); //Object.keys is used to return the keys of "assignment".
}
let assignments = { quizzes: 10, labs: 20, projects: 30 }; //creates an object called "assignments"

console.log("assignment Types:, assignments");
/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */

function getPercentageScore(score) {
  let percentage = (score.received / score.max) * 100; //the received score is divided by the max score and then multiplied by 100.
  return Math.round(percentage); //percentage is rounded using Math.round method.
}
let score = { received: 40, max: 50 }; //creates an object called score.
let percentage = getPercentageScore(score); //getPercentageScore takes in the parameter of score.

console.log("Percentage Score:", percentage);
/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  //takes in two parameters; score1 and score2
  let percentage1 = Math.floor((score1.received / score1.max) * 100); //represents score received and maximum points possible for a score. Math.floor calculates percentage score received and divides by the max, then rounds down to the nearest number.
  let percentage2 = Math.floor((score2.received / score2.max) * 100); //same as line 39.

  return Math.max(percentage1, percentage2); //Math.max returns highest of the two percentage scores.
}
let score1 = { received: 8, max: 10 }; // 8 out of 10 points
let score2 = { received: 9, max: 10 }; // 9 out of 10 points

let theHighestNumber = getHighestOfTwoScores(score1, score2); //calls the function with the two scores. The result is given to theHighestNumber.

console.log(theHighestNumber);

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
