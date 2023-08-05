import { TaskProvider } from "./TodoAppContextApi/TaskContext";
import QuoteGenerator from "./components/QuoteGenerator";
import TimerApp from "./components/TimerApp";
import Counter from "./components/todo-app/Counter";
import Todo from "./components/todo-app/todo";

function App() {
  return (
    <TaskProvider>
      {/* <div className="main__div container my-2">
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
      </div> */}
    </TaskProvider>
  );
}

export default App;
