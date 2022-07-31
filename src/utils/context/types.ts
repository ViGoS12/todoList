export enum ActionTypes {
  ADD = 'ADD',
  DEL = 'DEL',
  DEL_COML = 'DEL_COML',
  CHECK = 'CHECK',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

type addAction = {
  type: ActionTypes.ADD
  payload: string
}

type deleteAction = {
  type: ActionTypes.DEL
  payload: Todo['id']
}

type deleteCoplitedAction = {
  type: ActionTypes.DEL_COML
}

type checkAction = {
  type: ActionTypes.CHECK
  payload: Todo['id']
}

type changeFilterAction = {
  type: ActionTypes.CHANGE_FILTER
  payload: 0 | 1 | 2
}

export type Action =
  | addAction
  | deleteAction
  | deleteCoplitedAction
  | checkAction
  | changeFilterAction
