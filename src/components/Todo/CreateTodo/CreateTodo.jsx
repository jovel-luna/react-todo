import React, { useEffect, useState } from 'react';
import { TodoDetailsModal } from '../TodoDetails/TodoDetails';
import { EditTodoModal } from '../EditTodo/EditTodo';
import './CreateTodo.css'

export const CreateTodoModal = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskNotes, setTaskNotes] = useState("");
    const [taskLists, addTasks] = useState([]);
    let [key, setKey] = useState(0);

    const handleSubmit = () => {

        if (taskTitle && taskNotes) {

            addTasks([...taskLists, { id: setKey(key++), title: taskTitle, notes: taskNotes }]);
            // reset input fields after submitting
            setTaskTitle(""); 
            setTaskNotes("");
        }
        else {
            alert("Please fill in all fields");
        }

    }

    return (
        <>
            <div className='create-todo-modal'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Add New Task</h1>
                    <h4>Create a new task with title, priority, and optional notes.</h4>
                </div>
                <div className='todo-form flex column gap-10'>
                    <input value={taskTitle} type="text" placeholder='Task Title...' onChange={(e) => setTaskTitle(e.target.value)} />
                    <textarea value={taskNotes} placeholder='Additional notes (optional)' onChange={(e) => setTaskNotes(e.target.value)}></textarea>
                    <div className='flex'>
                        <button onClick={handleSubmit}>Add Task</button>
                    </div>

                </div>
            </div>
            
            <div className='flex flex-col gap-30 mt-8'>
                <span className='text-left'><h1>Task Lists</h1></span>
                
                {taskLists.map(task => (
                    <TodoDetailsModal key={task.id} title={task.title} note={task.notes} />
                ))}

            </div>


        </>
    )
}