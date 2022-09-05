/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
  const m = mat.length;
  const n = mat[0].length;
  // 行累加总数
  const rowsSum = new Array(m).fill(0);
  // 列累加总数
  const colsSum = new Array(n).fill(0);
  // 累加
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j];
      colsSum[j] += mat[i][j];
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 判断
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
        res++;
      }
    }
  }
  return res;
}
