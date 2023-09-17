import React, { useState } from 'react';
import './messagebox.css';

export default function MessageBox({ message }) {
    const [messageBox, setMessageBox] = useState(message); // Initialize with null

    const closeMessageBox = () => {
        setMessageBox(null); // Close the message box by setting it to null
    };

    // Render the message box conditionally
    const msg = messageBox && (
        <div className='message-box'>
            <div id='title'>
                <h1>Message</h1>
                <hr />
            </div>
            <div id='content'>{message}</div>
            <div className='btn-abs'>
                <button onClick={closeMessageBox}>Ok</button>
            </div>
        </div>
    );

    return msg;
}
