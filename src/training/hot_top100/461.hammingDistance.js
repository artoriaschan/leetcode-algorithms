/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 思路
 *  异或操作符 ^
 */
// eslint-disable-next-line no-unused-vars
function hammingDistance(x, y) {
  // eslint-disable-next-line no-bitwise
  let s = x ^ y;
  return s.toString(2).split.filter(item => {
    return item === "1";
  }).length;
}
