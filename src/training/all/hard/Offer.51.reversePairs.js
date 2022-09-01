/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
  let result = 0;

  const merge = (left, right) => {
    let res = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        // 归并排序唯一添加的一行代码
        // 如果是添加右边数组的元素，证明左边剩余元素都能和自己组成逆序对
        // 例如[3,5,7],[2,4]，遍历到2的时候，左边的[3,5,7]都能和2组成逆序对
        result += left.length;
        res.push(right.shift());
      }
    }
    return res.concat(left, right);
  };

  const mergeSort = arr => {
    const n = arr.length;
    if (n < 2) return arr;
    let mid = n >> 1;
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  };

  mergeSort(nums);
  return result;
}
