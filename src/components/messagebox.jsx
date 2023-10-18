import React, { useState } from 'react';
import '../css/messagebox.css';

export default function MessageBox({ message, isMsgOpen, setIsMsgOpen }) {
    const closeMessageBox = () => {
        setIsMsgOpen(false);
    };

    if (!isMsgOpen) return null

    return isMsgOpen && (
        <div className='message-box'>
            <div id='title'>
                <i className='fa-solid fa-triangle-exclamation'></i>
                {/* <hr /> */}
            </div>
            <div id='content'>
                <p>{message}</p>
            </div>
            <div className='btn-abs'>
                <button onClick={closeMessageBox}>Ok</button>
            </div>
        </div>
    );

}
