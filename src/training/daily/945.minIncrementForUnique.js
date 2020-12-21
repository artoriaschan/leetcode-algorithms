/* eslint-disable no-unused-vars */
/**
 * @param {number[]} A
 * @return {number}
 * 思路:
 *  计数
 *  排序:
 *    遍历数组A，比较当前数与下一个数的差值
 *    若A[i]>A[i+1],补齐下一个数比当前数大1并用cnt计数
 */
function minIncrementForUnique(A) {
  if (A.length === 0) return 0;
  A.sort((a, b) => a - b);
  let taken = 0;
  let count = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] === A[i]) {
      taken++;
      count -= A[i];
    } else if (A[i - 1] < A[i]) {
      let give = Math.min(taken, A[i] - A[i - 1] - 1);
      count += (give * (give + 1)) / 2 + give * A[i - 1];
      taken -= give;
    }
  }
  if (A.length > 0) count += (taken * (taken + 1)) / 2 + taken * A[A.length - 1];

  return count;
}
