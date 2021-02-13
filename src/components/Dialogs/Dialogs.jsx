import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {

        let dialogsElemets = props.state.dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
        let messageElements = props.state.messagesData.map((messsage)=> <MessageItem message={messsage.message}/>)

        return(
                <div className='dialogs'>
                       <div className='dialog-items'>
                               {dialogsElemets} 
                       </div>
                       
                        <div className='messages'>
                                {messageElements}
                        </div>
                       
                </div>
        );
}

export default Dialogs;