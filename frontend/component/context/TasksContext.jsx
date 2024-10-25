// context/TasksContext.js
import React, { createContext, useState, useEffect } from "react";
import { get, set } from "../../Utilitis/localStorage";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => get());
  useEffect(() => {
    set(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};
