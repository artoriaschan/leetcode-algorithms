/**
 * @param {string} dominoes
 * @return {string}
 */

// BFS, 超时
function pushDominoes1(dominoes) {
  const n = dominoes.length;
  const queue = []; // 依次遍历受力点下标
  const time = new Array(n).fill(-1); // 保存受力点的时间
  const force = Array.from(new Array(n), () => []); // 保存受力点

  for (let i = 0; i < n; i++) {
    const f = dominoes.charAt(i);
    if (f !== ".") {
      queue.push(i);
      time[i] = 0;
      force[i].push(f);
    }
  }

  const res = new Array(n).fill(".");
  while (queue.length > 0) {
    const i = queue.shift();
    if (force[i].length === 1) {
      const f = force[i][0];
      res[i] = f;
      const ni = f === "L" ? i - 1 : i + 1;
      // 越界判断
      if (ni >= 0 && ni < n) {
        const t = time[i];
        if (time[ni] === -1) {
          queue.push(ni);
          time[ni] = t + 1;
          force[ni].push(f);
        } else if (time[ni] === t + 1) {
          force[ni].push(f);
        }
      }
    }
  }

  return res.join("");
}

function pushDominoes2(dominoes) {
  const s = [...dominoes];
  let n = s.length;
  let i = 0;
  let left = "L";
  while (i < n) {
    let j = i;
    while (j < n && s[j] === ".") {
      // 找到一段连续的没有被推动的骨牌
      j++;
    }
    const right = j < n ? s[j] : "R";
    if (left === right) {
      // 方向相同，那么这些竖立骨牌也会倒向同一方向
      while (i < j) {
        s[i++] = right;
      }
    } else if (left === "R" && right === "L") {
      // 方向相对，那么就从两侧向中间倒
      let k = j - 1;
      while (i < k) {
        s[i++] = "R";
        s[k--] = "L";
      }
    }
    left = right;
    i = j + 1;
  }
  return s.join("");
}
