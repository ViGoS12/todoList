import React from 'react'

export interface ITodoContextProps {
  todos: Todo[]

  addTodo: ({ task }: Omit<Todo, 'id'>) => void

  deleteCompleteTodos: () => void
  deleteTodo: (id: Todo['id']) => void
}

export const TodoContext = React.createContext<ITodoContextProps>({
  todos: [],
  addTodo: () => {},
  deleteCompleteTodos: () => {},
  deleteTodo: () => {},
})
