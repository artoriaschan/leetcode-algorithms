/**
 * @param {number} x
 * @return {number}
 * 思路:
 *  牛顿迭代: 牛顿迭代法的本质是借助泰勒级数，从初始值开始快速向零点逼近。
 */
// eslint-disable-next-line no-unused-vars
function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let C = x;
  let x0 = x;
  while (true) {
    let xi = 0.5 * (x0 + C / x0);
    if (Math.abs(x0 - xi) < 1e-7) {
      break;
    }
    x0 = xi;
  }
  return Math.floor(x0);
}
