var isPalindrome = function(s) {
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || isPalindrome(s)) return s;
  var createT = function(s) {
    let T = ["$"];
    for (let i = 0; i < s.length; i++) {
      T.push("#");
      T.push(s[i]);
    }
    T.push("#");
    T.push("$");
    return T;
  };
  var Manacher = function(T) {
    let Len = [];
    let mx = 0,
      po = 0,
      result = 0;
    for (let i = 1; i < T.length - 1; i++) {
      if (i >= mx) {
        Len[i] = 1;
      } /** i < mx */ else {
        Len[i] = Math.min(mx - i, Len[2 * po - i]); // ?
      }
      while (T[i - Len[i]] === T[i + Len[i]]) {
        Len[i]++;
      }
      if (Len[i] + i > mx) {
        mx = Len[i] + i;
        po = i;
      }
      result = Math.max(result, Len[i]);
    }
    return Len;
  };
  // Manacher算法
  let T = createT(s);
  let Len = Manacher(T);
  let max = 0,
    middle = 0;
  for (let i = 1; i < T.length - 1; i++) {
    if (Len[i] > max) {
      middle = i;
      max = Len[i];
    }
  }
  max--;
  let start = middle - max;
  let end = middle + max;
  let result = "";
  for (let i = start; i < end; i++) {
    if (T[i] !== "#" && T[i] !== "$") {
      result += T[i];
    }
  }
  return result;
};

let str = "aab";
console.info(longestPalindrome(str));
