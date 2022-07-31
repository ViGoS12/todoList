import styles from './Footer.module.scss'
import { useState } from 'react'
import classNames from 'classnames'
import useTodo from './../../utils/context/useTodo'
import {
  changeFilter,
  deleteCompleteTodos,
  State,
} from '../../utils/context/reducer'

const Footer: React.FC = () => {
  const [selected, setSelected] = useState(0)
  const { state, dispatch } = useTodo()
  const { filter, todos } = state

  const countActiveTask = todos.filter(
    (todo) => todo.completed === false
  ).length

  const countCompletedTask = todos.filter(
    (todo) => todo.completed === true
  ).length

  const setFilter = (filter: State['filter']) => {
    dispatch(changeFilter(filter))
  }

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__count}>
          <b>{countActiveTask}</b> items left
        </div>
        <div className={styles.footer__buttons}>
          <button
            onClick={() => {
              setFilter(0)
            }}
            className={classNames(
              styles.footer__btn,
              filter === 0 ? styles.footer__select_btn : ''
            )}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilter(1)
            }}
            className={classNames(
              styles.footer__btn,
              filter === 1 ? styles.footer__select_btn : ''
            )}
          >
            Active
          </button>
          <button
            onClick={() => {
              setFilter(2)
            }}
            className={classNames(
              styles.footer__btn,
              filter === 2 ? styles.footer__select_btn : ''
            )}
          >
            Completed
          </button>
        </div>
        <div className={styles.footer__last_btn}>
          {countCompletedTask > 0 && (
            <button
              className={styles.footer__btn}
              onClick={() => dispatch(deleteCompleteTodos())}
            >
              Clear completed
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
