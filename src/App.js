import './App.css';
import { useState } from 'react';
import CreateTask from './Componenets/Tasks/CreateTask';
import TaskManager from './Componenets/Tasks/TaskManager';


function App() {
  // holds all the tasks to be completed
  const [taskHolder, setTaskHolder] = useState([]);
  // holds the task that's to be added to task list
  const [currentTask, setCurrentTask] = useState('');

  const changeHandler = (event) => {
    setCurrentTask(event.target.value);
  }

  // creates task
  const addTask = () => {
    if (currentTask !== '') { // must be text to be added to list
      const tmpTask = {
        id: taskHolder.length === 0 ? 1 : taskHolder[taskHolder.length - 1].id + 1,
        data: currentTask
      };

      setTaskHolder([...taskHolder, tmpTask]);
      setCurrentTask('');
    }
  }

  return (
    <div className="App">
      <CreateTask changeHandler={changeHandler} addTask={addTask} value={currentTask}></CreateTask>
      <TaskManager taskData={taskHolder} setTaskData={setTaskHolder}></TaskManager>
    </div >
  );
}

/**
 * Pages that require work
 * todo SubtaskManager
 * todo Subtask
 * todo Task
 */

export default App;
