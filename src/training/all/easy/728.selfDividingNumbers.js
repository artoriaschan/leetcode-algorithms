/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    const str = i.toString();
    let flag = true;
    for (let c of str) {
      if (i % parseInt(c, 10) !== 0) flag = false;
    }
    if (flag) res.push(i);
  }
  return res;
}
