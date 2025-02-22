import React from 'react';
import './EditTodo.css'

export const EditTodoModal = ({ title, note }) => {

    return (
        <>
            <div className='edit-todo-modal'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Edit Task</h1>
                    <h4>Modify the task details below.</h4>
                </div>
                
                <div className='todo-form flex column gap-10'>
                    <input type="text" value={title} placeholder='Task Title...' />
                    <textarea placeholder='Additional notes (optional)'>{note}</textarea>
                    <div className='flex flex-row gap-10'>
                        <button className='bg-blue-500'>Save Changes</button>
                        <button>Cancel</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}