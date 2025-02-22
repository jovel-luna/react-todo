import React from 'react';
import './TodoDetails.css'

export const TodoDetailsModal = ({ title, schedule, note }) => {

    return (
        <>
            <div className='edit-todo-modal'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Task Details</h1>
                </div>
    
                <div className='todo-form flex column gap-10'>
                    <input readOnly type="text" value={title} />
                    <input readOnly type="text" value={schedule} />
                    <textarea readOnly value={note}></textarea>
                </div>
            </div>
        </>
    )
}