/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 思路:
 *  该题目可以简化为判断图是否包含环
 *  思路是通过 拓扑排序 判断此课程安排图是否是 有向无环图(DAG) 。
 *  拓扑排序原理： 对 DAG 的顶点进行排序，使得对每一条有向边 (u,v)，均有 u（在排序记录中）比 v 先出现。
 *    亦可理解为对某点 v 而言，只有当 v 的所有源点均出现了，v才能出现。
 * https://leetcode-cn.com/problems/course-schedule/solution/course-schedule-tuo-bu-pai-xu-bfsdfsliang-chong-fa/
 */
// eslint-disable-next-line no-unused-vars
function canFinish(numCourses, prerequisites) {
  let indegrees = new Array(numCourses).fill(0);
  let adjacency = Array.from(new Array(numCourses), () => []);
  let queue = [];
  // Get the indegree and adjacency of every course.
  for (let cp of prerequisites) {
    indegrees[cp[0]]++;
    adjacency[cp[1]].push(cp[0]);
  }
  // Get all the courses with the indegree of 0.
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  // BFS TopSort.
  while (queue.length !== 0) {
    let pre = queue.pop();
    numCourses--;
    for (let cur of adjacency[pre]) {
      if (--indegrees[cur] === 0) queue.push(cur);
    }
  }
  return numCourses === 0;
}
