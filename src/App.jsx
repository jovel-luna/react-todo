import { useState } from 'react'
import './App.css'
import { ClickCounter } from './components/ClickCounter/ClickCounter.jsx'
import { CreateTodoModal } from './components/Todo/CreateTodo/CreateTodo.jsx'
import { EditTodoModal } from './components/Todo/EditTodo/EditTodo.jsx'
import { TodoDetailsModal } from './components/Todo/TodoDetails/TodoDetails.jsx'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import TodoList from './components/Todo/TodoList/TodoList.jsx'

function App() {

  return (
    <>
      {/* <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider> */}
      <CreateTodoModal />
      {/* <TodoDetailsModal /> */}
      {/* <EditTodoModal />
      <TodoDetailsModal /> */}
      {/* <ClickCounter/> */}

    </>
  )
}

export default App
