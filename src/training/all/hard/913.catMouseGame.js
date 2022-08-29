/**
 * @param {number[][]} graph
 * @return {number}
 */

// 动态规划，超时
function catMouseGameWithDP(graph) {
  const MOUSE_WIN = 1;
  const CAT_WIN = 2;
  const DRAW = 0;
  const n = graph.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2 * n * (n - 1)).fill(-1)));

  const getResult = (mouse, cat, turns) => {
    // 超过 2n(n - 1) 次，必和状态
    if (turns === 2 * n * (n - 1)) {
      return DRAW;
    }
    let res = dp[mouse][cat][turns];
    if (res !== -1) {
      return res;
    }
    // 老鼠到达节点 0，老鼠胜利
    if (mouse === 0) {
      res = MOUSE_WIN;
      // 猫抓到老鼠，猫胜利
    } else if (cat === mouse) {
      res = CAT_WIN;
    } else {
      // 获取下一个结果
      res = getNextResult(mouse, cat, turns);
    }
    dp[mouse][cat][turns] = res;
    return res;
  };

  const getNextResult = (mouse, cat, turns) => {
    // 获取谁在移动
    const curMove = turns % 2 === 0 ? mouse : cat;
    // 老鼠阶段，默认为猫的必胜状态
    // 猫阶段，默认为老鼠的必胜状态
    const defaultRes = curMove !== mouse ? MOUSE_WIN : CAT_WIN;
    let res = defaultRes;
    for (const next of graph[curMove]) {
      // 跳过猫阶段的 0 节点
      if (curMove === cat && next === 0) {
        continue;
      }
      const nextMouse = curMove === mouse ? next : mouse;
      const nextCat = curMove === cat ? next : cat;
      // 获取下一回合的结果
      const nextRes = getResult(nextMouse, nextCat, turns + 1);
      // 如果下一回合的结果与默认结果不相同，赋值下一回合结果
      if (nextRes !== defaultRes) {
        res = nextRes;
        // 结果为必胜结果或者必败结果 跳出循环
        if (res !== DRAW) {
          break;
        }
      }
    }
    return res;
  };

  return getResult(1, 2, 0);
}

// 拓扑排序
const MOUSE_TURN = 0;
const CAT_TURN = 1;
const DRAW = 0;
const MOUSE_WIN = 1;
const CAT_WIN = 2;

function getPrevStates(mouse, cat, turn, graph) {
  const prevStates = [];
  const prevTurn = turn === MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
  if (prevTurn === MOUSE_TURN) {
    for (const prev of graph[mouse]) {
      prevStates.push([prev, cat, prevTurn]);
    }
  } else {
    for (const prev of graph[cat]) {
      if (prev !== 0) {
        prevStates.push([mouse, prev, prevTurn]);
      }
    }
  }
  return prevStates;
}
function catMouseGame(graph) {
  const n = graph.length;
  const degrees = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(0)));
  const results = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(0)));
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      degrees[i][j][MOUSE_TURN] = graph[i].length;
      degrees[i][j][CAT_TURN] = graph[j].length;
    }
  }
  for (const node of graph[0]) {
    for (let i = 0; i < n; i++) {
      degrees[i][node][CAT_TURN]--;
    }
  }
  for (let j = 1; j < n; j++) {
    results[0][j][MOUSE_TURN] = MOUSE_WIN;
    results[0][j][CAT_TURN] = MOUSE_WIN;
    queue.push([0, j, MOUSE_TURN]);
    queue.push([0, j, CAT_TURN]);
  }
  for (let i = 1; i < n; i++) {
    results[i][i][MOUSE_TURN] = CAT_WIN;
    results[i][i][CAT_TURN] = CAT_WIN;
    queue.push([i, i, MOUSE_TURN]);
    queue.push([i, i, CAT_TURN]);
  }
  while (queue.length) {
    const state = queue.shift();
    const mouse = state[0];
    const cat = state[1];
    const turn = state[2];
    const result = results[mouse][cat][turn];
    const prevStates = getPrevStates(mouse, cat, turn, graph);
    for (const prevState of prevStates) {
      let prevMouse = prevState[0];
      let prevCat = prevState[1];
      let prevTurn = prevState[2];
      if (results[prevMouse][prevCat][prevTurn] === DRAW) {
        const canWin =
          (result === MOUSE_WIN && prevTurn === MOUSE_TURN) || (result === CAT_WIN && prevTurn === CAT_TURN);
        if (canWin) {
          results[prevMouse][prevCat][prevTurn] = result;
          queue.push([prevMouse, prevCat, prevTurn]);
        } else {
          degrees[prevMouse][prevCat][prevTurn]--;
          if (degrees[prevMouse][prevCat][prevTurn] === 0) {
            const loseResult = prevTurn === MOUSE_TURN ? CAT_WIN : MOUSE_WIN;
            results[prevMouse][prevCat][prevTurn] = loseResult;
            queue.push([prevMouse, prevCat, prevTurn]);
          }
        }
      }
    }
  }
  return results[1][2][MOUSE_TURN];
}
