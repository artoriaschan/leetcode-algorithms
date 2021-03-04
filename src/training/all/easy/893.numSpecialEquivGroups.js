/**
 * @param {string[]} A
 * @return {number}
 */
function numSpecialEquivGroups(A) {
  const map = new Map();
  function genKey(S) {
    const serialize = S.split("").reduce(
      (acc, item, index) => {
        if (index % 2 === 0) {
          acc.even.push(item);
        } else {
          acc.odd.push(item);
        }
        return acc;
      },
      { odd: [], even: [] }
    );
    serialize.odd.sort();
    serialize.even.sort();
    return serialize.odd.concat("+", serialize.even).join("");
  }
  for (let S of A) {
    const key = genKey(S);
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  return map.size;
}
