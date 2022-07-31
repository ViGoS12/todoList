import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import App from './App'
import TodoProvider from './utils/context/TodoProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
