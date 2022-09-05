/**
 * @param {number[][]} pairs
 * @return {number}
 */
// 动态规划
function findLongestChain(pairs) {
  const n = pairs.length;
  // 按照第一个元素从小到大排序
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[n - 1];
}

// 最长递增子序列
function findLongestChain1(pairs) {
  // 按照第一个元素从小到大排序
  pairs.sort((a, b) => a[0] - b[0]);
  // 用一个数组 arr 来记录当前最优情况，arr[i] 就表示长度为 i + 1 的数对链的末尾可以取得的最小值
  const arr = [];
  for (const p of pairs) {
    let x = p[0];
    let y = p[1];
    // 遇到一个新数对时，先用二分查找得到这个数对可以放置的位置，再更新 arr。
    if (arr.length === 0 || x > arr[arr.length - 1]) {
      arr.push(y);
    } else {
      // 二分查找接近x的数的下标
      const idx = binarySearch(arr, x);
      // 赋值较小的那个区间结束边界数
      arr[idx] = Math.min(arr[idx], y);
    }
  }
  return arr.length;
}

function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] >= x) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
