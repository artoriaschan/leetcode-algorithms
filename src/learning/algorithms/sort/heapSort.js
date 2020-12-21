function heapSort(nums) {
  const n = nums.length;
  nums.unshift(0);
  buildMaxHeap(nums, n);
  let k = n;
  while (k > 1) {
    // 将大顶堆元素与K对应的元素进行置换
    swap(nums, 1, k);
    --k;
    // 堆化 [1, k] 的元素
    heapify(nums, k, 1);
  }
  nums.shift();
  return nums;
}

function buildMaxHeap(nums, k) {
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(nums, k, i);
  }
}

function heapify(nums, k, i) {
  while (true) {
    let maxPos = i;
    if (2 * i <= k && nums[i] < nums[2 * i]) maxPos = 2 * i;
    if (2 * i + 1 <= k && nums[maxPos] < nums[2 * i + 1]) maxPos = 2 * i + 1;
    if (maxPos === i) break;
    swap(nums, i, maxPos);
    i = maxPos;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const nums = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(heapSort(nums));
