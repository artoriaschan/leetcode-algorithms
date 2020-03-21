/* eslint-disable no-unused-vars */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 * 思路:
 *  数学: 贝祖定理
 *  ax+by=zax+by=z 有解当且仅当 zz 是 x,yx,y 的最大公约数的倍数。
 * 因此我们只需要找到 x,yx,y 的最大公约数并判断 zz 是否是它的倍数即可。
 */
function canMeasureWater(x, y, z) {
  let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  if (x + y < z) {
    return false;
  }
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z;
  }
  return z % gcd(x, y) === 0;
}
