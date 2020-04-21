/* eslint-disable no-unused-expressions */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * https://leetcode-cn.com/problems/minimum-window-substring/solution/76-zui-xiao-fu-gai-zi-chuan-by-alexer-660/
 * 思路:
 *  滑动窗口
 */
// eslint-disable-next-line no-unused-vars
function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let needs = {};
  let windows = {};
  let match = 0;
  let start = 0;
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : (needs[t[i]] = 1);
  }
  let needsLen = Object.keys(needs).length;
  while (right < s.length) {
    let c1 = s[right];
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : (windows[c1] = 1);
      if (windows[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match === needsLen) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      let c2 = s[left];
      if (needs[c2]) {
        windows[c2]--;
        if (windows[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? "" : s.substr(start, minLen);
}
