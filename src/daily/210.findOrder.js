/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * 思路:
 *  拓扑排序:
 *    图存在环, 则不存在拓扑排序
 *    图为有向无环图, 则存在的拓扑排序的数量可能不止一个
 *  https://leetcode-cn.com/problems/course-schedule-ii/solution/bao-mu-shi-ti-jie-tuo-bu-pai-xu-si-lu-zen-yao-yi-2/
 */
// eslint-disable-next-line no-unused-vars
function findOrder(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0); // 初始化入度数组
  let graph = {}; // 哈希表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 构建入度数组
    if (graph[prerequisites[i][1]]) {
      // 构建哈希表
      graph[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      let list = [];
      list.push(prerequisites[i][0]);
      graph[prerequisites[i][1]] = list;
    }
  }
  let res = []; // 结果数组
  let queue = []; // 存放 入度为0的课
  for (let i = 0; i < numCourses; i++) {
    // 起初推入所有入度为0的课
    if (inDegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    // 没有了入度为0的课，没课可选，结束循环
    let cur = queue.shift(); // 出栈，代表选这门课
    res.push(cur); // 推入结果数组
    let toEnQueue = graph[cur]; // 查看哈希表，获取对应的后续课程
    if (toEnQueue && toEnQueue.length) {
      // 确保有后续课程
      for (let i = 0; i < toEnQueue.length; i++) {
        // 遍历后续课程
        inDegree[toEnQueue[i]]--; // 将后续课程的入度 -1
        if (inDegree[toEnQueue[i]] === 0) {
          // 一旦减到0，让该课入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return res.length === numCourses ? res : []; // 选齐了就返回res，否则返回[]
}
