import React from "react";
import './taskmanager.css'

export default function TaskManager() {
  return (
    <>
      <div className="parent">
        <div className="title-panel">
          <h1>TaskManager WebApp</h1>
        </div>
        <div className="main-panel">
          <button id="new-task">Add new task</button>
        </div>
      </div>
      <div className="foot-panel">
        <div className="contact">
          <a href="https://www.linkedin.com/in/dagmawi-wegayehu-6a2057216/" id="in-contact" target="_blank"></a>
          <a href="https://github.com/dagweg" id="git-contact" target="_blank"></a>
          <a href="https://www.instagram.com/dagweg7/" id="insta-contact" target="_blank"></a>
        </div>
        <h4>All rights reserved 2023©</h4>
      </div>
    </>
  );
}
