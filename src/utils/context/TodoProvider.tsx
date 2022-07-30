import { useMemo, useState } from 'react'
import { TodoContext } from './TodoContext'

interface ITodoProviderProps {
  children: React.ReactNode
}

const DEFAULT_LIST = [
  { id: 1, task: 'task 1', completed: false },
  { id: 2, task: 'task 2', completed: false },
  { id: 3, task: 'task 3', completed: false },
]

const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_LIST)
  const [activeButton, setActiveButton] = useState(0)

  const addTodo = ({ task }: Omit<Todo, 'id'>) => {
    todos.length > 0
      ? setTodos([
          ...todos,
          { id: todos[todos.length - 1].id + 1, task, completed: false },
        ])
      : setTodos([{ id: 1, task, completed: false }])
  }

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteCompleteTodos = () => {
    setTodos(todos.filter((todo) => todo.completed === false))
  }

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  const showAll = () => {
    setActiveButton(0)
  }

  const showActiveTask = () => {
    setActiveButton(1)
  }

  const showCompletedTask = () => {
    setActiveButton(2)
  }

  const value = {
    todos,
    activeButton,
    addTodo,
    checkTodo,
    deleteCompleteTodos,
    deleteTodo,
    showCompletedTask,
    showAll,
    showActiveTask,
  }
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoProvider
