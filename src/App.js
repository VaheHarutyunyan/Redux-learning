import "./App.css";
import Counter from "./component/Counter/Counter";
import Parent from "./component/Parent/Parent";
import Todos from "./component/Todos/Todos";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
      <div>
        <Todos />
      </div>
      <div>
        <Parent />
      </div>
    </div>
  );
}

export default App;
