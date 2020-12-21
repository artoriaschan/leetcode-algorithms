/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function digitsCount(d, low, high) {
  return count(high, d) - count(low - 1, d);
}
function count(n, d) {
  let cnt = 0;
  let i = 1;
  let k = parseInt(n / i, 10);
  while (k !== 0) {
    // 高位的数字。
    let high = parseInt(k / 10, 10);
    if (d === 0) {
      if (high !== 0) {
        high--;
      } else {
        break;
      }
    }
    cnt += high * i;
    // 当前位的数字。
    let cur = k % 10;
    if (cur > d) {
      cnt += i;
    } else if (cur === d) {
      // n - k * i 为低位的数字。
      cnt += n - k * i + 1;
    }
    i *= 10;
    k = parseInt(n / i, 10);
  }
  return cnt;
}
