import React from 'react';
import './DialogueWithTheUser.css';

const DialogueWithTheUser = (props) => {
        return (
                <div className='dialogs-header'>
                        <div className='dialogs-header-user'>
                                {props.activeDialog || 'Собеседник'}
                       </div>
                        <div className='dialogs-header-online'>
                                Online
                        </div>
                </div>
        )
}
export default DialogueWithTheUser;