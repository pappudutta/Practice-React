import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const toggleTask = task => {
    const newId = task.id;
    const newDone = task.done;
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === newId) {
          return { ...task, isDone: !newDone };
        }
        return prevTasks;
      });
    });
  };

  const handleDelete = taskIdDelete => {
    setTasks(tasks.filter(task => task.id !== taskIdDelete));
  };
  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleDelete, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
