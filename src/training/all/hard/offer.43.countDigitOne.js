/**
 * @param {number} n
 * @return {number}
 */
// 枚举每一位上的1的个数，依次累加
function countDigitOne(n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  // let mulk = 1;
  // let ans = 0;
  // for (let k = 0; n >= mulk; ++k) {
  //   ans += Math.floor(n / (mulk * 10)) * mulk + Math.min(Math.max((n % (mulk * 10)) - mulk + 1, 0), mulk);
  //   mulk *= 10;
  // }
  const len = String(n).length;
  let ans = 0;
  for (let k = 0; k < len; k++) {
    // Math.floor(n / 10^(k + 1)) * 10^k + Math.min(Math.max((n % 10^(k + 1)) - 10^k + 1), 0), 10^k)
    ans += Math.floor(n / 10 ** (k + 1)) * 10 ** k + Math.min(Math.max((n % 10 ** (k + 1)) - 10 ** k + 1, 0), 10 ** k);
  }
  return ans;
}
