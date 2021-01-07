/* eslint-disable no-restricted-globals */
/* eslint-disable no-prototype-builtins */
/**
 * 有赞一面
 * 实现全等判断方法
 * @param {*} objA
 * @param {*} objB
 */
function isEqual(objA, objB) {
  if (objA === objB) return true;
  if (isObject(objA) && isObject(objB)) {
    if (Object.keys(objA).length !== Object.keys(objB).length) return false;
    for (const prop of Object.keys(objA)) {
      if (!objB.hasOwnProperty(prop)) return false;
      if (!isEqual(objA[prop], objB[prop])) return false;
    }
    return true;
  }
  if (isNaN(objA) && isNaN(objB)) return true;
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}

const obj1 = {
  a: NaN,
  b: {
    c: "hello",
  },
  c: [1, 2, 3],
};

const obj2 = {
  a: NaN,
  b: {
    c: "hello",
  },
  c: [1, 2, 3],
};

console.log("isEqual: ", isEqual(obj1, obj2)); // true
