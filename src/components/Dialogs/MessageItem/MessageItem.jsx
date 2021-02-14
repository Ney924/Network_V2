import React from 'react';
import './MessageItem.css';

const MessageItem = (props) => {
        return (
                <div className='messages'>
                        <div className='message-item'>{props.message}</div>
                </div>
               
                
        )
}

export default MessageItem;