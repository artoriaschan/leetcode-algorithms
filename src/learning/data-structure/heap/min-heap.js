function buildMinHeap(nums, k) {
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(nums, k, i);
  }
}

function heapify(nums, k, i) {
  while (true) {
    let minPos = i;
    if (i * 2 <= k && nums[i] > nums[i * 2]) minPos = i * 2;
    if (i * 2 + 1 <= k && nums[minPos] > nums[i * 2 + 1]) minPos = i * 2 + 1;
    if (minPos === i) break;
    swap(nums, i, minPos);
    i = minPos;
  }
}

function swap(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

const nums = [0, 3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
buildMinHeap(nums, 15);
console.log(nums);
