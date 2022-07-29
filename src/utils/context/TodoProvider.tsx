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

  const value = useMemo(
    () => ({
      todos,
      addTodo,
      deleteCompleteTodos,
      deleteTodo,
    }),
    [todos, addTodo, deleteCompleteTodos, deleteTodo]
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoProvider
