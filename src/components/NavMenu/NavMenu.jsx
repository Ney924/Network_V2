import React from 'react';
import './NavMenu.css'
import { NavLink } from 'react-router-dom'


const NavMenu = () => {
        return (
                <nav className='nav'>
                        <div className='item'>
                                <NavLink to='/profile' activeClassName='active-link'>Профиль</NavLink>
                        </div>
                        <div className='item'>
                                <NavLink to='/dialogs' activeClassName='active-link'>Сообщения</NavLink>
                        </div>
                        <div className='item'>
                                <NavLink to='/users' activeClassName='active-link'>Друзья</NavLink>
                        </div>
                </nav>
        );
}


export default NavMenu;