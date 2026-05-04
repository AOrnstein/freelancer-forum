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

const averageFreelancerRate = averageRate();

function averageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

// === Components ===

/**
 *
 * @param {Freelancer} freelancer
 * @returns {HTMLLIElement}
 */
function Freelancer(freelancer) {
  const $freelancer = document.createElement("li");
  $freelancer.classList.add("freelancer");
  $freelancer.innerHTML = `
    <span class="freelancer-name">${freelancer.name}</span>
    <span class="freelancer-occupation">${freelancer.occupation}</span>
    <span class="freelancer-rate">${freelancer.rate}</span>
  `;
  return $freelancer;
}

/**
 *
 * @param {[]Freelancer} freelancers
 * @returns {HTMLLIElement}
 */
function FreelancerList(freelancers) {
  const $freelancerList = document.createElement("ul");
  $freelancerList.classList.add("freelancers");
  const $freelancers = freelancers.map(Freelancer);
  $freelancerList.append(...$freelancers);
  return $freelancerList;
}

/**
 *
 * @param {number} averageFreelancerRate
 * @returns {HTMLLIElement}
 */
function AverageFreelancerRate(averageFreelancerRate) {
  const $averageFreelancerRate = document.createElement("p");
  $averageFreelancerRate.classList.add("average-rate");
  $averageFreelancerRate.innerHTML = `The average rate is $${averageFreelancerRate}`;
  return $averageFreelancerRate;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageFreelancerRate></AverageFreelancerRate>
    <FreelancerList></FreelancerList>
  `;
  $app
    .querySelector("AverageFreelancerRate")
    .replaceWith(AverageFreelancerRate(averageFreelancerRate));
  $app.querySelector("FreelancerList").replaceWith(FreelancerList(freelancers));
}
render();
