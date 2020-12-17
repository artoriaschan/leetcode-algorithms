/**
 * 2、实现 getValue 函数，安全的获取目标对象指定 path 的值
 * @params {object | array} value 指定对象
 * @params {string} path
 */

const object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
const array = [{ a: { b: [1, 2] } }]; // path: '[0].a.b[0]'

function getValue(obj, path) {
  let target = obj;
  const pathArr = path.split(".");
  for (let prop of pathArr) {
    // 检测prop
    // 访问对象中的数组属性
    if (prop.indexOf("[") > -1) {
      // 获取属性名
      const arrayName = prop.slice(0, prop.indexOf("["));
      // 获取数组下标
      const index = prop.slice(prop.indexOf("[") + 1, prop.indexOf("]"));
      if (arrayName !== "") target = target[arrayName];
      if (!target) return null;
      // 获取数组对应的属性
      if (Array.isArray(target)) {
        if (index < target.length) {
          target = target[index];
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      // 获取对象中的普通属性
      target = target[prop];
    }
    // 判断获取的target是否有值
    if (!target) return null;
  }
  return target;
}
let value = getValue(object, "a[0].b.c");
console.log(value);
value = getValue(object, "a[0].b.c.d");
console.log(value);
value = getValue(array, "[0].a.b[0].[8]");
console.log(value);
value = getValue(array, "[0].a.b[1]");
console.log(value);
