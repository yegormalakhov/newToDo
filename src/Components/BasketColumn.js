import ColumnTitle from "./ColumnTitle";
import FruitCard from "./FruitCard";

function BasketColumn(props) {
  return (
    <div className="column">
      <ColumnTitle name={props.title} />
      <FruitCard fruit="Apple" />
      <FruitCard fruit="Fake fruit - potato" />
      <FruitCard fruit="Banana" />
    </div>
  );
}

export default BasketColumn;
