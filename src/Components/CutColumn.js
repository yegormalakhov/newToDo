import ColumnTitle from "./ColumnTitle";

function CutColumn(props) {
  return (
    <div className="column">
      <ColumnTitle name={props.title} />
    </div>
  );
}

export default CutColumn;
