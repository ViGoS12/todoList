import styles from './TodoItem.module.scss'

interface ITodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div className={styles.todoItem}>
      {/* <div className={styles.todoItem__checkbox}>X</div> */}
      {todo.task}
    </div>
  )
}

export default TodoItem
