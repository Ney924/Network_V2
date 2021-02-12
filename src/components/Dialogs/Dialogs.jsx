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


const Dialogs = () => {
        return(
                <div className='dialogs'>
                       <div className='dialog-items'>
                                <DialogItem name='Ilya' id='1'/>
                                <DialogItem name='Anna' id='2'/>
                                <DialogItem name='Aleksey' id='3'/>
                                <DialogItem name='Egor' id='4'/>
                                <DialogItem name='Konstantin' id='5'/>
                       </div>
                       
                       
                        <div className='messages'>
                                <Message message='Привет'/>
                                <Message message='Как дела'/>
                                <Message message='Учу ссучий реакт'/>
                        </div>
                       
                </div>
        );
}

export default Dialogs;