import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'

let dialogsData = [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Aleksey'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Konstantin'},
]

let messagesData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела'},
        {id: 3, message: 'Учу ссучий реакт'},
        {id: 4, message: 'да, пердак то горит'}
]

let dialogsElemets = dialogsData.map((dialog)=> <DialogsItem name={dialog.name} id={dialog.id}/>)
let messageElements = messagesData.map((messsage)=> <MessageItem message={messsage.message}/>)

const Dialogs = () => {
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