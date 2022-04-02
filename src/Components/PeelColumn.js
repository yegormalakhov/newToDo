import ColumnTitle from "./ColumnTitle";
import FruitCard from "./FruitCard";

function PeelColumn(props) {
  return (
    <div className="column">
      <ColumnTitle name={props.title} />
      <FruitCard fruit="bomb Fruit" />
    </div>
  );
}

export default PeelColumn;
