import React, { useEffect, useState } from 'react';
import { TodoDetailsModal } from '../TodoDetails/TodoDetails';

function TodoList({ taskLists }) {
  return (
    <>
      {taskLists.map(task => (
        <TodoDetailsModal title={task.title} note={task.notes} />
      ))}
    </>
  )
}

export default TodoList