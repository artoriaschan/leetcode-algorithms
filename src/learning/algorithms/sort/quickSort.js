/**
 * @description 快速排序
 * 其核心就是构造在乱序数列中构造轴点, 将所有元素逐个转换为轴点的过程
 *  轴点: 左边的元素小于当前元素, 右边的元素大于当前元素
 *  依据: 有序数列的充要条件: 数列中的元素皆是轴点
 *  做法: 通过适当的交换, 可使任意元素转换为轴点
 */

// eslint-disable-next-line no-unused-vars
function quickSort(arr, lo, hi) {
  lo = lo !== undefined ? lo : 0;
  hi = hi !== undefined ? hi : arr.length - 1;
  if (hi - lo < 1) return;
  const mi = partition(arr, lo, hi);
  quickSort(arr, lo, mi - 1);
  quickSort(arr, mi + 1, hi);
}
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
// eslint-disable-next-line no-unused-vars
function partition1(arr, lo, hi) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[lo];
  let mi = lo;
  for (let k = lo + 1; k <= hi; k++) {
    if (arr[k] < pivot) swap(arr, ++mi, k);
  }
  swap(arr, lo, mi);
  return mi;
}
/**
 * 另一种轴点转换的方法
 *  指定left为轴点, 从left + 1开始遍历子序列, 比轴点小的元素与头部指针指向的元素进行交换,放到序列头部, 头部指针并向后移一位
 *  遍历结束时, 交换头部指针元素和轴点元素
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function partition2(arr, left, right) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 分区操作
  let pivot = left; // 设定基准值（pivot）
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
