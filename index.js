/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===

/**
 * Make a new Freelancer, undefined properties will be randomized
 * @param {string|undefined} name
 * @param {string|undefined} occupation
 * @param {number|undefined} rate
 * @returns {Freelancer}
 */
function makeFreelancer(name, occupation, rate) {
  return {
    name: name ?? randomInArray(NAMES),
    occupation: occupation ?? randomInArray(OCCUPATIONS),
    rate: rate ?? randomInRange(PRICE_RANGE.min, PRICE_RANGE.max),
  };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

// === Components ===

// === Render ===
