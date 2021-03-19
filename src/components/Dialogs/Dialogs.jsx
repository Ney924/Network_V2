import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from "./../../utils/validators/validator";
import { Input } from '../common/formsControls/formsControls';
import DialogueWithTheUser from './DialogueWithTheUser/DialogueWithTheUser';


const maxLenght150 = maxLenghtCreator(150)

const Dialogs = (props) => {
        let dialogsElemets = props.dialogsPage.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id} activDialogAC={props.activDialogAC}/>)
        let messageElements = props.dialogsPage.messagesData.map((m) => <MessageItem id={m.id} message={m.message} />)
        const addNewMessage = (values) => {
                props.addMessage(values.newMessageBody)
        }
        debugger
        return (
                <div className='dialogs-container'>
                        <div className='dialogue-with-the-user'>
                               <DialogueWithTheUser activeDialog={props.dialogsPage.activeDialog}/> 
                        </div>
                        <hr className='line'/>
                        <div className='dialogs'>

                                <div className='message-block'>
                                        <div>
                                                {messageElements}
                                        </div>
                                        <hr className='line'/>
                                        <MessageReduxForm onSubmit={addNewMessage} />
                                </div>
                                <div className='dialog-items'>
                                        {dialogsElemets}
                                        <hr className='line-mini'/>
                                </div>
                        </div>
                </div>
        );
}

const MessageForm = (props) => {
        return (
                <form className='add-message' onSubmit={props.handleSubmit}>
                        <Field
                                placeholder='Введите сообщение'
                                component={Input}
                                name={'newMessageBody'}
                                validate={[required, maxLenght150]}
                                className='add-message-input'
                        />
                        <button>Отправить</button>
                </form>
        )
}

const MessageReduxForm = reduxForm({ form: 'addMessageForm' })(MessageForm)


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