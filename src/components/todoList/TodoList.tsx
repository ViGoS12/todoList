import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'
import useTodo from './../../utils/context/useTodo'

const TodoList: React.FC = () => {
  const { todos } = useTodo()

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
