/**
 * @description 最长回文串
 * @param {string} s
 * @return {number}
 *
 * 思路:
 *  1. 计数, 偶数加2, 全局字母为1的出现一次, 次数加1
 *  2. hash + 贪心
 */
const assert = require("assert");
function longestPalindrome1(s) {
  let count = 0;
  let temp = {};
  let sArray = s.split("");
  sArray.forEach(item => {
    if (temp[item]) {
      count += 2;
      temp[item] = undefined;
    } else {
      temp[item] = 1;
    }
  });
  const keys = Object.keys(temp);
  if (keys.some(key => temp[key] === 1)) {
    count += 1;
  }
  return count;
}
function longestPalindrome2(s) {
  let map = new Map();
  let count = 0;
  let center = 0;
  for (let ss of s) map.set(ss, map.get(ss) ? map.get(ss) + 1 : 1);
  // eslint-disable-next-line no-unused-vars
  for (let [_, v] of map) {
    if (v % 2 === 0) {
      count += v;
    } else {
      count += v - 1;
      center = 1;
    }
  }
  return count + center;
}

const result1 = longestPalindrome1("abccccdd");
const result2 = longestPalindrome2("abccccdd");

assert.strictEqual(result1, 7);
assert.strictEqual(result2, 7);
