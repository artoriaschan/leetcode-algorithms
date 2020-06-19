/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function strobogrammaticInRange(low, high) {
  const mirrors = {
    "6": "9",
    "9": "6",
  };
  const selfMirrors = {
    "0": "0",
    "1": "1",
    "8": "8",
  };
  /**
   *
   * @param {*} n
   * @param {*} isLess
   */
  function getStrobogrammatic(n, low, high) {
    const ans = [];
    const len = n;
    function dfs(n, l, r) {
      if (n === 0) {
        let lowNum = parseInt(low, 10);
        let highNum = parseInt(high, 10);
        let currIntNum = parseInt(l + r, 10);
        if (currIntNum >= lowNum && currIntNum <= highNum) {
          ans.push(l + r);
        }
        return;
      }
      if (n === 1) {
        for (let key in selfMirrors) {
          let lowNum = parseInt(low, 10);
          let highNum = parseInt(high, 10);
          let currIntNum = parseInt(l + key + r, 10);
          if (currIntNum >= lowNum && currIntNum <= highNum) {
            ans.push(l + key + r);
          }
        }
        return;
      }
      for (let key in mirrors) {
        dfs(n - 2, l + key, mirrors[key] + r);
      }
      for (let key in selfMirrors) {
        if (n === len && key === "0") continue;
        dfs(n - 2, l + key, selfMirrors[key] + r);
      }
    }
    dfs(n, "", "");
    return ans.length;
  }

  let count = 0;
  let ll = low.length;
  let hl = high.length;
  if (ll !== hl) {
    for (let n = ll + 1; n < hl; n++) {
      count += getStrobogrammatic(n, low, high);
    }
    count += getStrobogrammatic(ll, low, high);
    count += getStrobogrammatic(hl, low, high);
  } else {
    count += getStrobogrammatic(ll, low, high);
  }

  return count;
}
