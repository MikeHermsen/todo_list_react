import logo from './logo.svg';
import React, { Component }  from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
