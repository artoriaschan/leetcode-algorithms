/* eslint-disable default-case */
/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let verticalDirection = 0;
  let horizontalDirection = 0;
  for (let move of moves) {
    switch (move) {
      case "L":
        verticalDirection--;
        break;
      case "R":
        verticalDirection++;
        break;
      case "U":
        horizontalDirection--;
        break;
      case "D":
        horizontalDirection++;
        break;
    }
  }
  if (verticalDirection === 0 && horizontalDirection === 0) return true;
  return false;
}
