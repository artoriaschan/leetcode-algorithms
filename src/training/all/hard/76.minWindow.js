/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 15:30:34
 * @LastEditTime: 2021-09-23 17:14:57
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/minimum-window-substring/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let l = 0;
  let r = 0;
  let res = "";
  const m = new Map();
  for (let i = 0; i < tLen; i++) {
    const c = t[i];
    m.set(c, m.has(c) ? m.get(c) + 1 : 1);
  }
  let needType = m.size;
  while (r < sLen) {
    const rc = s[r];
    if (m.has(rc)) {
      m.set(rc, m.get(rc) - 1);
      if (m.get(rc) === 0) needType -= 1;
    }
    while (needType === 0) {
      const lc = s[l];
      let newRes = s.slice(l, r + 1);
      if (!res || newRes.length < res.length) {
        res = newRes;
        // 结果唯一
        if (res.length === tLen) return res;
      }
      if (m.has(lc)) {
        m.set(lc, m.get(lc) + 1);
        if (m.get(lc) === 1) needType += 1;
      }
      l++;
    }
    r++;
  }
  return res;
}
