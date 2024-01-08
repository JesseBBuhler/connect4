import "./Home.css";
import Cell from "../components/Cell";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const numCol = 7;
  const numRow = 6;
  const claimed = Array(numCol)
    .fill()
    .map(() => Array(numRow).fill("unclaimed"));
  return (
    <div className="container">
      {claimed.map((row, rowIndex) => (
        <div key={rowIndex} className="file">
          {row.map((col, colIndex) => (
            <div key={colIndex} className="rank">
              <Cell claimed={col}></Cell>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
