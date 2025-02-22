import React, { useContext, useState } from 'react';
import { TaskListContext } from '../../../context/TaskListContext';
import './CreateTodo.css'

export const CreateTodoModal = () => {
    
    const [taskTitle, setTaskTitle] = useState("");
    const [taskSchedule, setTaskSchedule] = useState("");
    const [taskNotes, setTaskNotes] = useState("");
    const { taskLists, addTasks } = useContext(TaskListContext);

    const handleSubmit = () => {

        if (taskTitle && taskSchedule && taskNotes) {

            addTasks(taskTitle, taskSchedule, taskNotes)
            // reset input fields after submitting
            setTaskTitle(""); 
            setTaskSchedule("");
            setTaskNotes("");
        }
        else {
            alert("Please fill in all fields");
        }

    }

    return (
        <>
            <div className='create-todo-modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col items-start mb-8'>
                    <h1>Add New Task</h1>
                    <h4>Create a new task with title, priority, and optional notes.</h4>
                </div>
                <div className='todo-form flex column gap-10'>
                    <input value={taskTitle} type="text" placeholder='Task Title...' onChange={(e) => setTaskTitle(e.target.value)} />
                    <select onChange={(e) => setTaskSchedule(e.target.value)}>
                        <option value="">Select Schedule</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                    <textarea value={taskNotes} placeholder='Additional notes (optional)' onChange={(e) => setTaskNotes(e.target.value)}></textarea>
                    <div className='flex'>
                        <button onClick={handleSubmit}>Add Task</button>
                    </div>

                </div>
            </div>

        </>
    )
}