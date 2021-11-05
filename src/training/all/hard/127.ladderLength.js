// https://leetcode-cn.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  // 去重
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  // 双向
  // 他在wordList中走过的路
  let begSet = [];
  // 她在wordList中走过的路
  let endSet = [];
  begSet.push(beginWord);
  endSet.push(endWord);

  let n = 1;
  while (begSet.length > 0) {
    // 用来放当次BFS的下一层扩展的值
    const nextBegins = [];
    // 走的慢的要努力多走几步
    if (begSet.length > endSet.length) {
      let q = begSet;
      begSet = endSet;
      endSet = q;
    }
    // 循环 begSet 中所有路
    for (let k = 0; k < begSet.length; k++) {
      let m = begSet[k];
      for (let i = 0; i < m.length; i++) {
        for (let c = 97; c <= 122; c++) {
          // 生成新词
          let newm = m.slice(0, i) + String.fromCharCode(c) + m.slice(i + 1);
          // 如果走过对方走过的路，那就说明beginWord 会和 endWord遇到。
          if (endSet.includes(newm)) {
            return n + 1;
          }
          if (wordSet.has(newm)) {
            // 在wordSet中的时候，保存下来进行下次BFS扩展
            nextBegins.push(newm);
            // 防止重复
            wordSet.delete(newm);
          }
        }
      }
    }
    // 将本次更新的BFS数组赋值给begSet
    begSet = nextBegins;
    n++;
  }
  return 0;
}
