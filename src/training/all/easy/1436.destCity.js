/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const starts = new Set();
  const ends = new Set();
  for (let path of paths) {
    starts.add(path[0]);
    ends.add(path[1]);
  }
  let res = "";
  for (let end of ends) {
    if (!starts.has(end)) {
      res = end;
      break;
    }
  }
  return res;
}

const paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];
console.log(destCity(paths));
