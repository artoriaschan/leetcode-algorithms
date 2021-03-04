/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(lowLimit, highLimit) {
  const map = new Map();
  function getBoxnNum(i) {
    return (i + "").split("").reduce((a, b) => +a + +b, 0);
  }
  let max = 1;
  for (let i = lowLimit; i <= highLimit; i++) {
    const num = getBoxnNum(i);
    if (map.has(num)) {
      let sum = map.get(num) + 1;
      map.set(num, sum);
      if (sum > max) max = sum;
    } else {
      map.set(num, 1);
    }
  }
  return max;
}
