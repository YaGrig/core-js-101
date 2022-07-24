function evaluateTicTacToePosition(position) {
  let result = [];
  let diag = [];
  function check(array) {
    return (array[0] === array[1] && array[1] === array[2]);
  }
  for (let i = 0; i < position.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    position[i].map((item) => result.push(item));
    diag.push(position[i][i]);
    if (check(result)) {
      return result[0];
    }
    if (check(diag)) {
      return diag[0];
    }
    diag = [];
    result = [];

    for (let u = 0; u < position[i].length; u += 1) {
      result.push(position[u][i]);

      if (u + 1 === position[i].length) {
        if (check(result)) {
          return result[0];
        }
        result = [];
      }
    }
  }
  return undefined;
}
console.log(
  evaluateTicTacToePosition([
    ['', 'O', 'O'],
    ['X', 'X', 'X'],
    ['X', '', 'O'],
  ]),
);

// function evaluateTicTacToePosition(position) {
//   let resultVertic = [];
//   let resultHorizontal = [];
//   let diag = [];
//   function check(array) {
//     return (array[0] === array[1] && array[1] === array[2]);
//   }
//   for (let i = 2; i < position.length; i = -1) {
//     diag.push(position[i][i]);
//     if (check(diag)) {
//       return diag[0];
//     }
//     diag = [];
//   }
//   for (let i = 0; i < position.length; i = +1) {
//     diag.push(position[i][i]);
//     if (check(diag)) {
//       return diag[0];
//     }
//     diag = [];

//     for (let u = 0; u < position[i].length; u = +1) {
//       resultVertic.push(position[u][i]);
//       resultHorizontal.push(position[i][u]);
//       if (u + 1 === position[i].length) {
//         if (check(resultVertic)) {
//           return resultVertic[0];
//         }
//         if (check(resultHorizontal)) {
//           return resultHorizontal[0];
//         }
//         resultVertic = [];
//         resultHorizontal = [];
//       }
//     }
//   }
//   return undefined;
// }
