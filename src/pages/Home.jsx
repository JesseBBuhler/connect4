import "./Home.css";
import Cell from "../components/Cell";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GameSetUp from "../functions/GameSetUp";
import UpdateGame from "../functions/UpdateGame";
import setUndoBoard from "../functions/setUndoBoard";

const Home = () => {
  const numCol = 7;
  const numRow = 6;
  const [game, setGame] = useState(GameSetUp(numCol, numRow));

  const undoMove = () => {
    setUndoBoard(game, setGame, "undo");
  };

  const restartGame = () => {
    setGame(GameSetUp(numCol, numRow));
  };

  const fileSelected = (colIndex) => {
    if (!game.winner) {
      UpdateGame(colIndex, game, setGame);
    }
  };

  return (
    <div className="connect4">
      <div
        className={`background claimedPlayer${
          game.winner ? game.winner : game.player
        }`}
      >
        <div className={`congradulations ${game.winner ? "" : "invisible"}`}>
          <h1>{`Player ${game.winner} Wins!`}</h1>
          <h2 className="playAgain" onClick={() => restartGame()}>
            Play Again?
          </h2>
        </div>
        <div className={`container`}>
          {game.board.map((col, colIndex) => (
            <div
              key={colIndex}
              onClick={() => fileSelected(colIndex)}
              className="file"
            >
              {col.map((row, rowIndex) => (
                <div key={rowIndex} className="rank">
                  <Cell board={row}></Cell>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="undoButton" onClick={() => undoMove()}>
          Undo
        </div>
      </div>
    </div>
  );
};

export default Home;
