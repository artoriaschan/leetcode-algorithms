/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings1(s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2;
    let r = i / 2 + (i % 2);
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
  }
  return ans;
}

// Manacher 算法
function countSubstrings2(s) {
  let n = s.length;
  let t = ["$", "#"];
  for (let i = 0; i < n; ++i) {
    t.push(s.charAt(i));
    t.push("#");
  }
  n = t.length;
  t.push("!");
  t = t.join("");

  const f = new Array(n);
  let iMax = 0; // 中心点
  let rMax = 0; // 最右侧端点
  let ans = 0;
  for (let i = 1; i < n; ++i) {
    // 初始化 f[i]
    f[i] = i <= rMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1; // 计算最大回文半径
    // 中心拓展
    while (t.charAt(i + f[i]) === t.charAt(i - f[i])) {
      ++f[i];
    }
    // 动态维护 iMax 和 rMax
    if (i + f[i] - 1 > rMax) {
      iMax = i; // 记录中心点
      rMax = i + f[i] - 1; // 更新最右侧端点
    }
    // 统计答案, 当前贡献为 (f[i] - 1) / 2 上取整
    ans += Math.floor(f[i] / 2);
  }

  return ans;
}
