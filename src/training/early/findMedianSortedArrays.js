/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 要求算法的时间复杂度为 O(log (m+n)) 。
 */
var findMedianSortedArrays = function(nums1, nums2) {
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
};

let nums1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4];

let nums2 = [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4];
console.info(findMedianSortedArrays(nums1, nums2));
