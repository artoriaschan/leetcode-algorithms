/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 思路:
 *  滑动窗口: https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/hua-dong-chuang-kou-tong-yong-si-xiang-jie-jue-zi-/
 */
// eslint-disable-next-line no-unused-vars
function findAnagrams(s, p) {
  if (!s || !p) return [];
  let need = {};
  let window = {};
  let ans = [];
  [...p].forEach(c => (need[c] ? need[c]++ : (need[c] = 1)));
  let l = 0;
  let r = 0;
  let cnt = 0;
  let nkLen = Object.keys(need).length;
  while (r < s.length) {
    let c1 = s[r];
    if (need[c1]) {
      // eslint-disable-next-line no-unused-expressions
      window[c1] ? window[c1]++ : (window[c1] = 1);
      if (window[c1] === need[c1]) cnt++;
    }
    r++;
    while (cnt === nkLen) {
      let c2 = s[l];
      if (r - l === p.length) ans.push(l);
      if (need[c2]) {
        window[c2]--;
        if (window[c2] < need[c2]) cnt--;
      }
      l++;
    }
  }
  return ans;
}
