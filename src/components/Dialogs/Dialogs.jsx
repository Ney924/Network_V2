import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import {addMessageAtionCreator, onMessageChangeActionCreator} from "./../Redux/state";


const Dialogs = (props) => {

        let dialogsElemets = props.dialogsPage.dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
        let messageElements = props.dialogsPage.messagesData.map((message)=> <MessageItem message={message.message}/>)

        let newMessageElement = React.createRef();

        let addMessage = () => {
                props.dispatch(addMessageAtionCreator());
        }
        
        let onMessageChange = () => {
                let text = newMessageElement.current.value
                props.dispatch(onMessageChangeActionCreator(text));
        }

        return(
                <div className='dialogs'>
                       <div className='dialog-items'>
                               {dialogsElemets} 
                       </div>
                       
                        <div className='message-block'>
                                <div>
                                        {messageElements}
                                </div>
                                <div className='add-message'>
                                        <input 
                                                placeholder='Введите сообщение'
                                                ref={newMessageElement} 
                                                onChange={onMessageChange}
                                                value={props.newMessageText}
                                        />
                                                
                                        <button onClick={addMessage}>Отправить</button>
                                </div>
                        </div>
                       
                </div>
        );
}

export default Dialogs;