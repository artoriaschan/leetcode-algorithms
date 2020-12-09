/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  for (const c of s) {
    // 出现一次以上map中存入的是false
    map.set(c, !map.has(c));
  }
  for (const c of s) {
    if (map.get(c)) {
      return c;
    }
  }
  return " ";
};
