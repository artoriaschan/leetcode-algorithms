/**
 * @param {number} N
 * @return {boolean}
 */
function isArmstrong(N) {
  const K = N.toString().length;
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += parseInt(N.toString()[i], 10) ** K;
  }
  return sum === N;
}
