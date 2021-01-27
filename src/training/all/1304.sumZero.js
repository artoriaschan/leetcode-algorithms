/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
  const ret = new Int16Array(n);
  for (let i = 1; i <= Math.floor(n / 2); ++i) {
    ret[i - 1] = i;
    ret[n - i] = -i;
  }
  return ret;
}
