/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 递归
 */
var solveSudoku = function(board) {
  /**
   * 记录某行，某位数字是否已经被摆放
   */
  let row = [[], [], [], [], [], [], [], [], [], []];
  /**
   * 记录某列，某位数字是否已经被摆放
   */
  let col = [[], [], [], [], [], [], [], [], [], []];
  /**
   * 记录某 3x3 宫格内，某位数字是否已经被摆放
   */
  let block = [[], [], [], [], [], [], [], [], [], []];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        let num = parseInt(board[i][j]);
        row[i][num] = true;
        col[j][num] = true;
        // blockIndex = i / 3 * 3 + j / 3，取整
        block[parseInt(i / 3) * 3 + parseInt(j / 3)][num] = true;
      }
    }
  }
  dfs(board, row, col, block, 0, 0);
};
var dfs = function(board, row, col, block, i, j) {
  // 找寻空位置
  while (board[i][j] != ".") {
    if (++j >= 9) {
      i++;
      j = 0;
    }
    if (i >= 9) {
      return true;
    }
  }
  for (let num = 1; num <= 9; num++) {
    let blockIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
    if (!row[i][num] && !col[j][num] && !block[blockIndex][num]) {
      // 递归
      board[i][j] = num + "";
      // console.log(`board[${i}][${j}]=${num}`)
      row[i][num] = true;
      col[j][num] = true;
      block[blockIndex][num] = true;
      if (dfs(board, row, col, block, i, j)) {
        return true;
      } else {
        // 回溯
        row[i][num] = false;
        col[j][num] = false;
        block[blockIndex][num] = false;
        board[i][j] = ".";
      }
    }
  }
  return false;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board);
