import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const DialogItem = (props) => {

        let Path = '/dialogs/' + props.id;

        return (
                <div>
                        <NavLink to={Path}>{props.name}</NavLink>
                </div>
        )
}

const Message = (props) => {
        return (
                <div className='message'>{props.message}</div>
        )
}

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


const Dialogs = () => {
        return(
                <div className='dialogs'>
                       <div className='dialog-items'>
                                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                                <DialogItem name='Aleksey' id='3'/>
                                <DialogItem name='Egor' id='4'/>
                                <DialogItem name='Konstantin' id='5'/>
                       </div>
                       
                       
                        <div className='messages'>
                                <Message message={messagesData[0].message}/>
                                <Message message={messagesData[1].message}/>
                                <Message message={messagesData[2].message}/>
                                <Message message={messagesData[3].message}/>
                        </div>
                       
                </div>
        );
}

export default Dialogs;