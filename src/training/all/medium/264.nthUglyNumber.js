/* eslint-disable class-methods-use-this */
/**
 * @param {number} n
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 向上移动维护最小堆
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 交换
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 弹出数组最后一位
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return this.heap[0];
  }

  // 向下维护最小堆
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 拿到根节点
  peek() {
    return this.heap[0];
  }

  // 返回数组长度
  size() {
    return this.heap.length;
  }
}
function nthUglyNumber(n) {
  const factors = [2, 3, 5];
  const seen = new Set();
  const heap = new MinHeap();

  seen.add(1);
  heap.insert(1);

  let ugly = 0;
  for (let i = 0; i < n; i++) {
    ugly = heap.pop();
    for (const factor of factors) {
      const next = ugly * factor;
      if (!seen.has(next)) {
        seen.add(next);
        heap.insert(next);
      }
    }
  }
  return ugly;
}

function nthUglyNumber2(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;
  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2;
    const num3 = dp[p3] * 3;
    const num5 = dp[p5] * 5;
    dp[i] = Math.min(num2, num3, num5);
    if (dp[i] === num2) p2++;
    if (dp[i] === num3) p3++;
    if (dp[i] === num5) p5++;
  }
  return dp[n];
}
