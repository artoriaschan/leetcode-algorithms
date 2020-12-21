/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 *
 * 将两数相除，要求不使用乘法、除法和 mod 运算符
 */
var divide = function(dividend, divisor) {
  let sign = (dividend > 0) ^ (divisor > 0) ? 1 : 0; // 符号位判断
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let max = 2 ** 31 - 1;
  let min = (-2) ** 31;
  if (absDivisor === 1) {
    let discuss = sign ? -absDividend : absDividend;
    if (discuss < min || discuss > max) {
      return max;
    }
    return discuss;
  }
  let discuss = 0;
  while (absDividend >= absDivisor) {
    let temp = absDivisor;
    let divide = 1;
    while (absDividend >= temp << 1) {
      temp <<= 1;
      divide <<= 1;
    }
    absDividend -= temp;
    discuss += divide;
  }
  discuss = sign ? 0 - discuss : discuss;
  if (discuss < min || discuss > max) {
    return max;
  }
  return discuss;
};

let dividend = 2147483647,
  divisor = 2;
console.log(divide(dividend, divisor));
