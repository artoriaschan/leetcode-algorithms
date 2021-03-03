/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  let mins = matrix.map(row => Math.min(...row));
  let maxs = matrix[0].map((item, colIndex) => Math.max(...matrix.map(row => row[colIndex])));
  return maxs.filter(item => mins.includes(item));
}
