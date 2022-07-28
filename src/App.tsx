import './scss/App.scss'
import { useState } from 'react'

import Footer from './components/footer'
import TodoPanel from './components/todoPanel'
import TodoList from './components/todoList/'

const DEFAULT_LIST = [
  { id: 1, task: 'task 1' },
  { id: 2, task: 'task 2' },
  { id: 3, task: 'task 3' },
]

function App() {
  const [todos, setTodos] = useState(DEFAULT_LIST)

  const addTodo = ({ task }: Omit<Todo, 'id'>) => {
    todos.length > 0
      ? setTodos([...todos, { id: todos[todos.length - 1].id + 1, task }])
      : setTodos([{ id: 0, task }])
  }

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__title'>todos</div>

        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <Footer todoCount={todos.length} />
      </div>
    </div>
  )
}

export default App
