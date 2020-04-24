/**
 * @param {number} N
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function isArmstrong(N) {
  let k = N.toString().length;
  let calcNum = N.toString()
    .split("")
    .reduce((a, b) => a + parseInt(b, 10) ** k, 0);
  return calcNum === N;
}
