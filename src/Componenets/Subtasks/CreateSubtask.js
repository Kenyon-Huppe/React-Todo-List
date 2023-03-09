import React from 'react'

// creates given subtask
const CreateSubtask = ({ subtaskChangeHandler, value }) => {
    return (
        <div>
            <input type="text" autoFocus onChange={subtaskChangeHandler} value={value} />
        </div>
    )
}

export default CreateSubtask