import React, { useState, useRef } from 'react'
import SSIDGenerator from '../util/SSIDGenerator'
import MessageBox from './messagebox';
import '../css/taskpane.css'

export default function TaskPane({ paneKey, onClose }) {

    const [subTask, setSubTask] = useState([]);
    // const [finishButton, setFinishButton] = useState(null); // Initialize with null
    const [message, setMessage] = useState(false);

    const titleText = useRef();

    const closeSubTask = (k) => {
        const updatedSubTask = subTask.map(st => {
            if (st.key === k) {
                return { ...st, isOpen: false };
            }
            return st;
        });
        setSubTask(updatedSubTask);
    }

    const addSubTask = () => {
        let ssid = SSIDGenerator.generateSSID();
        console.log(ssid);
        const newSubTask = {
            isOpen: true,
            key: ssid
        }

        setSubTask((prevSubTasks) => [...prevSubTasks, newSubTask]);
    }

    // Check if there are open subtasks to show the finish button
    const hasOpenSubtasks = subTask.some(t => t.isOpen);

    function finishButtonValidation(subTasks, titleText) {
        if (titleText.current.value === '') {
            console.log("Title cannot be left empty.");
            setMessage("Title cannot be left empty.")
        }
    }


    // const taskPaneKey = SSIDGenerator.generateSSID();

    return (
        <div className='task-pane' paneKey={paneKey}>
            <div>
                <h2>Task title</h2>
                <button className='close-button-pane' onClick={() => onClose(paneKey)}>Close</button>
                <input type='text' ref={titleText}></input>
                <MessageBox message={message} />
            </div>
            <div className='subtasks'>
                <h3>Subtasks</h3>
                <i className='add-subtask fa-solid fa-plus' onClick={addSubTask}></i>
                <ol>
                    {subTask.map(t => t.isOpen && (
                        <li className='sub-task' key={t.key}>
                            <input type='text'></input>
                            <i id='close-subtask' className='fa-solid fa-close' onClick={() => closeSubTask(t.key)}></i>
                        </li>
                    ))}
                </ol>
                {hasOpenSubtasks && (
                    <div className='btn-finish'>
                        <button onClick={() => finishButtonValidation(subTask, titleText)}>Finish</button>
                    </div>
                )}
            </div>
        </div>
    );
}


