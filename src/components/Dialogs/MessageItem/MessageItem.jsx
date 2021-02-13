import React from 'react';
import './../Dialogs.css';

const MessageItem = (props) => {
        return (
                <div className='message'>{props.message}</div>
                
        )
}

export default MessageItem;