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

  function toggleTodo(id) {
    const newTodos = [...todos] //create a copy, never modify state variable
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAdd(e){
    const name = todoNameRef.current.value
    if(name === "") return
    // loads all todos plus new one gets added
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null // clear inputs
  }

  function handleClearCompleted() {
    const newTodos = todos.filter(todo => ! todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
    
  )
}

export default App;
