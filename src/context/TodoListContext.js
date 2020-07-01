import React, {createContext, useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';
//Creates a Context object.
//When React renders a component that subscribes to this Context object
// it will read the current context value
//from the closest matching Provider above it in the tree.
export const ToDoListContext = createContext();

const ToDoListContextProvider = (props) => {
  /**
   * get the data from the local storage
   */
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  /**
   * useState is a Hook that lets you add React state to function components.
   */
  const [tasks, setTask] = useState(initialState);
  const [EditItem, setEditTask] = useState(null);
  /**
   * @function
   * @description set the new task with all the tasks and the new title and id
   * @param {string} title
   */
  const AddTask = (title) => {
    setTask([...tasks, {title, id: uuid()}]);
  };
  /**
   * @function
   * @description take the id and see if this id is == the to the all ids in the array then filter the array
   * @param {int} id
   */
  const RemoveTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  /**
   * @function
   * @description set the array to empty array
   */
  const ClearTasks = () => {
    setTask([]);
  };
  /**
   * @function
   * @description looking for a task by searching with the id then send it to the edit function
   * @param {int} id
   */
  const FindTask = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditTask(item);
  };
  /**
   * @function
   * @description make a new var contains the selected task and send a new array contains the new task
   * then set the editTask to null to make the input field empty again
   * @param {string} title
   * @param {int} id
   */
  const EditTasks = (title, id) => {
    const NewTasks = tasks.map((task) => (task.id === id ? {title, id} : task));
    setTask(NewTasks);
    setEditTask(null);
  };
  /**
   * useEffect Accepts a function that contains imperative, possibly effect ful code
   * set the task in the local storage 
   */
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
