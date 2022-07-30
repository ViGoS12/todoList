import styles from './TodoItem.module.scss'
import DeleteBtn from '../../assets/svg/delete.svg'
import useTodo from '../../utils/context/useTodo'
import { memo } from 'react'
import useWhyDidYouUpdate from './../../hooks/useWhyDidYouUpdate'

interface ITodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const { checkTodo, deleteTodo } = useTodo()

  useWhyDidYouUpdate('update', todo)
  console.log('render')
  return (
    <div className={styles.todoItem}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => checkTodo(todo.id)}
        className={styles.todoItem__checkbox}
      />

      <div
        className={styles.todoItem__task}
        onClick={() => checkTodo(todo.id)}
        style={{
          opacity: todo.completed ? 0.5 : 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}>
        {todo.task}
        <img
          onClick={(e) => {
            e.stopPropagation()
            deleteTodo(todo.id)
          }}
          className={styles.todoItem__deleteBtn}
          src={DeleteBtn}
          alt=''
        />
      </div>
    </div>
  )
}

export default memo(TodoItem)
