import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList.js'

function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false }])
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text"/>
      <button>Add</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </>
    
  )
}

export default App;
