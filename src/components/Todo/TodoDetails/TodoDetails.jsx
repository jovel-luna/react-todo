import React from 'react';
import './TodoDetails.css'

export const TodoDetailsModal = ({ title, note }) => {

    return (
        <>
            <div className='edit-todo-modal'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Task Details</h1>
                </div>
    
                <div className='todo-form flex column gap-10'>
                    <input type="text" value={title} placeholder='Task Title...' />
                    <textarea placeholder='Additional notes (optional)'>{note}</textarea>
                </div>
            </div>
        </>
    )
}