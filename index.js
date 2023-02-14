/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
let categories = Object.keys(assignments);
return categories;
  //Returns all the categories from the argument passed 
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  let actualScore = score.received;
  let totalPoints = score.max;
  let rounded = Math.round((actualScore/totalPoints) * 100);
  //needs to return a rounded integer so need to use Math.round()
return rounded;
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
  let actualScore1 = score1.received;
  let totalPoints1 = score1.max;
  let actualScore2 = score2.received;
  let totalPoints2 = score2.max;
  let percent1 = (actualScore1/totalPoints1) * 100;
  let percent2 = (actualScore2/totalPoints2) * 100;
  // needs to grab the biggest of the two so i need to compare numbers
  // Math.max takes in any number 
  let topScore = Math.max(percent1, percent2);
  //then use Math.round and return that  final number 
  let rounded = Math.round(topScore);
  return rounded;

  
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
