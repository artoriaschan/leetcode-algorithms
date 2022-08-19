/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
function goodDaysToRobBank(security, time) {
  const n = security.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    // 正序遍历非递增
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
    // 倒序遍历非递减
    if (security[n - i - 1] <= security[n - i]) {
      right[n - i - 1] = right[n - i] + 1;
    }
  }

  const ans = [];
  for (let i = time; i < n - time; i++) {
    if (left[i] >= time && right[i] >= time) {
      ans.push(i);
    }
  }

  return ans;
}
