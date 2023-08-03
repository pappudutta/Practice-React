import React, { useState } from "react";

const TodoApp = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleChange = e => {
    setNewTask(e.target.value);
  };
  const addTodo = tid => {
    setTasks(prevTask => {
      return tid === id
        ? [...prevTask, { id: Date.now(), task: "hello" }]
        : [...prevTask, { id: Date.now(), task: newTask }];
    });
    setNewTask("");
  };

  const handleToggle = id => {
    let newEdit = tasks.find(task => {
      return task.id === id;
    });
    console.log(newEdit);
    setToggle(false);
    setNewTask(newEdit.task);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <input type="text" onChange={handleChange} value={newTask} />
      <button onClick={addTodo}>Add</button>
      <ul>
        List of tasks:
        {tasks
          .map(t => {
            return (
              <li
                key={t.id}
                onClick={() => handleToggle(t.id)}
                style={{ cursor: "pointer" }}
              >
                {t.task}
              </li>
            );
          })
          .reverse()}
      </ul>
    </>
  );
};

export default TodoApp;
