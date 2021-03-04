/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  // 只要学生中还有能和就餐窗口匹配的学生，就一直while循环下去
  while (students.some(ele => ele === sandwiches[0])) {
    // 匹配成功学生和三明治都删除
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      // 拿出第一个学生塞到队列最后
      let first = students.shift();
      students.push(first);
    }
  }
  return students.length;
}
