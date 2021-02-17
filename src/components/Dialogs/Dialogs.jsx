import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import {addMessageAtionCreator, onMessageChangeActionCreator} from "./../Redux/dialogs-reducer";


const Dialogs = (props) => {
        debugger
        let dialogsElemets = props.dialogsPage.dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
        let messageElements = props.dialogsPage.messagesData.map((message)=> <MessageItem id={message.id} message={message.message}/>)

        let newMessageElement = React.createRef();

        let addMessage = () => {
                props.dispatch(addMessageAtionCreator());
        }
        
        let onMessageChange = () => {
                let text = newMessageElement.current.value
                props.dispatch(onMessageChangeActionCreator(text));
        }

       /*  let onMessageChange = (event) => {
                let body = event.target.value;
                props.store.dispatch(onMessageChangeActionCreator(body))
        }  */

        return (
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