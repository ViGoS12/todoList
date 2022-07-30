import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'
import useTodo from './../../utils/context/useTodo'
import useFilters from './../../hooks/useFilters'

const TodoList: React.FC = () => {
  const { todos, activeButton, checkTodo, deleteTodo } = useTodo()

  const filtered = useFilters(todos, activeButton)
  console.log(todos)
  return (
    <div className={styles.todoList}>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
