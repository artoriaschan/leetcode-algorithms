/**
 * 头条一面
 * 实现如下形式的函数
 * fn(1)(2)(3)() === 6
 * fn(1, 2, 3) === 6
 */
function fn(...args) {
  let sum = 0;
  if (args.length === 0) return null;
  if (args.length > 1) {
    for (let arg of args) {
      sum += arg;
    }
    return sum;
  }
  sum += args[0];
  function internal(num) {
    if (num) {
      sum += num;
      return internal;
    }
    return sum;
  }
  return internal;
}
console.log(fn(1)(2)(3)());
console.log(fn(1, 2, 3));
console.log(fn());
