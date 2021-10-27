
import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import Layout from './Layout';
// import ListItem from './ListItem';
import Lists from './Lists';
// import { useEffect } from 'react';

const App = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 5) {
      setError('At least 5 word required!')
      return false
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos])

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    if (window.confirm('Are you sure')) {
      const updatedTodos = todos.filter((item) => item.id !== todoId)

      setTodos(updatedTodos)
    }
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(newTodo)
  }

  return (
    <Layout>
      <Header />
      <Form
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className='border-primary' />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  )
}

export default App