import React, {useContext} from 'react';
import {ToDoListContext} from './../context/TodoListContext';
import Task from './Task';
/**
 * Accepts a context object (the value returned from React.createContext)
 *  and returns the current context value for that context.
 * The current context value is determined by the value prop of the nearest <MyContext.Provider>
 *  above the calling component in the tree.
 */
const ToDoList = () => {
  const {tasks} = useContext(ToDoListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default ToDoList;
