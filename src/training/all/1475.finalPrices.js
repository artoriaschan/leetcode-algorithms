/**
 * @param {number[]} prices
 * @return {number[]}
 */
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
