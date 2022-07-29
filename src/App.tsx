import './scss/App.scss'

import Footer from './components/footer'
import TodoPanel from './components/todoPanel'
import TodoList from './components/todoList/'
import TodoProvider from './utils/context/TodoProvider'

function App() {
  return (
    <TodoProvider>
      <div className='app'>
        <div className='app__container'>
          <div className='app__title'>todos</div>
          <TodoPanel />
          <TodoList />
          <Footer />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
