import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import TimerApp from "./components/TimerApp";
import Counter from "./components/todo-app/Counter";
import Todo from "./components/todo-app/todo";

// function initialValue() {
//   console.log("run run");
//   return 0;
// }

function App() {
  return (
    <div className="main__div">
      <div className="box">
        <Counter />
      </div>
      <div className="box">
        <Todo />
      </div>
      <div className="box">
        <TimerApp />
      </div>
      <div className="box">
        <QuoteGenerator />
      </div>
    </div>
  );
}

export default App;
