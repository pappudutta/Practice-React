import React, { useContext, useState } from "react";
import { TaskContext } from "../TodoAppContextApi/TaskContext";

const TodoList = () => {
  const { tasks, setTasks, handleDelete, toggleTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const addNewTask = { id: Date.now(), text: newTask, isDone: false };
    setTasks([...tasks, addNewTask]);
    setNewTask("");
  };

  return (
    <>
      <div>
        <h1>Todo List App with Context Api</h1>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add Items..."
        />
        <button onClick={handleAddTask}>Add Task</button>
        <div>
          {tasks.map(task => (
            <p onClick={() => toggleTask(task)} key={task.id}>
              <span>{task.text}</span>

              <button onClick={() => handleDelete(task.id)}>x</button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
