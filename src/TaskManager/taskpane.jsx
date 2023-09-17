import React, { useState } from 'react'
import './taskpane.css'


// Fix this code!!!

export default function TaskPane({ scale }) {

    const style = {
        scale: `${scale}`
    }


    const [subTask, setSubTask] = useState([])
    const [finishButton, setFinishButton] = useState
        (
            <div className='btn-finish'>
                <button>Finish</button>
            </div>
        )

    const closeSubTask = (k) => {
        const newTasks = subTask.filter((s) => s.key !== k)
        setSubTask((pTasks) => [newTasks])
    }

    const addSubTask = () => {
        const newSubTask = {
            isOpen: true,
            key: subTask.length
        }

        // const newSubTask = (
        // <li className='sub-task' key={subTask.length}>
        //     <input type='text'></input>
        //     <i id='close-subtask' onClick={() => closeSubTask(subTask.length)}></i>
        // </li>
        // )

        setSubTask((prevSubTasks) => [...prevSubTasks, newSubTask])
    }

    return (
        <div className='task-pane' style={{ style }}>
            <div>
                <h2>Task title</h2>
                <input type='text'></input>
            </div>
            <div className='subtasks'>
                <h3>Subtasks</h3>
                <i className='add-subtask' onClick={addSubTask}></i>
                <ol>
                    {subTask.map(t =>
                    (t.isOpen &&
                        <li className='sub-task' key={t.key}>
                            <input type='text'></input>
                            <i id='close-subtask' onClick={() => closeSubTask(t.key)}></i>
                        </li>)
                    )
                    }
                </ol>
                {subTask.length > 0 && finishButton}
            </div>
        </div>
    )
}
