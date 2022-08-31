/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
function check(jobs, k, limit) {
  const workloads = new Array(k).fill(0);
  return backtrack(jobs, workloads, 0, limit);
}

function backtrack(jobs, workloads, i, limit) {
  if (i >= jobs.length) return true;
  let cur = jobs[i];
  // 依次遍历工人分配工作
  for (let j = 0; j < workloads.length; j++) {
    // 判断现在工作量 + 当前工作是否小于限制
    if (workloads[j] + cur <= limit) {
      workloads[j] += cur;
      // 确认下一个工作是否能分配
      if (backtrack(jobs, workloads, i + 1, limit)) return true;
      workloads[j] -= cur;
    }
    // 如果当前工人未被分配工作，那么下一个工人也必然未被分配工作
    // 或者当前工作恰能使该工人的工作量达到了上限
    // 这两种情况下我们无需尝试继续分配工作
    if (workloads[j] === 0 || workloads[j] + cur === limit) {
      break;
    }
  }
  return false;
}

function minimumTimeRequired(jobs, k) {
  // 工作由大到小排序，优先分配大工作量工作
  jobs.sort((a, b) => b - a);
  // 二分查找 limit
  let l = jobs[0];
  let r = jobs.reduce((prev, curr) => prev + curr);
  while (l < r) {
    const mid = (l + r) >> 1;
    if (check(jobs, k, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}
// 动态规划
// 使用一个 n 位的二进制整数来表示哪些工作已经被分配，哪些工作尚未被分配
// dp[i][j] 表示给前 i 个人分配工作，工作的分配情况为 j 时，完成所有工作的最短时间。
function minimumTimeRequired1(jobs, k) {
  const n = jobs.length;
  // sum[j] 表示集合 j 中的工作的总工作量
  const sum = new Array(1 << n).fill(0);

  for (let i = 1; i < 1 << n; i++) {
    // x 表示从上一个分配状态与现在的分配状态所差的工作的下标。
    const x = NumberOfTrailingZeros(i);
    // y 表示上一个分配状态
    const y = i - (1 << x);
    sum[i] = sum[y] + jobs[x];
  }

  const dp = new Array(k).fill(0).map(() => new Array(1 << n).fill(0));
  for (let i = 0; i < 1 << n; i++) {
    dp[0][i] = sum[i];
  }

  for (let i = 1; i < k; i++) {
    for (let j = 0; j < 1 << n; j++) {
      let minn = Number.MAX_SAFE_INTEGER;
      // 枚举状态 j 的每一个子集
      for (let x = j; x !== 0; x = (x - 1) & j) {
        minn = Math.min(minn, Math.max(dp[i - 1][j - x], sum[x]));
      }
      dp[i][j] = minn;
    }
  }

  return dp[k - 1][(1 << n) - 1];
}

// 返回最后一个1的0的个数
function NumberOfTrailingZeros(number) {
  const num = parseInt(number, 10).toString(2);
  const multiplyDeBruijnPosition = [
    0,
    1,
    28,
    2,
    29,
    14,
    24,
    3,
    30,
    22,
    20,
    15,
    25,
    17,
    4,
    8,
    31,
    27,
    13,
    23,
    21,
    19,
    16,
    7,
    26,
    12,
    18,
    6,
    11,
    5,
    10,
    9,
  ];
  return multiplyDeBruijnPosition[(((num & -num) * 0x077cb531) >> 27) & 31];
}
