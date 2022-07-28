import styles from './Footer.module.scss'

interface IHeaderProps {
  todoCount: number
}

const Footer: React.FC<IHeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__title}>
        Todo list <b>{todoCount}</b> tasks
      </div>
    </div>
  )
}

export default Footer
