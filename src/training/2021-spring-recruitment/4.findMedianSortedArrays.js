/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 普通思路：
// 合并，再找中位数
// 已知数组长度之和，中位数的位置可以确定，遍历到中位数位置
function findMedianSortedArrays(nums1, nums2) {
  let medianNum;
  let length;
  let newNums = nums1.concat(nums2);
  // 排序
  newNums.sort((a, b) => {
    return a - b;
  });
  length = newNums.length;
  // 查找中位数
  if (length % 2 === 0) {
    medianNum = (newNums[length / 2 - 1] + newNums[length / 2]) / 2.0;
  } else {
    medianNum = newNums[Math.floor(length / 2)];
  }
  return medianNum;
}
// 进阶：时间复杂度为 O(log (m+n)) 的算法
// 使用二分查找
function findMedianSortedArrays1(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  if (len % 2 === 0) {
    let mid1 = len / 2 - 1;
    let mid2 = len / 2;
    const midVal1 = getKthElement(nums1, nums2, mid1);
    const midVal2 = getKthElement(nums1, nums2, mid2);
    return (midVal1 + midVal2) / 2.0;
  }
  let mid = Math.floor(len / 2);
  const midVal = getKthElement(nums1, nums2, mid);
  return midVal;
}

/* 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
 * 这里的 "/" 表示整除
 * nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
 * nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
 * 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
 * 这样 pivot 本身最大也只能是第 k-1 小的元素
 * 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
 * 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
 * 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
 */
function getKthElement(nums1, nums2, k) {
  let length1 = nums1.length;
  let length2 = nums2.length;
  let index1 = 0;
  let index2 = 0;
  let kthElement = 0;
  while (true) {
    // 边界情况
    if (index1 === length1) {
      return nums2[index2 + k - 1];
    }
    if (index2 === length2) {
      return nums1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    // 正常情况
    let half = Math.floor(k / 2);
    let newIndex1 = Math.min(index1 + half, length1) - 1;
    let newIndex2 = Math.min(index2 + half, length2) - 1;
    let pivot1 = nums1[newIndex1];
    let pivot2 = nums2[newIndex2];
    if (pivot1 <= pivot2) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}

console.log(findMedianSortedArrays1([1, 3], [2]));
