/**
 * @param {string} s
 * @return {string[]}
 */
// eslint-disable-next-line no-unused-vars
function generatePossibleNextMoves(s) {
  let result = [];
  s = s.split("");
  if (!s.includes("+")) {
    return [];
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      const ss = [...s];
      if (s[i] === "+") {
        ss[i] = "-";
        ss[i + 1] = "-";
        result.push(ss.join(""));
      }
    }
  }
  return result;
}
