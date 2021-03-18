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
                        <div className='item'>
                                <NavLink to='/news' activeClassName='active-link'>Новости</NavLink>
                        </div>
                        <div className='item'>
                                <NavLink to='/music' activeClassName='active-link'>Музыка</NavLink>
                        </div>
                        <div className='item'>
                                <NavLink to='/settings' activeClassName='active-link'>Настройки</NavLink>
                        </div>
                </nav>
        );
}


export default NavBar;