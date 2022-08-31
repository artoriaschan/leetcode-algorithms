/* eslint-disable class-methods-use-this */
/**
 * @param {number} k
 * @return {number}
 */
function getKthMagicNumber(k) {
  const dp = new Array(k + 1).fill(0);
  dp[1] = 1;
  let p3 = 1;
  let p5 = 1;
  let p7 = 1;
  for (let i = 2; i <= k; i++) {
    const num3 = dp[p3] * 3;
    const num5 = dp[p5] * 5;
    const num7 = dp[p7] * 7;
    dp[i] = Math.min(num3, num5, num7);
    if (dp[i] === num3) {
      p3++;
    }
    if (dp[i] === num5) {
      p5++;
    }
    if (dp[i] === num7) {
      p7++;
    }
  }

  return dp[k];
}

// 最小堆
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

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return this.heap[0];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  // 元素上移，一直找到最小元素位置，插入时调用
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 元素下移， 当删除元素的时候， 需要用最后的元素覆盖根元素， 然后从上到下移动
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

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
}

function getKthMagicNumber1(k) {
  const factors = [3, 5, 7];
  const seen = new Set();
  const heap = new MinHeap();
  seen.add(1);
  heap.insert(1);
  let ugly = 0;
  for (let i = 0; i < k; i++) {
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
