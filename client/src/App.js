import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.js';
import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // getting stored todos from local drive
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []) //empty array will call this once, will not be recalled

  // stores in local drive
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) //runs everytime anything in array changes

  function handleAdd(e){
    const name = todoNameRef.current.value
    if(name === "") return
    // loads all todos plus new one gets added
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
