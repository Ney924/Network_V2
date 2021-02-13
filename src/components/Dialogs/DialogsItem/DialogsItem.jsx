import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogsItem.css';

const DialogsItem = (props) => {

        let Path = '/dialogs/' + props.id;

        return (
                <div className='dialigs-item'>
                        <NavLink to={Path}>{props.name}</NavLink>
                </div>
        )
}


export default DialogsItem;