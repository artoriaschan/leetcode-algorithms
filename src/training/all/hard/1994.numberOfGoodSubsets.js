/**
 * @param {number[]} nums
 * @return {number}
 */

// 1 <= nums[i] <= 30
function numberOfGoodSubsets(nums) {
  // 30内只有10个质数
  const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const NUM_MAX = 30;
  const MOD = 1000000007;

  const freq = new Array(NUM_MAX + 1).fill(0);
  for (const num of nums) {
    ++freq[num];
  }
  // 用一个长度为 10 的二进制数 mask 表示这些质因数的使用情况，其中 mask 的第 i 位为 1 当且仅当第 i 个质数已经被使用过。
  // f 表示当我们只选择 [2, i] 范围内的数，并且选择的数的质因数使用情况为 mask 时的方案数。
  const f = new Array(1 << PRIMES.length).fill(0);
  f[0] = 1;
  // 每一个在数组 nums 中出现的 1 都可以选或不选
  for (let i = 0; i < freq[1]; ++i) {
    f[0] = (f[0] * 2) % MOD;
  }

  for (let i = 2; i <= NUM_MAX; ++i) {
    if (freq[i] === 0) {
      continue;
    }

    // 检查 i 的每个质因数是否均不超过 1 个
    let subset = 0;
    let x = i;
    let check = true;
    for (let j = 0; j < PRIMES.length; ++j) {
      const prime = PRIMES[j];
      // i 本身包含平方因子，那么我们无法选择 i
      if (x % (prime * prime) === 0) {
        check = false;
        break;
      }
      // i 本身不包含平方因子
      if (x % prime === 0) {
        subset |= 1 << j; // 记录质数使用情况
      }
    }
    // 跳过当前 i
    if (!check) {
      continue;
    }

    // 动态规划
    // 因为f[i][...]只与f[i - 1][...]有关系，逆序遍历，压缩状态。
    for (let mask = (1 << PRIMES.length) - 1; mask > 0; --mask) {
      if ((mask & subset) === subset) {
        // mask ^ subset 获取未使用质数
        // freq[i] 为 i 在数组中的出现的次数
        f[mask] = (f[mask] + f[mask ^ subset] * freq[i]) % MOD;
      }
    }
  }

  let ans = 0;
  for (let mask = 1, maskMax = 1 << PRIMES.length; mask < maskMax; ++mask) {
    ans = (ans + f[mask]) % MOD;
  }

  return ans;
}
