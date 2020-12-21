/**
 * @param {number[]} arr
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function maxNumberOfApples(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 5000) {
      break;
    }
    count++;
  }
  return count;
}
