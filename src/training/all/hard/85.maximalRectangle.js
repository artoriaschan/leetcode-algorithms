/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-25 16:42:27
 * @LastEditTime: 2021-09-25 16:53:13
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/maximal-rectangle/
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") {
        continue;
      }
      let width = left[i][j];
      let area = width;
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, left[k][j]);
        area = Math.max(area, (i - k + 1) * width);
      }
      ret = Math.max(ret, area);
    }
  }
  return ret;
}
