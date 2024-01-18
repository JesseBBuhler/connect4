const GameSetUp = (numCol, numRow) => {
  const board = Array(numCol)
    .fill()
    .map(() => Array(numRow).fill("unclaimed"));

  const undoBoard = Array(numCol)
    .fill()
    .map(() => Array(numRow).fill("unclaimed"));

  let game = {
    board: board,
    player: 1,
    winner: 0,
    numCol: numCol,
    numRow: numRow,
    undoBoard: undoBoard,
  };
  return game;
};

export default GameSetUp;
