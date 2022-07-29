import React from 'react'

export interface ITodoContextProps {
  todos: Todo[]
  activeTodos: Boolean
  completedTodos: Boolean
  addTodo: ({ task }: Omit<Todo, 'checked' | 'id'>) => void

  deleteCompleteTodos: () => void
  deleteTodo: (id: Todo['id']) => void
  showAll: () => void
  showActiveTask: () => void
  showCompletedTask: () => void
}

export const TodoContext = React.createContext<ITodoContextProps>({
  todos: [],
  activeTodos: false,
  completedTodos: false,
  addTodo: () => {},
  deleteCompleteTodos: () => {},
  deleteTodo: () => {},
  showAll: () => {},
  showActiveTask: () => {},
  showCompletedTask: () => {},
})
