/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = Array.from(new Array(rows), () => new Array(cols).fill(false));
  function check(i, j, s, k) {
    if (board[i][j] !== s.charAt(k)) {
      return false;
    }
    if (k === s.length - 1) {
      return true;
    }
    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      let newi = i + dx;
      let newj = j + dy;
      if (newi >= 0 && newi < rows && newj >= 0 && newj < cols) {
        if (!visited[newi][newj]) {
          const flag = check(newi, newj, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const flag = check(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
}
