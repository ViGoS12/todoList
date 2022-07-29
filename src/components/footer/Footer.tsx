import styles from './Footer.module.scss'
import { useState } from 'react'
import classNames from 'classnames'

interface IHeaderProps {
  todos: Todo[]
  todoCount: number
  deleteCompleteTodos: () => void
}

const Footer: React.FC<IHeaderProps> = ({
  todos,
  todoCount,
  deleteCompleteTodos,
}) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__count}>
          <b>{todoCount}</b> items left
        </div>
        <div className={styles.footer__buttons}>
          <button
            onClick={() => setSelected(0)}
            className={classNames(
              styles.footer__btn,
              selected === 0 ? styles.footer__select_btn : ''
            )}>
            All
          </button>
          <button
            onClick={() => setSelected(1)}
            className={classNames(
              styles.footer__btn,
              selected === 1 ? styles.footer__select_btn : ''
            )}>
            Active
          </button>
          <button
            onClick={() => setSelected(2)}
            className={classNames(
              styles.footer__btn,
              selected === 2 ? styles.footer__select_btn : ''
            )}>
            Completed
          </button>
        </div>
        <button
          className={styles.footer__btn}
          onClick={() => deleteCompleteTodos()}>
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default Footer
