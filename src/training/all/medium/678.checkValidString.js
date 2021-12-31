/**
 * @param {string} s
 * @return {boolean}
 */
// 状态定义
// 定义 dp[i][j] 表示字符串 s 从下标 i 到 j 的子串是否为有效的括号字符串，其中 0 < i < j < n。
// 初始状态
// 当子串的长度为 1 时，只有当该字符是 ‘*’ 时，才是有效的括号字符串，此时子串可以看成空字符串；
// 当子串的长度为 2 时，只有当两个字符是 “()",“(*",“*)",“**" 中的一种情况时，才是有效的括号字符串，此时子串可以看成 “()"。
// 状态转移
// 1. 如果 s[i]s[i] 和 s[j]s[j] 分别为左括号和右括号，或者为 ‘*’，
//    则当 dp[i+1][j−1]=true 时， dp[i][j]=true，此时 s[i]s[i] 和 s[j]s[j] 可以分别看成左括号和右括号；
// 2. 如果存在 i ≤ k < j 使得 dp[i][k] 和 dp[k+1][j] 都为 true，则 dp[i][j]=true，
//    因为字符串 s 的下标范围 [i, k] 和 [k + 1, j] 的子串分别为有效的括号字符串，
//    将两个子串拼接之后的子串也为有效的括号字符串，对应下标范围 [i,j]。
function checkValidString(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  // 长度为1的子串
  for (let i = 0; i < n; i++) {
    if (s[i] === "*") {
      dp[i][i] = true;
    }
  }
  // 长度为2的子串
  for (let i = 1; i < n; i++) {
    const c1 = s[i - 1];
    const c2 = s[i];
    dp[i - 1][i] = (c1 === "(" || c1 === "*") && (c2 === ")" || c2 === "*");
  }
  // 从后往前遍历子串,初始子串长度为3
  for (let i = n - 3; i >= 0; i--) {
    const c1 = s[i];
    for (let j = i + 2; j < n; j++) {
      const c2 = s[j];
      // 如果 s[i]s[i] 和 s[j]s[j] 分别为左括号和右括号，或者为 ‘*’
      if ((c1 === "(" || c1 === "*") && (c2 === ")" || c2 === "*")) {
        dp[i][j] = dp[i + 1][j - 1];
      }
      // 如果存在 i ≤ k < j 使得 dp[i][k] 和 dp[k+1][j] 都为 true
      for (let k = i; k < j && !dp[i][j]; k++) {
        dp[i][j] = dp[i][k] && dp[k + 1][j];
      }
    }
  }
  return dp[0][n - 1];
}
// 栈
function checkValidString1(s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "(") {
      leftStack.push(i);
    } else if (c === "*") {
      asteriskStack.push(i);
      // 当前的右括号应优先和左括号匹配，没有左括号时和星号匹配
    } else if (leftStack.length) {
      leftStack.pop();
    } else if (asteriskStack.length) {
      asteriskStack.pop();
    } else {
      return false;
    }
  }
  // 对于栈中剩余元素进行匹配
  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();
    // 左括号下标小于星号下标, 左括号必须在星号之前
    if (leftIndex > asteriskIndex) {
      return false;
    }
  }
  return leftStack.length === 0;
}
