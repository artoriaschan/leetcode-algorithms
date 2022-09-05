/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 归并排序
function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left, right);
}

function mergeSort(arr) {
  const n = arr.length;
  if (n < 2) return arr;
  let mid = n >> 1;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

// 快速排序
/**
 * @description 轴点转换
 * @param {*} arr
 * @param {*} lo
 * @param {*} hi
 * 核心就是将序列划分为 (L <= pivot, U, pivot <= G) 三个子序列, 遍历到U只剩一个元素为止(lo === hi)
 * 在原序列上操作(in-place), 起始状态 L 和 G 都为空, 将 lo 和 hi指向序列的起止位置. 作为 L 和 G与 U的分界点
 * 随机选取一个元素作为轴点, 进行迭代, 不断扩充 L 和 G 的子序列:
 *  * lo < hi && pivot <= arr[hi]: G序列增加元素(hi--);
 *    跳出循环时, 将当前元素复制到lo指向的元素(lo指向的元素初始为空, 已备份到轴点变量中)
 *  * lo < hi && arr[lo] <= pivot: L序列增加元素(lo++);
 *    跳出循环时, 将当前元素复制到hi指向的元素(hi指向的元素在上次循环中已复制到lo指向的元素中, 所以此时可视为空)
 */
function partition(arr, lo, hi) {
  const pivot = arr[lo];
  while (lo < hi) {
    while (lo < hi && pivot <= arr[hi]) hi--;
    arr[lo] = arr[hi];
    while (lo < hi && pivot >= arr[lo]) lo++;
    arr[hi] = arr[lo];
  }
  arr[lo] = pivot;
  return lo;
}
/**
 * 另一种轴点变换算法, 变种
 * 核心就是将序列划分为 (L <= pivot, pivot <= G, U) 三个子序列,
 * 遍历子序列U, 将其元素分别放入L和G中, L和G使用mi进行分割, mi为指向L序列的最后一个元素
 *  当U序列中的k指向的元素小于候选轴点时, 扩展L序列: swap(arr, ++mi, k)
 *  遍历结束时, U序列为空, 划分为L和G两个子序列, L为小于轴点元素的集合, G为大于轴点元素的集合,
 *  交换mi和轴点元素, 此时候选轴点元素转换完成
 * @param {*} arr
 * @param {*} lo
 * @param {*} hi
 * @returns
 */
function partition1(arr, lo, hi) {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  // 将分区点放到正确的位置
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}

function quickSort(arr, lo, hi) {
  if (lo >= hi) return arr;
  let pivot = partition(arr, lo, hi);
  quickSort(arr, lo, pivot - 1);
  quickSort(arr, pivot + 1, hi);
  return arr;
}

function sortArray(nums) {
  // return mergeSort(nums);
  return quickSort(nums, 0, nums.length - 1);
}
