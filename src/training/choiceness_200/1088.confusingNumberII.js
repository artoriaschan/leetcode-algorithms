/**
 * @param {number} N
 * @return {number}
 * 思路:
 *  遍历+判断: 超时
 *  优化判断: 超时
 *  DFS: 通过 https://leetcode-cn.com/problems/confusing-number-ii/solution/hui-su-dfsjava-by-henrylee4/
 */
// function confusingNumberII(N) {
//   const ans = [];
//   for (let i = 1; i <= N; ++i) {
//     if (isConfusingNumber(i)) {
//       ans.push(i);
//     }
//   }
//   return ans.length;
// }
// const canReversal = {
//   "0": "0",
//   "1": "1",
//   "6": "9",
//   "8": "8",
//   "9": "6",
// };
// function isConfusingNumber(N) {
//   const nStr = N.toString();
//   const len = nStr.length;
//   let isSame = true;
//   for (let i = 0; i < len / 2; i++) {
//     if (!canReversal[nStr[i]] || !canReversal[nStr[len - 1 - i]]) return false;
//     isSame = isSame && canReversal[nStr[i]] === nStr[len - 1 - i];
//   }
//   return !isSame;
// }
const digits = [0, 1, 6, 8, 9];

// eslint-disable-next-line no-unused-vars
function confusingNumberII(N) {
  let res = 0;
  for (let i = 1; i <= 4; i++) {
    let num = digits[i];
    res += dfs(N, num);
  }
  return res;
}

function dfs(max, num) {
  if (num > max) {
    return 0;
  }
  let res = 0;
  if (isValid(num)) {
    res++;
  }
  for (let digit of digits) {
    num *= 10;
    num += digit;
    res += dfs(max, num);
    num = parseInt(num / 10, 10);
  }
  return res;
}

function isValid(num) {
  let tmp = num;
  let newNum = 0;
  while (tmp > 0) {
    newNum *= 10;
    let digit = parseInt(tmp % 10, 10);
    if (digit === 6) {
      newNum += 9;
    } else if (digit === 9) {
      newNum += 6;
    } else {
      newNum += digit;
    }
    tmp = parseInt(tmp / 10, 10);
  }
  return num !== newNum;
}
