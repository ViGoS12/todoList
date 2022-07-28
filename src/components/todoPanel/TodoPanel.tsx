import styles from './TodoPanel.module.scss'
import { KeyboardEvent, useState } from 'react'

import Arrow from '../../assets/svg/arrowDown.svg'

const DEFAULT_TODO = {
  task: '',
}

interface ITodoPanelProps {
  addTodo: ({ task }: Omit<Todo, 'checked' | 'id'>) => void
}

const TodoPanel: React.FC<ITodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO)
  console.log(todo)

  const keyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      addTodo({ task: todo.task })
      setTodo(DEFAULT_TODO)
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  return (
    <div className={styles.todoPanel}>
      <img className={styles.todoPanel__arrow} src={Arrow} alt='' />
      <input
        placeholder='What needs to do?'
        className={styles.todoPanel__task}
        type='text'
        value={todo.task}
        id='name'
        name='task'
        onChange={onChange}
        onKeyDown={(event) => keyDown(event)}
      />
    </div>
  )
}

export default TodoPanel
