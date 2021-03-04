/**
 * @param {number[]} A
 * @return {number}
 */
function sumOfDigits(A) {
  const copy = A.slice();
  copy.sort((a, b) => a - b);
  const minStr = copy[0].toString();
  let sum = 0;
  for (let i = 0; i < minStr.length; i++) {
    sum += parseInt(minStr[i], 10);
  }
  return sum % 2 === 0 ? 1 : 0;
}
