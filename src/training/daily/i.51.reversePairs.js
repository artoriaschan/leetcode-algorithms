/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  归并排序:
 *  可以将求解逆序对的过程转化成归并排序的合并过程中的"贡献度"问题
 */
// eslint-disable-next-line no-unused-vars
function reversePairs(nums) {
  function findInversePairNum(arr, start, end) {
    if (start >= end) return 0;

    const copy = new Array(end - start + 1);
    const length = Math.floor((end - start) / 2); // 左数组长度
    const leftNum = findInversePairNum(arr, start, start + length);
    const rightNum = findInversePairNum(arr, start + length + 1, end);

    let i = start + length;
    let j = end;
    let copyIndex = end - start;
    let num = 0;
    while (i >= start && j >= start + length + 1) {
      if (arr[i] > arr[j]) {
        num += j - start - length;
        copy[copyIndex--] = arr[i--];
      } else {
        copy[copyIndex--] = arr[j--];
      }
    }

    while (i >= start) {
      copy[copyIndex--] = arr[i--];
    }

    while (j >= start + length + 1) {
      copy[copyIndex--] = arr[j--];
    }

    for (let k = start; k <= end; ++k) {
      arr[k] = copy[k - start];
    }

    return num + leftNum + rightNum;
  }
  return findInversePairNum(nums, 0, nums.length - 1);
}
