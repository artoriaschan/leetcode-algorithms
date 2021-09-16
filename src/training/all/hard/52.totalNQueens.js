/* eslint-disable no-param-reassign */
/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-16 12:15:30
 * @LastEditTime: 2021-09-16 17:16:35
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/n-queens-ii/
 */
/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  let total = 0;
  const queens = new Array(n).fill(-1);
  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();

  function backtrack(queens, n, row, columns, diagonals1, diagonals2) {
    if (row === n) return total++;
    for (let i = 0; i < n; i++) {
      // 列
      if (columns.has(i)) {
        continue;
      }
      // 右斜对角
      let diagonal1 = row - i;
      if (diagonals1.has(diagonal1)) {
        continue;
      }
      // 左斜对角
      let diagonal2 = row + i;
      if (diagonals2.has(diagonal2)) {
        continue;
      }
      queens[row] = i;
      columns.add(i);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      backtrack(queens, n, row + 1, columns, diagonals1, diagonals2);
      queens[row] = -1;
      columns.delete(i);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }

  backtrack(queens, n, 0, columns, diagonals1, diagonals2);
  return total;
}
