/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles(rectangles) {
  let max = 0;
  let maxCount = 0;
  for (let rectangle of rectangles) {
    const edge = Math.min(rectangle[0], rectangle[1]);
    if (edge > max) {
      max = edge;
      maxCount = 1;
    } else if (edge === max) {
      maxCount++;
    }
  }
  return maxCount;
}
