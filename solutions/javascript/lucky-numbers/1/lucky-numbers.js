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
  const str = String(value);
  const arr = str.split("");
  const arrRev = str.split("").reverse();
  return (arr.join("") == arrRev.join(""));
  /*
    OTHER TRIED METHOD THAT DOES NOT WORK
    
    const arr = str.split("");
    const arrRev = arr.reverse();
    
    The old method does not work because arr.reverse() **mutates the original array** in place.
    That means arr and arrRev end up pointing to the **same reversed array**.
    As a result, comparing arr.join("") with arrRev.join("") always returns true,
    since they are actually the same array after reversal.
  */
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == null || input == undefined || input == '') { 
    // null already covers undefined and '' so its redundant, you can remove it
    return 'Required field';
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
