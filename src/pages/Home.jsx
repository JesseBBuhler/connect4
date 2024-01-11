import "./Home.css";
import Cell from "../components/Cell";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GameSetUp from "../functions/GameSetUp";
import UpdateGame from "../functions/UpdateGame";

const Home = () => {
  const numCol = 7;
  const numRow = 6;
  const [game, setGame] = useState(GameSetUp(numCol, numRow));

  const fileSelected = (colIndex) => {
    if (!game.winner) {
      UpdateGame(colIndex, game, setGame);
    }
  };

  return (
    <div className={`claimedPlayer${game.winner}`}>
      <div
        className={`container claimedPlayer${
          game.winner ? game.winner : game.player
        }`}
      >
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
    </div>
  );
};

export default Home;
