import React from "react";
import './taskmanager.css'
import Footer from "./footer";
import TaskPane from "./taskpane";

export default function TaskManager() {
  return (
    <>
      <div className="parent">
        <div className="title-panel">
          <h1>TaskManager WebApp</h1>
        </div>
        <div className="main-panel">
          <button id="new-task">Add new task</button>
          <TaskPane />
        </div>
      </div>
      <Footer />
    </>
  );
}
