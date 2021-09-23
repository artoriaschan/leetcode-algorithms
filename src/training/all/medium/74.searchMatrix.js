/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 14:56:33
 * @LastEditTime: 2021-09-23 15:18:04
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/search-a-2d-matrix/
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = 0;
  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] >= target) {
      row = i;
      break;
    }
  }
  console.log(row);
  for (let j = 0; j < n; j++) {
    if (matrix[row][j] === target) return true;
  }
  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

console.log(searchMatrix(matrix, target));
