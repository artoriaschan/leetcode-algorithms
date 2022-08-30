/**
 * @param {number} num
 * @return {number}
 */
function reverseBits(num) {
  let ps = 0;
  let cur = 0;
  let res = 0;
  for (let i = 0; i < 32; num >>= 1, i++) {
    if ((num & 1) === 1) {
      cur += 1;
    } else {
      ps = cur;
      cur = 0;
    }
    res = Math.max(ps + cur + 1, res);
  }
  return res === 33 ? 32 : res;
}
