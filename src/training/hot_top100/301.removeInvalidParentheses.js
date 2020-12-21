/**
 * @param {string} s
 * @return {string[]}
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/solution/shan-chu-wu-xiao-de-gua-hao-by-leetcode/
 * 思路:
 *
 */
// eslint-disable-next-line no-unused-vars
function removeInvalidParentheses(s) {
  let index = [];
  let arr = [s];
  let se = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && index.length && s[index[index.length - 1]] === "(") index.pop();
    else if (s[i] === "(" || s[i] === ")") index.push(i);
  }
  while (index.length) {
    if (s[index[index.length - 1]] === ")") break;
    let a = [];
    let b = index.pop();
    for (let j of arr) {
      for (let i = b; i < j.length; i++) {
        if (j[i] === "(") {
          let string_ = j.slice(0, i) + j.slice(i + 1);
          if (!se.has(string_)) {
            se.add(string_);
            a.push(string_);
          }
        }
      }
    }
    arr = a;
  }
  for (let k = 0; k < index.length; k++) {
    let a = [];
    for (let j of arr) {
      for (let i = 0; i <= index[k] - k; i++) {
        if (j[i] === ")") {
          let string_ = j.slice(0, i) + j.slice(i + 1);
          if (!se.has(string_)) {
            se.add(string_);
            a.push(string_);
          }
        }
      }
    }
    arr = a;
  }
  return arr;
}
