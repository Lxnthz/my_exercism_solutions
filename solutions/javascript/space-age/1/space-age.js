//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_YEAR_SECONDS = 31557600;
const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export const age = (planet, time) => {
  const p = planet.toLowerCase();   // normalize input
  const period = ORBITAL_PERIOD[p]; // lookup orbital period

  if (!period) {
    // Planet not found, handle gracefully
    throw new Error("not a planet");
  }

  const ageEarth = time / EARTH_YEAR_SECONDS;
  const planetAge = ageEarth / period;

  // Round to 2 decimals and return as number
  return Math.round(planetAge * 100) / 100;
};
