function isObject(value) {
  return value !== null && typeof value === "object";
}
function isEqual(value, other) {
  if (value === other) return true;
  if (isObject(value) && isObject(other)) {
    if (Object.keys(value).length !== Object.keys(other).length) return false;
    for (let prop in value) {
      // eslint-disable-next-line no-prototype-builtins
      if (!other.hasOwnProperty(prop)) return false;
      if (!isEqual(value[prop], other[prop])) return false;
    }
    return true;
  }
  return false;
}

// test
function fn() {}
const symbol = Symbol("foo");
const a = {
  number: 1,
  string: "string",
  symbol: symbol,
  array: [1, 2, 3, 4],
  object: {
    name: "xxx",
  },
  func: fn,
};
const b = {
  number: 1,
  string: "string",
  symbol: symbol,
  array: [1, 2, 3, 4],
  object: {
    name: "xxx",
  },
  func: fn,
};
console.log(isEqual(a, b));
