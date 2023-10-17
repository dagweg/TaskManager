import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ProductList from './FullstackReactBook/Component/ProductList';
import TaskManager from './components/taskmanager';

function Index() {
  return (
    <TaskManager />
  )
}


ReactDOM.render(<Index />, document.getElementById('root'))