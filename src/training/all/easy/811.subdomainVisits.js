/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    let [count, full] = cpdomains[i].split(" ");
    count = parseInt(count, 10);
    const tmp = full.split(".").reverse();
    for (let i = 0; i < tmp.length; i++) {
      const key = tmp
        .slice(0, i + 1)
        .reverse()
        .join(".");
      if (map.has(key)) {
        const old = map.get(key);
        map.set(key, old + count);
      } else {
        map.set(key, count);
      }
    }
  }
  const result = [];
  map.forEach((value, key) => {
    result.push(`${value} ${key}`);
  });
  return result;
}

const cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));
