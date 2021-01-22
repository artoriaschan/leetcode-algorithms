/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
function addToArrayForm(A, K) {
  let aNum = A.join("");
  let kNum = K.toString();
  const len = Math.max(aNum.length, kNum.length);
  aNum = aNum.padStart(len, 0);
  kNum = kNum.padStart(len, 0);
  let res = "";
  let x = 0;
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(aNum[i], 10) + parseInt(kNum[i], 10) + x;
    res = (sum % 10) + res;
    x = Math.floor(sum / 10);
  }
  if (x > 0) res = x + res;
  return res.split("");
}

const A = [1, 2, 0, 0];
const K = 34;
console.log(addToArrayForm(A, K));
