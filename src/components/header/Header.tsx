import styles from './Header.module.scss'

interface IHeaderProps {
  todoCount: number
}

const Header: React.FC<IHeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        Todo list <b>{todoCount}</b> tasks
      </div>
    </div>
  )
}

export default Header
