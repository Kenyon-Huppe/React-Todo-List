import React from 'react';
import Task from './Task';

// holds tasks that have been created
const TaskManager = ({ taskData, setTaskData }) => {

    // updates task
    const updateTask = (id, data) => {
        const tmpTask = {
            id: id,
            data: data
        };

        setTaskData(taskData.map((task) => task.id === id ? task = tmpTask : task = task));
    };

    // deletes task
    const deleteTask = (id) => {
        setTaskData(taskData.filter((task) => task.id !== id));
    }

    return (
        <div>
            {taskData.map((taskElement) => {
                return (
                    <div>
                        <Task data={taskElement.data} id={taskElement.id} updateTask={updateTask} deleteTask={deleteTask}></Task>
                    </div>
                );
            })}
        </div>
    )
}

export default TaskManager