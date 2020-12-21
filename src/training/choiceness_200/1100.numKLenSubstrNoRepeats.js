/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 * 思路:
 *  滑动窗口
 */
// eslint-disable-next-line no-unused-vars
function numKLenSubstrNoRepeats(S, K) {
  if (S.length < K) return 0;
  let len = S.length;
  let window = [];
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (window.indexOf(S[i]) < 0) {
      window.push(S[i]);
      if (window.length === K) {
        count++;
        window.shift();
      }
    } else {
      window.push(S[i]);
      window.splice(0, window.indexOf(S[i]) + 1);
    }
  }
  return count;
}
