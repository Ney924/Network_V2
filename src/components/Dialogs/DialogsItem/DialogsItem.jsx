import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Dialogs.css';

const DialogsItem = (props) => {

        let Path = '/dialogs/' + props.id;

        return (
                <div>
                        <NavLink to={Path}>{props.name}</NavLink>
                </div>
        )
}


export default DialogsItem;