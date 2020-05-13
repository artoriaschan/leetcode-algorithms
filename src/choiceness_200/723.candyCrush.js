/**
 * @param {number[][]} board
 * @return {number[][]}
 * 思路:
 *  特殊用途的网络 Ad-Hoc
 *  步骤:
 *    粉碎糖果
 *    掉落糖果
 */
// eslint-disable-next-line no-unused-vars
function candyCrush(board) {
  let R = board.length;
  let C = board[0].length;
  let todo = false;
  // 找同一行的三个相连的糖果, 并标记为负数
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c + 2 < C; ++c) {
      let v = Math.abs(board[r][c]);
      if (v !== 0 && v === Math.abs(board[r][c + 1]) && v === Math.abs(board[r][c + 2])) {
        board[r][c] = -v;
        board[r][c + 1] = -v;
        board[r][c + 2] = -v;
        todo = true;
      }
    }
  }
  // 找同一列的三个相连的糖果, 并标记为负数
  for (let r = 0; r + 2 < R; ++r) {
    for (let c = 0; c < C; ++c) {
      let v = Math.abs(board[r][c]);
      if (v !== 0 && v === Math.abs(board[r + 1][c]) && v === Math.abs(board[r + 2][c])) {
        board[r][c] = -v;
        board[r + 1][c] = -v;
        board[r + 2][c] = -v;
        todo = true;
      }
    }
  }
  // 掉落糖果, board[r][c] > 0
  for (let c = 0; c < C; ++c) {
    let wr = R - 1;
    for (let r = R - 1; r >= 0; --r) {
      if (board[r][c] > 0) {
        board[wr--][c] = board[r][c];
      }
    }
    while (wr >= 0) {
      board[wr--][c] = 0;
    }
  }

  return todo ? candyCrush(board) : board;
}
