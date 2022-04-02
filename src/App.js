import Header from "./Components/Header";
import "./App.css";
import Board from "./Components/Board";
import "./Components/styles.css";

const fruitChoice = [
  { name: "apple" },
  "pear",
  "banana",
  "jackfruit",
  "fake fruit - potato",
  "hard fruit - nut",
];

function App() {
  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}

export default App;
