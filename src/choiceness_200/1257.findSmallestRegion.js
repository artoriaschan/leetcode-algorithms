/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 * 最近公共祖先问题（LCA：Lowest common ancestor），指的是在“树”中寻找某两个结点的最近的公共祖先。
 */
// eslint-disable-next-line no-unused-vars
function findSmallestRegion(regions, region1, region2) {
  // 记录父结点
  const parent = new Map();
  for (const [p, ...children] of regions) {
    for (const child of children) {
      parent.set(child, p);
    }
  }

  // 标记x的路径
  const xx = new Set();
  xx.add(region1);
  while (parent.has(region1)) {
    region1 = parent.get(region1);
    xx.add(region1);
  }

  // 从y开始寻找共同祖先
  if (xx.has(region2)) return region2;
  while (parent.has(region2)) {
    region2 = parent.get(region2);
    if (xx.has(region2)) return region2;
  }
}
