/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 大数求和
function addStrings(num1, num2) {
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");
  let t = 0;
  let f = 0;
  let sum = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    t = parseInt(num1[i], 10) + parseInt(num2[i], 10) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f > 0) sum = f + sum;
  return sum;
}
