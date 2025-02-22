import React, { useEffect, useContext, useState } from 'react';
import { TodoDetailsModal } from '../TodoDetails/TodoDetails';
import { TaskListContext } from '../../../context/TaskListContext';

function TodoList({ indicatedSchedule }) {

  const {taskLists} = useContext(TaskListContext);

  return (
    <>
      {taskLists.map(task => {
        if (indicatedSchedule === task.schedule) {
          return <TodoDetailsModal key={task.id} title={task.title} schedule={task.schedule} note={task.notes} />;
        }
        return null; 
      })}
    </>
  )
}

export default TodoList