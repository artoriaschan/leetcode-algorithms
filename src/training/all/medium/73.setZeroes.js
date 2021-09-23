/* eslint-disable no-param-reassign */
/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 14:33:49
 * @LastEditTime: 2021-09-23 14:54:57
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/set-matrix-zeroes/
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let flagCol0 = false;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
    // 标记哪一行哪一列需要置0
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // 为了防止每一列的第一个元素被提前更新，我们需要从最后一行开始，倒序地处理矩阵元素。
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }
}
