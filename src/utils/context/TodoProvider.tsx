import { useReducer } from 'react'
import todoReducer, { DEFAULT_STATE } from './reducer'
import { TodoContext } from './TodoContext'

interface ITodoProviderProps {
  children: React.ReactNode
}

const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, DEFAULT_STATE)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
