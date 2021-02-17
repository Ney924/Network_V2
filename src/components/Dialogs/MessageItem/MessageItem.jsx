import React from 'react';
import './MessageItem.css';

const MessageItem = (props) => {
        return (
                <div className='messages'>
                        <span className='message-item'>{props.message}</span>
                </div>
               
                
        )
}

export default MessageItem;