import React, { useEffect, useState } from 'react';
import { TodoDetailsModal } from '../TodoDetails/TodoDetails';
import { EditTodoModal } from '../EditTodo/EditTodo';
import './CreateTodo.css'

export const CreateTodoModal = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskNotes, setTaskNotes] = useState("");
    const [taskLists, addTasks] = useState([]);

    const handleSubmit = () => {

        if (taskTitle && taskNotes ) {
            addTasks([...taskLists, { title: taskTitle, notes: taskNotes }]); 
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
                    <input type="text" placeholder='Task Title...' onChange={(e) => setTaskTitle(e.target.value)} />
                    <textarea placeholder='Additional notes (optional)' onChange={(e) => setTaskNotes(e.target.value)}></textarea>
                    <div className='flex'>
                        <button onClick={ handleSubmit }>Add Task</button>
                    </div>
                    
                </div>
            </div>
            
            {taskLists.map(task => (
                <TodoDetailsModal title={task.title} note={task.notes} />
            ))}
        </>
    )
}