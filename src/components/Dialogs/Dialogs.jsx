import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const Dialogs = () => {
        return(
                <div className='dialogs'>
                       <div className='dialog-items'>
                                <NavLink to='Ilya'>Ilya</NavLink>  
                                <NavLink to='Anna'>Anna</NavLink>
                                <NavLink to='Aleksey'>Aleksey</NavLink>
                                <NavLink to='Egor'>Egor</NavLink>       
                       </div>
                       
                        <div className='messages'>
                                <div className='message'>Привет</div>
                                <div className='message'>Как дела</div>
                                <div className='message'>Учу ссучий реакт</div>
                        </div>
                       
                </div>
        );
}

export default Dialogs;