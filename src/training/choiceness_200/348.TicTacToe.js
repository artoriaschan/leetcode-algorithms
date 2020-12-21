/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
// eslint-disable-next-line no-unused-vars
class TicTacToe {
  /**
   * Initialize your data structure here.
   * @param {number} n
   */
  constructor(n) {
    this.checkerboard = Array.from(new Array(n), () => new Array(n).fill(""));
  }

  /**
   * Player {player} makes a move at ({row}, {col}).
          @param row The row of the board.
          @param col The column of the board.
          @param player The player, can be either 1 or 2.
          @return The current winning condition, can be either:
                  0: No one wins.
                  1: Player 1 wins.
                  2: Player 2 wins. 
   * @param {number} row 
   * @param {number} col 
   * @param {number} player
   * @return {number}
   */
  move(row, col, player) {
    this.checkerboard[row][col] = player;
    // 横
    let win = true;
    for (let item of this.checkerboard[row]) {
      if (item !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return player;
    }
    // 竖
    win = true;
    for (let i = 0; i < this.checkerboard.length; i++) {
      if (this.checkerboard[i][col] !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return player;
    }
    // 左对角
    win = true;
    for (let i = 0; i < this.checkerboard.length; i++) {
      if (this.checkerboard[i][i] !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return player;
    }
    // 有对角
    win = true;
    for (let i = 0; i < this.checkerboard.length; i++) {
      if (this.checkerboard[i][this.checkerboard.length - 1 - i] !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return player;
    }
    return 0;
  }
}
