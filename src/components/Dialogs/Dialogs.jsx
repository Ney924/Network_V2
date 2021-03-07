import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {
        let dialogsElemets = props.dialogsPage.dialogsData.map((d)=> <DialogsItem name={d.name} id={d.id}/>)
        let messageElements = props.dialogsPage.messagesData.map((m)=> <MessageItem id={m.id} message={m.message}/>)

        const addNewMessage = (values) => {
                props.addMessage(values.newMessageBody)
        }

        return (
                <div className='dialogs'>
                       <div className='dialog-items'>
                               {dialogsElemets} 
                       </div>
                       
                        <div className='message-block'>
                                <div> 
                                        {messageElements}
                                </div>
                                <MessageReduxForm onSubmit={addNewMessage}/>
                        </div>
                       
                </div>
        );
}

const MessageForm = (props) => {
        return (
                <form className='add-message' onSubmit={props.handleSubmit}>
                        <Field 
                                placeholder='Введите сообщение' 
                                component={'input'} 
                                name={'newMessageBody'}
                        />
                        <button>Отправить</button>
                </form>
        )
}

const MessageReduxForm =  reduxForm({form: 'addMessageForm'})(MessageForm)


export default Dialogs;




/*  return (
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
        ); */