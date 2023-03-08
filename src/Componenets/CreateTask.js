import React from 'react'

// allows for the creation of new tasks
const CreateTask = ({ changeHandler, addTask, value }) => {
    return (
        <div>
            <input type="text" onChange={changeHandler} value={value} />
            <button onClick={addTask}>Create Task</button>
        </div>
    )
}

export default CreateTask