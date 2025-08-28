// TASK NUMBER ONE
export function totalBirdCount(birdsPerDay) {
  let res = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    res += birdsPerDay[i];
  }
  return res;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let res = 0;
  let startIndex = (7 * week) - 1;
  let endIndex = startIndex - 6;
  for(let i = startIndex; i >= endIndex; i--) {
    res += birdsPerDay[i];
  }
  return res;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}