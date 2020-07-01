import React, {useContext, useState, useEffect} from 'react';
import {ToDoListContext} from './../context/TodoListContext';

const ToDoForm = () => {
  const {AddTask, ClearTasks, EditTasks, EditItem} = useContext(
    ToDoListContext
  );
  const [title, setTitle] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!EditItem) {
      AddTask(title);
      setTitle('');
    } else {
      EditTasks(title, EditItem.id);
    }
  };
  const handelChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  useEffect(() => {
    if (EditItem) {
      setTitle(EditItem.title);
    } else {
      setTitle('');
    }
  }, [EditItem]);
  return (
    <form className="form" onSubmit={handelSubmit}>
      <input
        onChange={handelChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <span>
        <button className="add-task-btn btn" type="submit">
          {EditItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="clear-btn btn" onClick={() => ClearTasks()}>
          Clear
        </button>
      </span>
    </form>
  );
};

export default ToDoForm;
