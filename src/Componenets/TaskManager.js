import React from 'react';
import Task from './Task';

// holds tasks that have been created
const TaskManager = ({ taskData, updateTask, deleteTask }) => {
    console.log('tm');
    console.log(taskData);
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