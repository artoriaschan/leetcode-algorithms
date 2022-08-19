/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence1(s, t) {
  let i = 0;
  let j = 0;
  const n = s.length;
  const m = t.length;
  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === n;
}

function isSubsequence2(s, t) {
  const n = s.length;
  const m = t.length;

  const f = Array.from(new Array(m + 1), () => new Array(26));
  for (let i = 0; i < 26; i++) {
    f[m][i] = m;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      // 如果t中位置i的字符就是j
      if (t.charAt(i).charCodeAt() === j + "a".charCodeAt()) {
        f[i][j] = i;
      } else {
        // 否则从j出现的位置在i + 1开始往后
        f[i][j] = f[i + 1][j];
      }
    }
  }
  let add = 0;
  for (let i = 0; i < n; i++) {
    // 没遍历完之前到达m，说明存在不在t中的字母，不属于子序列
    if (f[add][s.charAt(i).charCodeAt() - "a".charCodeAt()] === m) {
      return false;
    }
    add = f[add][s.charAt(i).charCodeAt() - "a".charCodeAt()] + 1;
  }
  return true;
}
