import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskManager from './TaskManager/taskmanager';

function Index(){
  return(
    <>
      <TaskManager/>
    </>
  )
}


ReactDOM.render(<Index/>, document.getElementById('root'))