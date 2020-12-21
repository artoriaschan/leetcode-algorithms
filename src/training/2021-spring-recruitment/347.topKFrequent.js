/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  let bucket = [];
  // 统计计数
  for (let [k, v] of map.entries()) {
    if (bucket[v] === undefined) {
      let tmp = [];
      tmp.push(k);
      bucket[v] = tmp;
    } else {
      let c = bucket[v];
      c.push(k);
    }
  }
  // 倒序输出
  let ans = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    let t = bucket[i];
    if (t) {
      t.forEach(item => {
        if (ans.length === k) {
          return ans;
        }
        ans.push(item);
      });
    }
  }
  return ans;
}
// 小顶堆
function topKFrequent1(nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  const heap = [null];
  const arr = Array.from(map);
  for (let i = 0; i < k; i++) {
    const [key, val] = arr[i];
    heap.push({
      nums: key,
      times: val,
    });
  }
  buildMinHeap(heap, k);
  for (let i = k; i < arr.length; i++) {
    const [key, val] = arr[i];
    if (heap[1].times <= val) {
      heap[1] = {
        nums: key,
        times: val,
      };
      heapify(heap, k, 1);
    }
  }
  const res = [];
  for (let i = 1; i <= k; i++) {
    res.push(heap[i].nums);
  }
  return res;
}

function buildMinHeap(nums, k) {
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(nums, k, i);
  }
}
function heapify(nums, k, i) {
  while (true) {
    let minPos = i;
    if (i * 2 <= k && nums[i].times > nums[i * 2].times) minPos = i * 2;
    if (i * 2 + 1 <= k && nums[minPos].times > nums[i * 2 + 1].times) minPos = i * 2 + 1;
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
const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
console.log(topKFrequent1(nums, k));
