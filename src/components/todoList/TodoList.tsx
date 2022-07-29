import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'

interface ITodoListProps {
  todos: Todo[]
  deleteTodo: (id: Todo['id']) => void
}

const TodoList: React.FC<ITodoListProps> = ({ todos, deleteTodo }) => {
  console.log(todos)

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
