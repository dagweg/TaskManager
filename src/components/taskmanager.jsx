import React, { useState } from "react";
import '../css/taskmanager.css'
import Footer from "./footer";
import TaskPane from "./taskpane";
import MessageBox from "./messagebox";
import SSIDGenerator from "../util/SSIDGenerator";



export default function TaskManager() {

  const themeMods = {
    sun: 'fa-regular fa-sun',
    moon: 'fa-solid fa-moon'
  }

  const [taskPane, setTaskPane] = useState([])
  const [message, setMessage] = useState(false)
  const [isMsgOpen, setIsMsgOpen] = useState(false)
  const [themeMode, setThemeMode] = useState(themeMods.moon)


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


  const changeThemeMode = () => {
    if (themeMode === themeMods.moon) {
      setThemeMode(themeMods.sun)
    } else {
      setThemeMode(themeMods.moon)
    }
  }

  return (
    <>
      <div className="parent">
        <div className={`absolute left-0 top-0 m-2 text-3xl hover:bg-gray-200 active:bg-transparent w-10 h-10 text-center rounded-xl ease-in-out duration-150 cursor-pointer ${themeMode}`} onClick={changeThemeMode}></div>
        <div>
          <div className="title-panel">
            <h1 className="text-5xl font-black font-sans tracking-wide">TaskIt<span style={{ fontSize: 16 }} className="font-black absolute top-6">PRO</span></h1>
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
      </div >
    </>
  );
}
