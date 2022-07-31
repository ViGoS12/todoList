import { createContext, Dispatch } from 'react'
import { State } from './reducer'
import { Action } from './types'

export interface ITodoContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const TodoContext = createContext<ITodoContextProps>(
  {} as ITodoContextProps
)
