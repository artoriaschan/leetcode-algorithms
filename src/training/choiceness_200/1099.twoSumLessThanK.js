/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function twoSumLessThanK(A, K) {
  let max = -1;
  for (let i = 0; i < A.length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (i === j) continue;
      let sum = A[i] + A[j];
      if (max < sum && sum < K) max = sum;
    }
  }
  return max;
}
// eslint-disable-next-line no-unused-vars
function twoSumLessThanK1(A, K) {
  let max = -1;
  let left = 0;
  let right = A.length - 1;
  A.sort((a, b) => a - b);
  while (left < right) {
    let sum = A[left] + A[right];
    if (sum >= K) right--;
    if (sum < K) {
      left++;
      if (sum > max) max = sum;
    }
  }
  return max;
}
