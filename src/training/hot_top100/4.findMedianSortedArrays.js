/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function findMedianSortedArrays(nums1, nums2) {
  let medianNum;
  let length;
  let newNums = nums1.concat(nums2);
  newNums.sort((a, b) => {
    return a - b;
  });
  length = newNums.length;
  if (length % 2 === 0) {
    medianNum = (newNums[length / 2 - 1] + newNums[length / 2]) / 2.0;
  } else {
    medianNum = newNums[Math.floor(length / 2)];
  }
  return medianNum;
}
