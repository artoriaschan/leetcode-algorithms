// https://leetcode-cn.com/problems/course-schedule-ii/

function findOrder(numCourses, prerequisites) {
  // 图中是否存在环
  // 拓扑排序，图 G 中存在环（即图 G 不是「有向无环图」），那么图 G 不存在拓扑排序。

  let valid = true;
  const edges = [];
  let visited = new Array(numCourses).fill(0); // 0=未搜索，1=搜索中，2=已完成
  const result = [];

  function dfs(course) {
    visited[course] = 1;
    for (const v of edges[course]) {
      // 如果「未搜索」那么搜索相邻节点
      if (visited[v] === 0) {
        dfs(v);
        if (!valid) {
          return;
        }
        // 如果「搜索中」说明找到了环
      } else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }
    visited[course] = 2;
    // 将节点入栈
    result.unshift(course);
  }
  for (let i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
  }
  // 每次挑选一个「未搜索」的节点，开始进行深度优先搜索
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }
  if (!valid) return [];
  // 如果没有环，那么就有拓扑排序
  return result;
}

const numCourses = 2;
const prerequisites = [[1, 0]];

console.log(findOrder(numCourses, prerequisites));
