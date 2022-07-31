import styles from './TodoItem.module.scss'
import DeleteBtn from '../../assets/svg/delete.svg'
import { memo } from 'react'

interface ITodoItemProps {
  todo: Todo
  checkTodo: (id: Todo['id']) => void
  deleteTodo: (id: Todo['id']) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
}) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
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
        }}
      >
        {todo.task}
        <img
          onClick={(e) => {
            e.stopPropagation()
            deleteTodo(todo.id)
          }}
          className={styles.todoItem__deleteBtn}
          src={DeleteBtn}
          alt=""
        />
      </div>
    </div>
  )
}

export default memo(
  TodoItem,
  (prev, next) => prev.todo.completed === next.todo.completed
)
