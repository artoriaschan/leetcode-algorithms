/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  const res = new Array(s.length).fill("");
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
}
