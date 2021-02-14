import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {

        let dialogsElemets = props.state.dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
        let messageElements = props.state.messagesData.map((messsage)=> <MessageItem message={messsage.message}/>)

        let newMessageElement = React.createRef()

        let addMessage = () => {
                let textMessage = newMessageElement.current.value
                alert(textMessage)
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
                                        <input ref={newMessageElement} placeholder='Введите сообщение'></input>
                                        <button onClick={addMessage}>Отправить</button>
                                </div>
                        </div>
                       
                </div>
        );
}

export default Dialogs;