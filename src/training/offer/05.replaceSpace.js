/**
 * @param {string} s
 * @return {string}
 */
// 字符串遍历
function replaceSpace(s) {
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      temp.push("%20");
    } else {
      temp.push(s[i]);
    }
  }
  return temp.join("");
}
