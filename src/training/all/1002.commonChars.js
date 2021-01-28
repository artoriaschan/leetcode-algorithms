/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
  const res = new Array(26).fill(0);
  for (let c of A[0]) {
    res[c.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 1; i < A.length; i++) {
    const temp = new Array(26).fill(0);
    for (let c of A[i]) {
      temp[c.charCodeAt() - "a".charCodeAt()]++;
    }
    for (let j = 0; j < 26; j++) {
      res[j] = Math.min(res[j], temp[j]);
    }
  }
  const ans = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] > 0) {
      for (let j = 0; j < res[i]; j++) {
        ans.push(String.fromCharCode("a".charCodeAt() + i));
      }
    }
  }
  return ans;
}
