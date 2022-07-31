import styles from './TodoPanel.module.scss'
import { KeyboardEvent, memo, useState } from 'react'

import Arrow from '../../assets/svg/arrowDown.svg'

const DEFAULT_TODO = {
  task: '',
  completed: false,
}

interface ITodoPanelmProps {
  onKeyDown: (task: string) => void
}

const TodoPanel: React.FC<ITodoPanelmProps> = ({ onKeyDown }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO)

  const keyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      todo.task.length === 0 ? alert('Empty Todo') : onKeyDown(todo.task)
      setTodo(DEFAULT_TODO)
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  return (
    <div className={styles.todoPanel}>
      <img className={styles.todoPanel__arrow} src={Arrow} alt="" />
      <input
        placeholder="What needs to do?"
        className={styles.todoPanel__task}
        type="text"
        value={todo.task}
        id="name"
        name="task"
        onChange={onChange}
        onKeyDown={keyDown}
      />
    </div>
  )
}

export default memo(TodoPanel)
