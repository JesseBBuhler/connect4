import "./Cell.css";

const Cell = (props) => {
  return (
    <>
      <div className="frame">
        <div className={"circle " + props.claimed}>{props.number}</div>
      </div>
    </>
  );
};

export default Cell;
