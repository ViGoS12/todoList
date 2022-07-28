import './scss/App.scss'
import { useState } from 'react'

import Header from './components/header'
import TodoPanel from './components/todoPanel'
import TodoList from './components/todoList/'

const DEFAULT_LIST = [
  { id: 1, task: 'task1', checked: false },
  { id: 2, task: 'task2', checked: false },
  { id: 3, task: 'task3', checked: false },
]

function App() {
  const [todos, setTodos] = useState(DEFAULT_LIST)
  const addTodo = ({ task }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, task, checked: false },
    ])
  }

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__title'>todos</div>

        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
