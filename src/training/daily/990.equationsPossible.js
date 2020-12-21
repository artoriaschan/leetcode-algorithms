/* eslint-disable camelcase */
/**
 * @param {string[]} equations
 * @return {boolean}
 * 思路:
 *  并查集
 *    将每一个变量看作图中的一个节点，把相等的关系 == 看作是连接两个节点的边，那么由于表示相等关系的等式方程具有传递性，
 *    即如果 a==b 和 b==c 成立，则 a==c 也成立。也就是说，所有相等的变量属于同一个连通分量。
 */
// eslint-disable-next-line no-unused-vars
function equationsPossible(equations) {
  const uf = new UnionFind(26);
  for (const e of equations) {
    // 将字母对应成数字
    if (e[1] === "=") uf.union(e.charCodeAt(0) - 97, e.charCodeAt(3) - 97);
  }
  for (const e of equations) {
    if (e[1] === "!" && uf.findRoot(e.charCodeAt(0) - 97) === uf.findRoot(e.charCodeAt(3) - 97)) return false;
  }
  return true;
}

class UnionFind {
  constructor(num) {
    // num 顶点个数
    this.roots = new Array(num);
    this.ranks = new Array(num);
    for (let i = 0; i < num; i++) {
      this.roots[i] = -1;
      this.ranks[i] = 0;
    }
  }

  findRoot(x) {
    // 找出顶点x的根节点
    let x_root = x;
    while (this.roots[x_root] !== -1) {
      // 一直找父节点，找到尽头
      x_root = this.roots[x_root];
    }
    return x_root; // 返回根节点
  }

  union(x, y) {
    // 把顶点x和顶点y所在的集合合并到一起
    let x_root = this.findRoot(x);
    let y_root = this.findRoot(y);
    if (x_root === y_root) return;
    let x_rank = this.ranks[x_root];
    let y_rank = this.ranks[y_root];
    if (x_rank < y_rank) {
      // 谁高度大，谁就作为根节点
      this.roots[x_root] = y_root;
    } else if (y_rank < x_rank) {
      this.roots[y_root] = x_root;
    } else {
      // 一样高，谁作为根节点都行
      this.roots[y_root] = x_root;
      this.ranks[x_root]++;
    }
  }
}
