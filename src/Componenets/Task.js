import React from 'react'
import { useState } from 'react'

const Task = ({ data, id, updateTask, deleteTask }) => {

    // configures whether update btn has been clicked
    const [currentEdit, setCurrentEdit] = useState(-1);
    // stores the current value of the data for modification & display
    const [currentValue, setCurrentValue] = useState(data);
    console.log('task');
    console.log(currentValue);
    console.log('task here');
    // const updateTask = () => {

    //     setCurrentEdit(-1); // set the current edit back to default (not editing)

    // }
    console.log('data');
    console.log(data);
    console.log('data here');
    const changeHandler = (event) => {
        setCurrentValue(event.target.value);
    }

    const updateCaller = () => {
        setCurrentEdit(-1);
        updateTask(id, currentValue);
    }
    return (
        <div>
            {currentEdit === -1 ? (
                <h3>{data}</h3>
            ) : (
                <input type="text" autoFocus defaultValue={data} onChange={changeHandler} />
            )

            }

            {/* <h3>{data}</h3> */}


            {/* (() => setCurrentEdit(-1), () => updateTask(id, currentValue)) */}
            <button onClick={currentEdit === -1 ? () => setCurrentEdit(1) : updateCaller}>Update</button>
            {/* <button onClick={() => updateTask}>Update</button> */}
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button>Add Subtask</button>
        </div >
    )
}


/**
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