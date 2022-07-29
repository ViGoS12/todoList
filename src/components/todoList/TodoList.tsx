import TodoItem from '../todoItem'
import styles from './TodoList.module.scss'
import useTodo from './../../utils/context/useTodo'

const TodoList: React.FC = () => {
  const { todos, activeTodos, completedTodos } = useTodo()

  return (
    <div className={styles.todoList}>
      {activeTodos
        ? todos
            .filter((e) => e.completed === false)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : completedTodos
        ? todos
            .filter((e) => e.completed === true)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList
