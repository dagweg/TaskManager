import React, { useState } from "react";
import '../css/taskmanager.css'
import Footer from "./footer";
import TaskPane from "./taskpane";
import MessageBox from "./messagebox";
import SSIDGenerator from "../util/SSIDGenerator";

export default function TaskManager() {

  const [taskPane, setTaskPane] = useState([])
  const [message, setMessage] = useState(false)
  const [isMsgOpen, setIsMsgOpen] = useState(false)


  function onClose(paneKey) {
    // setTaskPane(taskPane.filter((task, i) => task.paneKey !== paneKey))
    const newTaskPanes = taskPane.map(tp => {
      if (tp.paneKey === paneKey) {
        return {
          ...tp,
          isOpen: false
        };
      }
      return tp;
    })
    setTaskPane(newTaskPanes);
  }

  const addNewTask = () => {
    const newTaskPane = {
      isOpen: true,
      paneKey: SSIDGenerator.generateSSID()
    }
    setTaskPane((prevTaskPanes) => [...prevTaskPanes, newTaskPane])
  }

  const cleanTasks = () => {
    const hasOpenTasks = taskPane.some(tp => tp.isOpen);

    if (hasOpenTasks) {
      setTaskPane([]);
      setMessage("All open task panes have been cleaned");
    } else {
      setMessage("No open task panes");
    }

    setIsMsgOpen(true);
  };


  return (
    <>
      <div className="parent">
        <div>
          <div className="title-panel">
            <h1>TMCA <span style={{ fontSize: 16 }}>Community Edition</span></h1>
            {isMsgOpen && <MessageBox message={message} isMsgOpen={isMsgOpen} setIsMsgOpen={setIsMsgOpen} />}
          </div>
          <div className="main-panel">
            <div className="menu-panel">
              <button id="new-task" onClick={addNewTask}>Add new task
                <i></i>
              </button>
              <button id="clean" className="fa-solid fa-trash" onClick={cleanTasks}></button>
            </div>
            <div className="task-panes">
              {taskPane.map((tp) => {
                if (tp.isOpen) {
                  return <TaskPane paneKey={tp.paneKey} onClose={onClose} />
                }
                return null
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
