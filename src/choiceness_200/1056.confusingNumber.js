/**
 * @param {number} N
 * @return {boolean}
 * 思路:
 * 1: 字符串翻转
 * 2: 折半判断
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
// eslint-disable-next-line no-unused-vars
function confusingNumber1(N) {
  const canReversal = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6",
  };
  const nStr = N.toString();
  const len = nStr.length;
  let isSame = true;
  for (let i = 0; i < len / 2; i++) {
    if (!canReversal[nStr[i]] || !canReversal[nStr[len - 1 - i]]) return false;
    isSame = isSame && canReversal[nStr[i]] === nStr[len - 1 - i];
  }
  return !isSame;
}
