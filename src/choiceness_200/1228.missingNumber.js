/**
 * @param {number[]} arr
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function missingNumber(arr) {
  let diff = arr[1] - arr[0];
  let preIndex = 0;
  for (let i = 2; i < arr.length; i++) {
    let curDiff = arr[i] - arr[i - 1];
    if (Math.abs(curDiff) > Math.abs(diff)) {
      preIndex = i - 1;
      break;
    } else if (Math.abs(curDiff) < Math.abs(diff)) {
      diff = curDiff;
      preIndex = i - 2;
      break;
    }
  }
  return arr[preIndex] + diff;
}
