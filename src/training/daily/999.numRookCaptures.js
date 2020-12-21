/**
 * @param {character[][]} board
 * @return {number}
 * 思路:
 *  模拟
 */
// eslint-disable-next-line no-unused-vars
function numRookCaptures(board) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        for (let up = j; up >= 0; up--) {
          if (board[i][up] === "p") {
            count++;
            break;
          } else if (board[i][up] === "B") {
            break;
          }
        }
        for (let down = j; down < 8; down++) {
          if (board[i][down] === "p") {
            count++;
            break;
          } else if (board[i][down] === "B") {
            break;
          }
        }
        for (let left = i; left >= 0; left--) {
          if (board[left][j] === "p") {
            count++;
            break;
          } else if (board[left][j] === "B") {
            break;
          }
        }
        for (let right = i; right < 8; right++) {
          if (board[right][j] === "p") {
            count++;
            break;
          } else if (board[right][j] === "B") {
            break;
          }
        }
        break;
      }
    }
  }
  return count;
}
