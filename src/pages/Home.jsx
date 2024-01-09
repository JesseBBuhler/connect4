import "./Home.css";
import Cell from "../components/Cell";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ArraySetUp from "../functions/ArraySetUp";
import UpdateClaimed from "../functions/UpdateClaimed";

const Home = () => {
  const [claimed, setClaimed] = useState(ArraySetUp());
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  const fileSelected = (colIndex) => {
    if (!winner) {
      setClaimed(
        UpdateClaimed(colIndex, claimed, player, setPlayer, setWinner, winner)
      );
    }
  };

  return (
    <div className={`container claimedPlayer${player}`}>
      {claimed.map((col, colIndex) => (
        <div
          key={colIndex}
          onClick={() => fileSelected(colIndex)}
          className="file"
        >
          {col.map((row, rowIndex) => (
            <div key={rowIndex} className="rank">
              <Cell claimed={row}></Cell>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
