import CheckForWinner from "./CheckForWinner";
import setUndoBoard from "./setUndoBoard";

const UpdateGame = (col, game, setGame) => {
  setUndoBoard(game, setGame, "do");
  let row = game.numRow - 1;

  while (game.board[col][row] !== "unclaimed" && row >= 0) {
    row = row - 1;
  }
  if (row >= 0) {
    const updatedGame = { ...game };
    updatedGame.board[col][row] = `claimedPlayer${game.player}`;
    let winner = CheckForWinner(game, col, row);

    setGame((prevGame) => ({
      ...prevGame,
      winner: winner,
      board: updatedGame.board,
      canUndo: winner ? false : true,
    }));

    if (!game.winner) {
      setGame((prevGame) => ({
        ...prevGame,
        player: prevGame.player === 1 ? 2 : 1,
      }));
    }
  }
};

export default UpdateGame;
