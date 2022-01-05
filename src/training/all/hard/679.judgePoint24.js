// https://leetcode-cn.com/problems/24-game/
/**
 * @param {number[]} cards
 * @return {boolean}
 */
const TARGET = 24;
const EPSILON = 1e-6;
const ADD = 0;
const MULTIPLY = 1;
const SUBTRACT = 2;
const DIVIDE = 3;
function judgePoint24(cards) {
  return backtrack(cards);
}

function backtrack(cards) {
  if (cards.length === 0) {
    return false;
  }
  if (cards.length === 1) {
    // 判断是否小于10^-6, 因为有误差
    return Math.abs(cards[0] - TARGET) < EPSILON;
  }
  const length = cards.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        const list = [];
        // 除去参与计算的数字, 其他数字放入数组中
        for (let k = 0; k < length; k++) {
          if (k !== i && k !== j) {
            list.push(cards[k]);
          }
        }
        for (let k = 0; k < 4; k++) {
          // 加法和乘法都满足交换律
          if (k < 2 && i > j) {
            continue;
          }
          if (k === ADD) {
            list.push(cards[i] + cards[j]);
          } else if (k === MULTIPLY) {
            list.push(cards[i] * cards[j]);
          } else if (k === SUBTRACT) {
            list.push(cards[i] - cards[j]);
          } else if (k === DIVIDE) {
            // 判断是否小于10^-6, 因为有误差
            if (Math.abs(cards[i]) < EPSILON) {
              continue;
            } else {
              list.push(cards[i] / cards[j]);
            }
          }
          if (backtrack(list)) {
            return true;
          }
          list.pop();
        }
      }
    }
  }
  return false;
}
