import React from 'react';
import Background from './../assets/images/back.jpg';
import './App.css';
import ToDoList from './ToDoList';
import ToDoListContextProvider from './../context/TodoListContext';
import ToDoForm from './ToDoForm';
const App = () => {
  return (
    <ToDoListContextProvider>
      <div className="App">
        <img src={Background} alt="background" id="background"></img>
        <div className="app-wrapper">
          <div className="main">
            <h1 className="ProjectTitle">Posidoon ToDo List</h1>
            <ToDoForm />
            <ToDoList />
          </div>
        </div>
      </div>
    </ToDoListContextProvider>
  );
};
export default App;
