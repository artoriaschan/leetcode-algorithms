/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 小顶堆
function findKthLargest(nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [null];
  let i = 0;
  while (i < k) {
    heap.push(nums[i++]);
  }
  buildMinHeap(heap, k);

  // 从 k 位开始遍历数组
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      // 替换并堆化
      heap[1] = nums[i];
      heapify(heap, k, 1);
    }
  }

  // 返回堆顶元素
  return heap[1];
}
function buildMinHeap(arr, k) {
  if (k === 1) return;
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i);
  }
}
// 自上而下式堆化
function heapify(arr, k, i) {
  while (true) {
    let minIndex = i;
    if (2 * i <= k && arr[2 * i] < arr[i]) {
      minIndex = 2 * i;
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
      minIndex = 2 * i + 1;
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
      i = minIndex;
    } else {
      break;
    }
  }
}
// 交换
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// 快排 + 获取倒数 K 位元素
