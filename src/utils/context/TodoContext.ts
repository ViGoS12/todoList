import { createContext } from 'react'

export interface ITodoContextProps {
  todos: Todo[]
  activeButton: number

  addTodo: ({ task }: Omit<Todo, 'id'>) => void
  checkTodo: (id: Todo['id']) => void
  deleteCompleteTodos: () => void
  deleteTodo: (id: Todo['id']) => void
  showAll: () => void
  showActiveTask: () => void
  showCompletedTask: () => void
}

export const TodoContext = createContext<ITodoContextProps>({
  todos: [],
  activeButton: 0,
  checkTodo: () => {},
  addTodo: () => {},
  deleteCompleteTodos: () => {},
  deleteTodo: () => {},
  showAll: () => {},
  showActiveTask: () => {},
  showCompletedTask: () => {},
})
