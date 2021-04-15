/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
  let maxIndex = 0;
  let max = arr[maxIndex];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
