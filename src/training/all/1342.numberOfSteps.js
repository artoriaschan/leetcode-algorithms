/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
  let res = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num >>= 1;
    } else {
      num -= 1;
    }
    res++;
  }
  return res;
}

const num = 14;
console.log(numberOfSteps(num));
