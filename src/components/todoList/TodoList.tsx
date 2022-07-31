import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'
import useTodo from './../../utils/context/useTodo'
import { addTodo, checkTodo, deleteTodo } from '../../utils/context/reducer'

import useFilters from './../../hooks/useFilters'
import { useCallback } from 'react'

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodo()
  const { filter, todos } = state

  const filtered = useFilters(todos, filter)

  const handleCheckTodo = useCallback(
    (id: Todo['id']) => dispatch(checkTodo(id)),
    []
  )
  const handleDeleteTodo = useCallback(
    (id: Todo['id']) => dispatch(deleteTodo(id)),
    []
  )

  console.log(state)
  return (
    <div className={styles.todoList}>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={handleCheckTodo}
          deleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
