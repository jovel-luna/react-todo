import React, { useContext } from 'react';
import './TodoDetails.css'
import { TaskListContext } from '../../../context/TaskListContext';

export const TodoDetailsModal = ({ taskId, title, schedule, note }) => {

    const { removeTask } = useContext(TaskListContext);

    const handleDeleteClick = () => {
        removeTask(taskId);
    }

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
                    <button onClick={ handleDeleteClick }>Delete Task</button>
                </div>
            </div>
        </>
    )
}