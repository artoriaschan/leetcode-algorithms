/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 * 思路:
 *  拓扑排序: 这题其实是典型的有优先级限制的调度问题，我们可以使用拓扑排序来解决这样的问题。
 */
// eslint-disable-next-line no-unused-vars
function minimumSemesters(N, relations) {
  // 入度
  const preClassCount = new Array(N + 1).fill(0);
  preClassCount[0] = null;
  // 直接后继
  const nextClasses = Array.from(new Array(N + 1), () => new Array(0));
  nextClasses[0] = null;
  const learn = [];
  for (let i = 1; i <= N; ++i) {
    preClassCount[i] = 0;
  }
  for (const relation of relations) {
    const [currClass, nextClass] = relation;
    preClassCount[nextClass] += 1;

    const temp = nextClasses[currClass];
    temp.push(nextClass);
    nextClasses[currClass] = temp;
  }

  for (let i = 1; i <= N; i++) {
    if (preClassCount[i] === 0) {
      learn.push(i);
    }
  }
  if (!learn.length) {
    // 没有入度为0的
    return -1;
  }
  let term = 0;
  let leftNodeCount = N;
  while (learn.length) {
    let list = [];
    while (learn.length) {
      list.push(learn.pop());
    }
    term++;
    leftNodeCount -= list.length;
    // 将所有已学习的课程的直接后置课程的入度减 1。
    for (const clazz of list) {
      const classArr = nextClasses[clazz];
      if (!classArr) continue;
      for (let classId of classArr) {
        preClassCount[classId] -= 1;
        if (preClassCount[classId] === 0) {
          learn.push(classId);
        }
      }
    }
  }
  return leftNodeCount > 0 ? -1 : term;
}
