import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'

interface ITodoListProps {
  todos: Todo[]
}

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
