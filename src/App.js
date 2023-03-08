import './App.css';
import { useState } from 'react';
import CreateTask from './Componenets/CreateTask';
import TaskManager from './Componenets/TaskManager';


function App() {
  // holds all the tasks to be completed
  const [taskHolder, setTaskHolder] = useState([]);
  // holds the task that's to be added to task list
  const [currentTask, setCurrentTask] = useState("");

  const changeHandler = (event) => {
    setCurrentTask(event.target.value);
  }

  // creates task
  const addTask = () => {
    if (currentTask !== "") { // must be text to be added to list
      const tmpTask = {
        id: taskHolder.length === 0 ? 1 : taskHolder[taskHolder.length - 1].id + 1,
        data: currentTask
      };

      setTaskHolder([...taskHolder, tmpTask]);
      setCurrentTask("");
    }
  }

  const updateTask = (id, data) => {
    // !const tmpTask = taskHolder.filter((task) => task.id === id);

    const tmpTask = {
      id: id,
      data: data
    };
    console.log('app');
    console.log(taskHolder[id - 1]);
    setTaskHolder(taskHolder.map((task) => task.id === id ? task = tmpTask : task = task));
  };


  // deletes task
  const deleteTask = (id) => {
    setTaskHolder(taskHolder.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <CreateTask changeHandler={changeHandler} addTask={addTask} value={currentTask}></CreateTask>
      <TaskManager taskData={taskHolder} updateTask={updateTask} deleteTask={deleteTask}></TaskManager>
    </div >
  );
}

/**
 * Pages that require work
 * todo Task
 */

export default App;
