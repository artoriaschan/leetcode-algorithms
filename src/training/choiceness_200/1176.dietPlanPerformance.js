/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function dietPlanPerformance(calories, k, lower, upper) {
  let score = [];
  for (let i = 0; i < calories.length; i++) {
    if (i + k > calories.length) break;
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += calories[i + j];
    }
    console.log(sum);
    if (sum < lower) score.push(-1);
    if (sum > upper) score.push(1);
  }
  return score.reduce((a, b) => a + b, 0);
}
