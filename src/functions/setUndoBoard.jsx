const setUndoBoard = (game, setGame, mode) => {
  const newBoard = Array(game.numCol)
    .fill()
    .map(() => Array(game.numRow));

  if (mode === "do") {
    console.log("do");
    for (let i = 0; i < game.numCol; i++) {
      for (let j = 0; j < game.numRow; j++) {
        newBoard[i][j] = game.board[i][j];
      }
    }
    setGame((prevGame) => ({
      ...prevGame,
      undoBoard: newBoard,
    }));
  } else if (mode === "undo") {
    console.log("undo");
    for (let i = 0; i < game.numCol; i++) {
      for (let j = 0; j < game.numRow; j++) {
        newBoard[i][j] = game.undoBoard[i][j];
      }
    }
    setGame((prevGame) => ({
      ...prevGame,
      board: newBoard,
      player: prevGame.player === 1 ? 2 : 1,
    }));
  } else {
    return;
  }
};

export default setUndoBoard;
