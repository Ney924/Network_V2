import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogsItem.css';

const DialogsItem = (props) => {

        const Path = '/dialogs/' + props.id;

        const dialogueWith = () => {
                props.activDialogAC(props.id)
        }

        return (
                <div className='dialigs-item'>
                        <NavLink to={Path} onClick={dialogueWith}> {props.name} </NavLink>
                </div>
        )
}


export default DialogsItem;