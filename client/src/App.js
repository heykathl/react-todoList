import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList.js';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAdd(e){
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null // clear inputs
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAdd}>Add</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </>
    
  )
}

export default App;
