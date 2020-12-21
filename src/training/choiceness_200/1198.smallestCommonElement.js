/**
 * @param {number[][]} mat
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function smallestCommonElement(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let map = new Map();
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (map.has(mat[row][col])) map.set(mat[row][col], map.get(mat[row][col]) + 1);
      else map.set(mat[row][col], 1);
    }
  }
  let ans = -1;
  for (let [k, v] of map) {
    if (v >= rows) {
      if (ans === -1 || ans > k) {
        ans = k;
      }
    }
  }
  return ans;
}
