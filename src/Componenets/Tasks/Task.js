import React from 'react'
import { useState } from 'react'
import SubtaskManager from '../Subtasks/SubtaskManager';
import CreateSubtask from '../Subtasks/CreateSubtask';

const Task = ({ data, id, updateTask, deleteTask }) => {

    // configures whether update btn has been clicked
    const [currentEdit, setCurrentEdit] = useState(false);
    // stores the current value of the data for modification & display
    const [currentValue, setCurrentValue] = useState(data);
    // determines whether adding subtask or not
    const [subtaskEdit, setSubtaskEdit] = useState(false);
    // holds current value being edited before adding
    const [currentSubtask, setCurrentSubtask] = useState('');
    // holds the data for the subtasks
    const [subtaskHolder, setSubtaskHolder] = useState([]);

    // sets value for currentValue state as text changes
    const changeHandler = (e) => {
        setCurrentValue(e.target.value);
    }

    // deals with updating task data
    const updateCaller = () => {
        setCurrentEdit(false);
        // must have a value or else reverts
        if (currentValue !== '') {
            updateTask(id, currentValue)
        }
    }

    // sets value for currentSubtask as text changes
    const subtaskChangeHandler = (e) => {
        setCurrentSubtask(e.target.value);
    }

    // adds subtask to list
    const addSubtask = () => {
        // same idea as adding for task in App.js
        if (currentSubtask !== '') { // must be text to be added to list
            const tmpSubtask = {
                id: subtaskHolder.length === 0 ? 1 : subtaskHolder[subtaskHolder.length - 1].id + 1,
                data: currentSubtask
            };

            setSubtaskHolder([...subtaskHolder, tmpSubtask]);
            setCurrentSubtask('');
        }

        // sets back to default state
        setSubtaskEdit(false);
        console.log(subtaskHolder);
    }

    return (
        <div>
            {currentEdit === false ? (
                <h3>{data}</h3>
            ) : (
                <input type="text" autoFocus defaultValue={data} onChange={changeHandler} />
            )}

            <button onClick={currentEdit === false ? () => setCurrentEdit(true) : updateCaller}>Update</button>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={subtaskEdit === true ? addSubtask : () => setSubtaskEdit(true)}>Add Subtask</button>

            {subtaskEdit === true && (
                <CreateSubtask subtaskChangeHandler={subtaskChangeHandler} value={currentSubtask}></CreateSubtask>
            )}

            <SubtaskManager subtaskData={subtaskHolder} setSubtaskData={setSubtaskHolder}></SubtaskManager>
        </div >
    )
}


/**
 * todo look into blank text being added
 * 
 * todo
 * have a btn on each task that, when clicked, displays a text box (have flag that toggles display)
 * After entering in text & clicking "Create Sub-Task" btn, task is added below current task & indented
 * Just use the same method used for adding base tasks to the todo list to these tasks (create component
 *      "SubTaskManager")
 * 
 * todo 
 * Implement option to collapse subtasks
 */


export default Task