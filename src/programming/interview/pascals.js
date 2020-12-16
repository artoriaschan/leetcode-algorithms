function pascals(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let pre = [1, 1];
  for (let i = 3; i <= n; i++) {
    const res = [1];
    let j = 1;
    for (; j < i - 1; j++) {
      res[j] = pre[j - 1] + pre[j];
    }
    res[j] = 1;
    pre = res;
  }
  return pre;
}

console.log(pascals(5));
