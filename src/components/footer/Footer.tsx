import styles from './Footer.module.scss'
import { useState } from 'react'
import classNames from 'classnames'
import useTodo from './../../utils/context/useTodo'

const Footer: React.FC = () => {
  const [selected, setSelected] = useState(0)
  const {
    todos,
    deleteCompleteTodos,
    showCompletedTask,
    showAll,
    showActiveTask,
  } = useTodo()

  const countActiveTask = todos.filter(
    (todo) => todo.completed === false
  ).length

  const countCompletedTask = todos.filter(
    (todo) => todo.completed === true
  ).length

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__count}>
          <b>{countActiveTask}</b> items left
        </div>
        <div className={styles.footer__buttons}>
          <button
            onClick={() => {
              setSelected(0)
              showAll()
            }}
            className={classNames(
              styles.footer__btn,
              selected === 0 ? styles.footer__select_btn : ''
            )}>
            All
          </button>
          <button
            onClick={() => {
              setSelected(1)
              showActiveTask()
            }}
            className={classNames(
              styles.footer__btn,
              selected === 1 ? styles.footer__select_btn : ''
            )}>
            Active
          </button>
          <button
            onClick={() => {
              setSelected(2)
              showCompletedTask()
            }}
            className={classNames(
              styles.footer__btn,
              selected === 2 ? styles.footer__select_btn : ''
            )}>
            Completed
          </button>
        </div>
        <div className={styles.footer__last_btn}>
          {countCompletedTask > 0 && (
            <button
              className={styles.footer__btn}
              onClick={() => deleteCompleteTodos()}>
              Clear completed
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
