const d = [
  [-1, 0], // 上
  [1, 0], // 下
  [0, -1], // 左
  [0, 1], // 右
];

function floodFill(image, sr, sc, newColor) {
  const rows = image.length;
  const cols = image[0].length;
  const visited = Array.from(new Array(rows), () => new Array(cols).fill(false));
  dfs(image, sr, sc, newColor, image[sr][sc], visited);
  return image;
}

function dfs(image, sr, sc, newColor, target, visited) {
  const rows = image.length;
  const cols = image[0].length;
  if (sr >= rows || sr < 0) return;
  if (sc >= cols || sc < 0) return;
  if (visited[sr][sc]) return;
  visited[sr][sc] = true;
  if (image[sr][sc] === target) {
    image[sr][sc] = newColor;
  } else {
    return;
  }
  for (let item of d) {
    dfs(image, sr + item[0], sc + item[1], newColor, target, visited);
  }
}
