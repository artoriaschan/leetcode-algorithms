/**
 * @param {string} digits
 * @return {string[]}
 * 思路:
 *  回溯法
 */
const digitsMap = new Map();
digitsMap.set("2", "abc");
digitsMap.set("3", "def");
digitsMap.set("4", "ghi");
digitsMap.set("5", "jkl");
digitsMap.set("6", "mno");
digitsMap.set("7", "pqrs");
digitsMap.set("8", "tuv");
digitsMap.set("9", "wxyz");
// eslint-disable-next-line no-unused-vars
function letterCombinations(digits) {
  const ans = [];
  let backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      ans.push(combination);
      return;
    }
    let digit = nextDigits.substring(0, 1);
    let letters = digitsMap.get(digit);
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      backtrack(combination + letter, nextDigits.substring(1));
    }
  };
  if (digits.length !== 0) backtrack("", digits);
  return ans;
}
