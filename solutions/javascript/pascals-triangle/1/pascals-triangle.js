/**
 * Generates the first N rows of Pascal's Triangle
 * @param {number} n - number of rows to generate
 * @returns {number[][]} - array of rows, each row is an array of numbers
 */
export const rows = (n) => {
  const triangle = [];

  for (let row = 0; row < n; row++) {
    // First row is always [1]
    if (row === 0) {
      triangle.push([1]);
      continue;
    }

    const newRow = [];
    for (let col = 0; col <= row; col++) {
      const left = triangle[row - 1][col - 1] || 0;
      const right = triangle[row - 1][col] || 0;
      newRow.push(left + right);
    }
    triangle.push(newRow);
  }

  return triangle;
};

