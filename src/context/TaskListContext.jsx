import { createContext, useState } from "react";

export const TaskListContext = createContext();

export const TaskListProvider = ({children}) => {
    const [taskLists, setTasks] = useState([]);
    const [key, setKey] = useState(0);

    const addTasks = (title, schedule, notes) => {
        if (title && schedule && notes) {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: key, title, schedule, notes },
            ]);
            setKey(key + 1);
        }
    };

    return (
        <TaskListContext.Provider value={{ taskLists, addTasks }}>
            {children}
        </TaskListContext.Provider>
    );


};