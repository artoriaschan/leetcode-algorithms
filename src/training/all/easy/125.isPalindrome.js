// https://leetcode-cn.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const n = s.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const leftStr = s[left].toLowerCase();
    const rightStr = s[right].toLowerCase();
    if (!isValid(leftStr)) {
      left++;
      continue;
    }
    if (!isValid(rightStr)) {
      right--;
      continue;
    }
    if (leftStr === rightStr) {
      left++;
      right--;
      continue;
    }
    console.log(left, s[left]);
    console.log(right, s[right]);
    return false;
  }
  return true;
}

function isValid(str) {
  return (str >= "a" && str <= "z") || (str >= "0" && str <= "9");
}

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
