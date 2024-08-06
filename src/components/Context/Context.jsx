import React, { useState, createContext } from "react";

// Crear contexto
export const TasksContext = createContext();

export const Contenx = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [checkedTasks, setCheckedTasks] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        checkedTasks,
        setTasks,
        setFilteredTasks,
        setCheckedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
