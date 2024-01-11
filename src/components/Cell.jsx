import "./Cell.css";

const Cell = (props) => {
  return (
    <>
      <div className="frame">
        <div className={"circle " + props.board}>{props.number}</div>
      </div>
    </>
  );
};

export default Cell;
