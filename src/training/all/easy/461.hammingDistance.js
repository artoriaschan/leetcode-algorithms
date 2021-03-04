/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  const xor = (x ^ y).toString(2);
  let res = 0;
  for (let c of xor) {
    if (c === "1") res++;
  }
  return res;
}
