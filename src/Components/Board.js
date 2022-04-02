import BasketColumn from "./BasketColumn";
import PeelColumn from "./PeelColumn";
import CutColumn from "./CutColumn";

function Board() {
  return (
    <div className="board">
      <BasketColumn title="Fruit Basket" />
      <PeelColumn title="Peel, Peel, Peel!" />
      <CutColumn title="Cut them done!" />
    </div>
  );
}
export default Board;
