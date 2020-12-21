/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
function multiply(A, B) {
  let rows = A.length;
  let cols = B[0].length;
  let times = B.length;
  const ans = Array.from(new Array(rows), () => new Array(cols).fill(0));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 要得到这么多个元素
      for (let i = 0; i < times; i++) {
        ans[row][col] += A[row][i] * B[i][col];
      }
    }
  }
  return ans;
}
