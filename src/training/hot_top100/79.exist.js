/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 思路:
 *  回溯法
 */
// eslint-disable-next-line no-unused-vars
function exist(board, word) {
  const rowNum = board.length;
  const colNum = board[0].length;
  for (let i = 0; i < rowNum; ++i) {
    for (let j = 0; j < colNum; ++j) {
      if (board[i][j] === word[0]) {
        const isExist = __exist(board, word, i, j, {});
        if (isExist) return true; // 找到就返回
      }
    }
  }
  return false;
}
function __exist(board, word, row, col, visited) {
  // 单词中字母全部匹配，说明可以搜索到，返回true
  if (!word.length) {
    return true;
  }

  const key = `${row}-${col}`;
  // 越界、之前访问过、单词首字母和当前元素不相同，返回false
  if (
    row >= board.length ||
    row < 0 ||
    col >= board[0].length ||
    col < 0 ||
    visited[key] ||
    board[row][col] !== word[0]
  ) {
    return false;
  }

  visited[key] = true;
  word = word.slice(1);
  // 下、上、右、左搜索（顺序不重要）
  const success =
    __exist(board, word, row + 1, col, visited) ||
    __exist(board, word, row - 1, col, visited) ||
    __exist(board, word, row, col + 1, visited) ||
    __exist(board, word, row, col - 1, visited);

  // success为false时，就是回溯
  visited[key] = success;
  return success;
}
