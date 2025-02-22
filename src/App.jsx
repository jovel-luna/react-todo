import { useState} from 'react'
import './App.css'
import { CreateTodoModal } from './components/Todo/CreateTodo/CreateTodo.jsx'
import { TaskListProvider } from './context/TaskListContext.jsx'
import TodoList from './components/Todo/TodoList/TodoList.jsx'

function App() {

  const [showCreateModal, setCreateModalShow] = useState(false);

  return (
    <>
      <TaskListProvider>
        <div className="flex flex-row justify-between mb-[37px]">
          <div>
            <h2 className="text-[32px] font-[700]">Daily Tasks</h2>
          </div>
          <div>
            <button onClick={(e) => setCreateModalShow(!showCreateModal) }>Add new Task</button>
          </div>
        </div>

        <div className='task-lists-column flex flex-row justify-between mb-[37px]'>
          <div>
            <h3 className="text-[24px] font-[700] text-left">Morning</h3>
            <TodoList indicatedSchedule="Morning"/>
          </div>
          <div>
            <h3 className="text-[24px] font-[700] text-left">Afternoon</h3>
            <TodoList indicatedSchedule="Afternoon"/>
          </div>
          <div>
            <h3 className="text-[24px] font-[700] text-left">Evening</h3>
            <TodoList indicatedSchedule="Evening"/>
          </div>
        </div>
        { showCreateModal && <CreateTodoModal /> }
      </TaskListProvider>

    </>
  )
}

export default App
