// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // look up join() method developer.mozilla.org js documentation
  array1 = Number(array1.join(""));
  array2 = Number(array2.join(""));
  return array1 + array2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // This uses JavaScript spread syntax [...], referenced to mozilla developer docs
  return String(value) === [...String(value)].reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == null || input == '') { 
    // null already covers undefined so its redundant, you can remove it
    return 'Required field';
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
