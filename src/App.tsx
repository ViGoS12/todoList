import './scss/App.scss'

import Footer from './components/footer'
import TodoPanel from './components/todoPanel'
import TodoList from './components/todoList/'
import useTodo from './utils/context/useTodo'
import { addTodo } from './utils/context/reducer'
import { useCallback } from 'react'

function App() {
  const { state, dispatch } = useTodo()

  const handelAddTodo = useCallback(
    (task: string) => {
      dispatch(addTodo(task))
    },
    [dispatch]
  )

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__title">todos</div>
        <TodoPanel onKeyDown={handelAddTodo} />
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}

export default App
