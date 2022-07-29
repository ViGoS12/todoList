import styles from './TodoItem.module.scss'
import DeleteBtn from '../../assets/svg/delete.svg'
import { useState } from 'react'
import useTodo from '../../utils/context/useTodo'

interface ITodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const [checked, setCheck] = useState(false)

  const { deleteTodo } = useTodo()

  const setCheckbox = () => {
    setCheck(!checked)
    todo.completed = !todo.completed
  }

  return (
    <div className={styles.todoItem}>
      <input
        type='checkbox'
        checked={checked}
        onChange={setCheckbox}
        className={styles.todoItem__checkbox}
      />

      <div
        className={styles.todoItem__task}
        onClick={() => setCheck(!checked)}
        style={{
          opacity: checked ? 0.5 : 1,
          textDecoration: checked ? 'line-through' : 'none',
        }}>
        {todo.task}
        <img
          onClick={() => deleteTodo(todo.id)}
          className={styles.todoItem__deleteBtn}
          src={DeleteBtn}
          alt=''
        />
      </div>
    </div>
  )
}

export default TodoItem
