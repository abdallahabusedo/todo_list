import React, {useContext} from 'react';
import {ToDoListContext} from './../context/TodoListContext';

const Task = ({task}) => {
  const {RemoveTask, FindTask} = useContext(ToDoListContext);
  return (
    <li className="list-item">
      <span className="TaskTitle">{task.title}</span>
      <div className="Btns">
        <button
          className="btn-delete task-btn"
          onClick={() => RemoveTask(task.id)}
        >
          <i className="fa fa-trash-alt task-btn" />
        </button>
        <button className="btn-edit task-btn" onClick={() => FindTask(task.id)}>
          <i className="fa fa-pen task-btn" />
        </button>
      </div>
    </li>
  );
};

export default Task;
