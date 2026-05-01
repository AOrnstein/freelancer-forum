// === Helpers ===

/**
 * Choose a random intager between [min, max)
 * Assumes max > min
 * @param {number} min integer range lowerbound (inclusive)
 * @param {number} max integer range upperbound (exclusive by default)
 * @returns random integer value in the range
 */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 *
 * @param {T[]} array an array
 * @returns {T} random element in the array
 * @returns {undefined} undefined for an empty array
 */
function randomInArray(array) {
  return array[randomInRange(0, array.length)];
}
