/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 15:05:33
 * @LastEditTime: 2021-09-17 15:18:01
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/valid-sudoku/
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rows = Array.from(new Array(9), () => new Array(9).fill(0));
  const cols = Array.from(new Array(9), () => new Array(9).fill(0));
  const subs = Array.from(new Array(3), () => Array.from(new Array(3), () => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== ".") {
        const index = c.charCodeAt() - "0".charCodeAt() - 1;
        rows[i][index]++;
        cols[j][index]++;
        subs[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        if (rows[i][index] > 1 || cols[j][index] > 1 || subs[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false;
        }
      }
    }
  }
  return true;
}
