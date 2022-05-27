import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
      <input type="text"/>
      <button>Add</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </>
    
  )
}

export default App;
