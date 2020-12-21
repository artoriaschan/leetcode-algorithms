/* eslint-disable no-unused-vars */
/**
 * @param {number[]} deck
 * @return {boolean}
 * 思路:
 *  暴力法: 枚举从2开始的组数, 总数需要满足对组数取模为0, 数字相同的各组总数满足对组数取模为0
 *  最大公约数:
 */
function hasGroupsSizeX(deck) {
  const len = deck.length;
  if (len < 2) return false;
  deck.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(deck[i])) map.set(deck[i], map.get(deck[i]) + 1);
    else map.set(deck[i], 1);
  }
  for (let i = 2; i <= len; i++) {
    let flag = true;
    if (len % i === 0) {
      for (let [key, value] of map.entries()) {
        if (value % i !== 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }
  }
  return false;
}
function hasGroupsSizeX1(deck) {
  const len = deck.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(deck[i])) map.set(deck[i], map.get(deck[i]) + 1);
    else map.set(deck[i], 1);
  }
  let g = -1;
  for (let [key, value] of map.entries()) {
    if (g === -1) {
      g = value;
    } else {
      g = gcd(g, value);
    }
  }
  return g >= 2;
}
function gcd(x, y) {
  return x === 0 ? y : gcd(y % x, x);
}
