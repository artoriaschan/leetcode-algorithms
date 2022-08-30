/**
 * @param {number[]} stones
 * @return {number}
 */
// 将石头分为两组，A(重量最大) 和 B，每一次从A，B组分别拿出石头碰撞，剩余的放入A。
// 记石头的总重量为 sum，k_i = -1 的石头的重量之和为 neg，则其余 k_i = 1 的石头的重量之和为 sum − neg。则有
// sum(k_i * stones[i]) = (sum - neg) - neg = sum - 2 * neg
// 要使最后一块石头的重量尽可能地小，neg 需要在不超过 floor⌊sum/2⌋ 的前提下尽可能地大。
function lastStoneWeightII(stones) {
  const sum = stones.reduce((prev, curr) => prev + curr);
  const n = stones.length;
  const m = Math.floor(sum / 2);
  // 定义dp[i][j], dp[i + 1][j] 表示前 i 个石头能否凑出重量 j
  // dp[0][0] = true
  // dp[0][j] = false
  // j < stones[i], dp[i + 1][j] = dp[i][j]
  // j >= stones[i], dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]]
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= m; j++) {
      if (j < stones[i]) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
      }
    }
  }
  for (let j = m; ; j--) {
    if (dp[n][j]) {
      return sum - 2 * j;
    }
  }
}

// 由于 dp[i + 1][] 的每个元素值的计算只和 dp[i][] 的元素值有关，因此可以使用滚动数组的方式，去掉 dp 的第一个维度。
function lastStoneWeightII1(stones) {
  const sum = stones.reduce((prev, curr) => prev + curr);
  const n = stones.length;
  const m = Math.floor(sum / 2);
  const dp = new Array(m + 1).fill(false);
  dp[0] = true;
  for (const weight of stones) {
    // 对于转移方程 dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]]，去掉第一个维度后依然采取正序遍历的话
    // 转移方程就会变成 dp[i + 1][j] = dp[i][j] || dp[i + 1][j - stones[i]]，dp[j - stones[i]]实际上是dp[i + 1][j - stones[i]]
    // 所以采取倒序遍历，可以消除这个错误
    for (let j = m; j >= weight; --j) {
      dp[j] = dp[j] || dp[j - weight];
    }
  }
  for (let j = m; ; j--) {
    if (dp[j]) {
      return sum - 2 * j;
    }
  }
}

const stones = [2, 7, 4, 1, 8, 1];
const result = lastStoneWeightII(stones);
console.log(result);
