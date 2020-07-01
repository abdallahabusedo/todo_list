import React, {createContext, useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';
//Creates a Context object.
//When React renders a component that subscribes to this Context object
// it will read the current context value
//from the closest matching Provider above it in the tree.

export const ToDoListContext = createContext();
const ToDoListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTask] = useState(initialState);
  const [EditItem, setEditTask] = useState(null);
  const AddTask = (title) => {
    setTask([...tasks, {title, id: uuid()}]);
  };
  const RemoveTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const ClearTasks = () => {
    setTask([]);
  };
  const FindTask = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditTask(item);
  };

  const EditTasks = (title, id) => {
    const NewTasks = tasks.map((task) => (task.id === id ? {title, id} : task));
    setTask(NewTasks);
    setEditTask(null);
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <ToDoListContext.Provider
      value={{
        tasks,
        AddTask,
        RemoveTask,
        ClearTasks,
        FindTask,
        EditTasks,
        EditItem,
      }}
    >
      {props.children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
