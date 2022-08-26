/**
 * @param {number[]} arr
 * @return {number}
 */
// 每个最小值都有一定的辐射范围
// 每个元素 E = A[i] 的辐射范围都是一个连续数组，这个辐射范围内产生的所有子数组最小值都为 E
// 如果这个辐射范围内的子数组有 n 个，那么总贡献值为 n * E。
// 我们只要计算出每个元素的贡献值，然后求和就好了。
function sumSubarrayMins(arr) {
  const MOD = 1000000007;
  // 处理边界情况
  if (arr === null || arr.length === 0) {
    return 0;
  }
  const n = arr.length;
  // 每个元素辐射范围的左边界
  const left = new Array(n);
  // 每个元素辐射范围的右边界
  const right = new Array(n);

  let stack = [];
  // 第一次循环先找到所有元素的左边界
  for (let i = 0; i < n; i++) {
    // 向左找第一个小于等于E的元素
    while (!stack.length !== 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    // 设立一个最左边界 -1
    if (stack.length === 0) {
      left[i] = -1;
    } else {
      left[i] = stack[stack.length - 1];
    }
    // 下标入栈，方便同时得到i和A[i]
    stack.push(i);
  }

  stack = [];
  // 第二次循环找到所有元素的右边界
  for (let i = n - 1; i >= 0; i--) {
    // 向右找第一个小于E的元素
    while (!stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    // 设立一个最右边界 n
    if (stack.length === 0) {
      right[i] = n;
    } else {
      right[i] = stack[stack.length - 1];
    }
    // 下标入栈，方便同时得到i和A[i]
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    // A[i] * (i − left + 1) * (right − i + 1)
    ans += ((i - left[i]) * (right[i] - i) * arr[i]) % MOD;
  }

  return ans % MOD;
}

function getElement(arr, n, i) {
  // 将下标 -1 和 n 作为两个哨兵元素，它们对应的元素为 MIN_SAFE_INTEGER
  if (i === -1 || i === n) {
    return Number.MIN_SAFE_INTEGER;
  }
  return arr[i];
}

function sumSubarrayMins1(arr) {
  const MOD = 1000000007;
  // 处理边界情况
  if (arr === null || arr.length === 0) {
    return 0;
  }
  const n = arr.length;
  let ans = 0;
  const stack = [];
  // 将下标 -1 和 n 作为两个哨兵元素，它们对应的元素为 MIN_SAFE_INTEGER
  // -1 作为最左边界，n 作为最右边界
  for (let i = -1; i <= n; i++) {
    while (stack.length !== 0 && getElement(arr, n, stack[stack.length - 1]) > getElement(arr, n, i)) {
      // A[cur] 就是之前思路中的 A[i]，注意区分和上面代码的区别
      // 对于每个出栈元素来说，i 就是它们的右边界，而栈顶元素就是左边界
      const curr = stack.pop();
      // 计算贡献值
      ans += ((curr - stack[stack.length - 1]) * (i - curr) * arr[curr]) % MOD;
    }
    stack.push(i);
  }

  return ans % MOD;
}
