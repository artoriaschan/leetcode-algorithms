/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 11:15:17
 * @LastEditTime: 2021-09-17 11:25:02
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/spiral-matrix-ii/
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  let matrix = Array.from(new Array(n), () => new Array(n).fill(0));
  let curNum = 1;
  const maxNum = n * n;
  let row = 0;
  let column = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 右下左上

  let directionIndex = 0;
  while (curNum <= maxNum) {
    matrix[row][column] = curNum;
    curNum++;
    const nextRow = row + directions[directionIndex][0];
    const nextColumn = column + directions[directionIndex][1];
    if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
      directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return matrix;
}

console.log(generateMatrix(12));
