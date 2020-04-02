/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 思路:
 *  复制一份原始数组；
 *  根据复制数组中邻居细胞的状态来更新 board 中的细胞状态。
 */

// eslint-disable-next-line no-unused-vars
function gameOfLife(board) {
  // 八个方向的偏移量
  const idx = [0, 1, 0, -1, -1, -1, 1, 1];
  const jdx = [1, 0, -1, 0, 1, -1, 1, -1];

  // 数组副本
  const CopyBoard = board.map(ary => {
    // 值是基础类型（Number），不存在引用问题，直接解构比较方便
    return [...ary];
  });

  // 遍历每个细胞
  for (let i = 0; i < CopyBoard.length; i++) {
    for (let j = 0; j < CopyBoard[i].length; j++) {
      // 周边活细胞统计
      let liveAmount = 0;

      // 八个方向都走一遍
      for (let index = 0; index < 8; index++) {
        let x = i + idx[index];
        let y = j + jdx[index];

        // 边界规避
        if (x < 0 || y < 0 || x >= CopyBoard.length || y >= CopyBoard[i].length) continue;

        // 活细胞则计数加1
        liveAmount += CopyBoard[x][y] ? 1 : 0;
      }

      // 该位置细胞死活决策
      if (liveAmount < 2 || liveAmount > 3) {
        board[i][j] = 0;
      } else if (liveAmount <= 3 && CopyBoard[i][j]) {
        board[i][j] = 1;
      } else if (liveAmount === 3 && !CopyBoard[i][j]) {
        board[i][j] = 1;
      }
    }
  }
}
