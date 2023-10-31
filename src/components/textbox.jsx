import React from "react";
import "../css/textbox.css"

export default function TextBox({ reference, placeholder, value, onChange, style, classOverrides, closable = false, closeSubTask, subTaskKey }) {
    return (
        <>
            <div className={'task-pane-input ' + classOverrides}>
                <input type='text' ref={reference} value={value} required onChange={onChange} style={style}></input>
                <i className='input-label'>{placeholder}</i>
                <div className='input-back'></div>
                {closable && <div className=' absolute top-0 right-1  h-full flex flex-col justify-center z-10 cursor-pointer'><i className='fa-solid fa-close relative px-1 hover:bg-gray-200 hover:rounded-lg ' onClick={() => closeSubTask(subTaskKey)}></i></div>}
            </div>
        </>
    )
}
