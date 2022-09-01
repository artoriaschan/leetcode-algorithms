/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 直接便利
function finalPrices(prices) {
  const res = [];
  for (let i = 0; i < prices.length; i++) {
    let flag = true;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res.push(prices[i] - prices[j]);
        flag = false;
        break;
      }
    }
    if (flag) res.push(prices[i]);
  }
  return res;
}

// 单调栈
function finalPrices1(prices) {
  const n = prices.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  // 倒序遍历
  for (let i = n - 1; i >= 0; i--) {
    // 找到第一个比 prices[i] 小的元素
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }
  return ans;
}
