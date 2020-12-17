/**
 * 3、数组去重
 *
 * @example
 * [1,'1',1]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 */

function uniqueArray(array) {
  const res = [];
  for (let x of array) {
    let flag = true;
    for (let y of res) {
      if (isEqual(x, y)) {
        flag = false;
        break;
      }
    }
    if (flag) res.push(x);
  }
  return res;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isEqual(value, other) {
  if (value === other) return true;
  if (isObject(value) && isObject(other)) {
    if (Object.keys(value).length !== Object.keys(other).length) return false;
    for (let prop of Object.keys(value)) {
      // eslint-disable-next-line no-prototype-builtins
      if (!other.hasOwnProperty(prop)) return false;
      if (!isEqual(value[prop], other[prop])) return false;
    }
    return true;
  }
  return false;
}

console.log(uniqueArray([1, "1", 1]));
console.log(uniqueArray([{ a: 1 }, { b: 1 }, { a: 1 }]));
console.log(uniqueArray([{ a: 1, b: 2 }, { b: 1 }, { a: 1, b: 2 }]));
console.log(uniqueArray([[1, { a: 1 }], [2], [3], [1, { a: 1 }]]));
console.log(uniqueArray([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]));
