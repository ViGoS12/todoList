import { ActionTypes, Action } from './types'

export type State = {
  filter: 0 | 1 | 2
  todos: Array<Todo>
}

export const DEFAULT_STATE: State = {
  filter: 0,
  todos: [
    { id: 1, task: 'task 1', completed: false },
    { id: 2, task: 'task 2', completed: false },
    { id: 3, task: 'task 3', completed: false },
  ],
}

export default function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.ADD:
      return state.todos.length > 0
        ? {
            ...state,
            todos: [
              ...state.todos,
              {
                id: state.todos[state.todos.length - 1].id + 1,
                task: action.payload,
                completed: false,
              },
            ],
          }
        : {
            ...state,
            todos: [{ id: 1, task: action.payload, completed: false }],
          }
    case ActionTypes.DEL:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case ActionTypes.DEL_COML:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      }
    case ActionTypes.CHECK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        }),
      }
    case ActionTypes.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export const addTodo = (task: string): Action => ({
  type: ActionTypes.ADD,
  payload: task,
})

export const deleteTodo = (id: Todo['id']): Action => ({
  type: ActionTypes.DEL,
  payload: id,
})

export const deleteCompleteTodos = (): Action => ({
  type: ActionTypes.DEL_COML,
})

export const checkTodo = (id: Todo['id']): Action => ({
  type: ActionTypes.CHECK,
  payload: id,
})

export const changeFilter = (filter: 0 | 1 | 2): Action => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: filter,
})

export type AppReducer = (state: State, action: Action) => State
