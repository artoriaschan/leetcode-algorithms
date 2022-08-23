/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// 动态规划，可能超时
function maxEnvelopes(envelopes) {
  const n = envelopes.length;
  if (n === 0) return 0;

  // 按照 w 值第一关键字升序、h 值第二关键字降序进行排序；
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });

  const dp = new Array(n).fill(1);
  let ans = 1;
  // 忽略 w 维度，求出 h 维度的最长严格递增子序列，其长度即为答案。
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

function binarySearch(f, target) {
  let lo = 0;
  let hi = f.length - 1;
  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (f[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function maxEnvelopes1(envelopes) {
  const n = envelopes.length;
  if (n === 0) return 0;

  // 按照 w 值第一关键字升序、h 值第二关键字降序进行排序；
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });

  const f = [envelopes[0][1]];
  for (let i = 1; i < n; i++) {
    const num = envelopes[i][1];
    const last = f[f.length - 1];
    if (num > last) {
      f.push(num);
    } else {
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }

  return f.length;
}
