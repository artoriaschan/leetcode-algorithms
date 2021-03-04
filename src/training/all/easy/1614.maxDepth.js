/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let max = 0;
  if (s.length === 0 && (s !== "(" || s !== ")")) return max;
  let dep = 0;
  for (let c of s) {
    if (c === "(") {
      dep++;
      max = Math.max(dep, max);
    }
    if (c === ")") dep--;
  }
  return max;
}

const s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));
