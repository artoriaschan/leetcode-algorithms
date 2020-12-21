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

const nums = [0, 3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
buildMaxHeap(nums, 15);
console.log(nums);
