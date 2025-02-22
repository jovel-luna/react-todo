import React, { useEffect, useState } from 'react';
import './EditTodo.css'

export const EditTodoModal = ({ title, note }) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskNotes, setTaskNotes] = useState("");

    const handleSubmit = () => {

        if (taskTitle && taskNotes) {
            console.log(taskTitle)
            console.log(taskNotes)
            
        }
        else {
            alert("Please fill in all fields");
        }

    }

    return (
        <>
            <div className='edit-todo-modal'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Edit Task</h1>
                    <h4>Modify the task details below.</h4>
                </div>
                
                <div className='todo-form flex column gap-10'>
                    <input type="text" value={taskTitle} placeholder='Task Title...' onChange={(e) => setTaskTitle(e.target.value)} />
                    <textarea value={taskNotes} placeholder='Additional notes (optional)' onChange={(e) => setTaskNotes(e.target.value)}></textarea>
                    <div className='flex flex-row gap-10'>
                        <button className='bg-blue-500' onClick={ handleSubmit }>Save Changes</button>
                        <button>Cancel</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}