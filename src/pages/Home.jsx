import "./Home.css";
import Cell from "../components/Cell";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ArraySetUp from "../functions/ArraySetUp";

const Home = () => {
  const [claimed, setClaimed] = useState(ArraySetUp());

  return (
    <div className="container">
      {claimed.map((col, colIndex) => (
        <div key={colIndex} className="file">
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
