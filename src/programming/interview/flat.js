// In: [1, 2, [3, [4, 5]]]
// Out: [1, 2, 3, 4, 5]
//
// 如果指定深度为 1，那么：
// In: [1, 2, [3, [4, 5]]]
// Out: [1, 2, 3, [4, 5]]
//
// 请完成相应的函数
// function flat(arr) {
//   const res = [];
//   const stack = [...arr];
//   while (stack.length) {
//     const top = stack.pop();
//     if (Array.isArray(top)) {
//       stack.push(...top);
//     } else {
//       res.push(top);
//     }
//   }
//   return res.reverse();
// }
function flat(arr, depth = Infinity) {
  return depth > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
    : arr.slice();
}
const arr = [1, 2, [3, [4, 5]], [6], [7, [8], 9]];

console.log(flat(arr, 1));
