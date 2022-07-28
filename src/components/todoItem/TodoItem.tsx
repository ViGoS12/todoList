import styles from './TodoItem.module.scss'
import DeleteBtn from '../../assets/svg/delete.svg'
import { useState } from 'react'

interface ITodoItemProps {
  todo: Todo
  deleteTodo: (id: Todo['id']) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, deleteTodo }) => {
  const [checked, setCheck] = useState(false)

  const setCheckbox = () => {
    setCheck(!checked)
  }
  console.log(checked)
  return (
    <div className={styles.todoItem}>
      <input
        type='checkbox'
        onClick={setCheckbox}
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
