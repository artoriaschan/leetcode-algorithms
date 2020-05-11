/**
 * @param {number} N
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function confusingNumber(N) {
  // [0, 1, 6, 8, 9]
  const canReversal = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6",
  };
  const canNotReversal = [2, 3, 4, 5, 7];
  let reversal = [];
  const nStr = N.toString();
  for (let i = 0; i < nStr.length; i++) {
    if (canNotReversal.indexOf(parseInt(nStr[i], 10)) > -1) return false;
    reversal.push(canReversal[nStr[i]]);
  }
  return parseInt(reversal.reverse().join(""), 10) !== N;
}
