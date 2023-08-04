import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    setTasks([...tasks, { id: Date.now(), task: newTask, isDone: false }]);
    setNewTask("");
  };

  const handleDelete = id => {
    setTasks(curr => curr.filter(task => task.id !== id));
  };

  const toggleIsDone = (id, isDone) => {
    setTasks(curr => {
      return curr.map(task => {
        if (task.id === id) {
          return { ...task, isDone: !isDone };
        }
        return task;
      });
    });
  };

  return (
    <>
      <h3>Todo App</h3>
      <div className="inputItems">
        <input
          type="text"
          autoFocus={true}
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add tasks here.."
        />
        {newTask === "" ? (
          <button disabled onClick={handleAdd}>
            Add
          </button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
      <ul>
        {tasks
          .map(task => (
            <li
              className="listItems"
              onClick={() => toggleIsDone(task.id, task.isDone)}
              key={task.id}
            >
              {task.isDone ? (
                <strike className="strike">{task.task}</strike>
              ) : (
                task.task
              )}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default Todo;
