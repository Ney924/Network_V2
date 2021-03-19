import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
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


export default NavBar;