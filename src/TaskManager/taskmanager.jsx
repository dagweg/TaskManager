import React, { useState } from "react";
import './taskmanager.css'
import Footer from "./footer";
import TaskPane from "./taskpane";
import MessageBox from "./messagebox";

export default function TaskManager() {

  const [taskPane, setTaskPane] = useState([])
  const [scale, setScale] = useState(1)
  const [message, setMessage] = useState('')

  const addNewTask = () => {
    const newTaskPane = <TaskPane scale={1} />
    setTaskPane((prevTaskPanes) => [...prevTaskPanes, newTaskPane])
  }

  const cleanTasks = () => {
    if (taskPane.length === 0) {
      setMessage('Its already empty')

    }
    setTaskPane([])
  }

  return (
    <>
      <div className="parent">
        <div>
          <div className="title-panel">
            <h1>TaskManager WebApp {taskPane.length}</h1>
            {message && <MessageBox message={message} />}
          </div>
          <div className="main-panel">
            <div className="menu-panel">
              <button id="new-task" onClick={addNewTask}>Add new task
                <i></i>
              </button>
              <button id="clean" onClick={cleanTasks}></button>
            </div>
            <div className="task-panes">
              {taskPane}
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}
