import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState();

  return <TaskContext.Provider value={task}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
