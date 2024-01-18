const setUndoBoard = (game, setGame, mode) => {
  const newBoard = Array(game.numCol)
    .fill()
    .map(() => Array(game.numRow));

  if (mode === "do") {
    for (let i = 0; i < game.numCol; i++) {
      for (let j = 0; j < game.numRow; j++) {
        newBoard[i][j] = game.board[i][j];
      }
    }
    setGame((prevGame) => ({
      ...prevGame,
      undoBoard: newBoard,
    }));
  } else if (mode === "undo" && game.canUndo) {
    for (let i = 0; i < game.numCol; i++) {
      for (let j = 0; j < game.numRow; j++) {
        newBoard[i][j] = game.undoBoard[i][j];
      }
    }
    setGame((prevGame) => ({
      ...prevGame,
      board: newBoard,
      player: prevGame.player === 1 ? 2 : 1,
      canUndo: false,
    }));
  } else {
    return;
  }
};

export default setUndoBoard;
