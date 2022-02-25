
import React, {useState, useRef } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef ()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    } )
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos}  />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add ToDo</button>
    <button>Clear List</button>
    </>
  )
}
export default App;
// Besides using uuid you can also add a second parameter in map like map((todo, index) =>{}) and use index as a key. key={i}. This way you don't have to worry about the key been the same.