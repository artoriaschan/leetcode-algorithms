/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//
function spiralOrder(matrix) {
  if (matrix.length === 0) return [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let x = 0;
  let res = [];
  while (true) {
    for (let i = left; i <= right; i++) res[x++] = matrix[top][i];
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) res[x++] = matrix[i][right];
    if (left > --right) break;
    for (let i = right; i >= left; i--) res[x++] = matrix[bottom][i];
    if (top > --bottom) break;
    for (let i = bottom; i >= top; i--) res[x++] = matrix[i][left];
    if (++left > right) break;
  }
  return res;
}
