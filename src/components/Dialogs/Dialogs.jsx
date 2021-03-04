import React from 'react';
import { Redirect } from 'react-router-dom';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'


const Dialogs = (props) => {
        
        let dialogsElemets = props.dialogsPage.dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
        let messageElements = props.dialogsPage.messagesData.map((message)=> <MessageItem id={message.id} message={message.message}/>)

        let newMessageElement = React.createRef();

        let onAddMessage = () => {
                props.addMessage()
        }
        
        let onMessageChange = () => {
                let text = newMessageElement.current.value
                props.updateNewMessageText(text)
        }

        //if (!props.isAuth) { return <Redirect to={'/login'}/> }

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
                                                
                                        <button onClick={onAddMessage}>Отправить</button>
                                </div>
                        </div>
                       
                </div>
        );
}

export default Dialogs;