/**
 * @param {number} num
 * @return {number}
 */
function exchangeBits(num) {
  let binary = num.toString(2).split("");
  if (binary.length % 2 !== 0) binary.unshift("0");
  for (let i = 0; i < binary.length; i += 2) {
    [binary[i], binary[i + 1]] = [binary[i + 1], binary[i]];
  }
  return parseInt(binary.join(""), 2);
}

console.log(exchangeBits(1));
