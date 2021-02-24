import React from 'react';
import './NavBar.css'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
        return (
        <nav className='nav'>
                <div className='item'>
                        <NavLink to='/profile' activeClassName='active-link'>Profile</NavLink>
                </div>
                <div className='item'>
                        <NavLink to='/dialogs' activeClassName='active-link'>Messages</NavLink>
                </div>
                <div className='item'>
                        <NavLink to='/users' activeClassName='active-link'>Users</NavLink>
                </div>
                <div className='item'>
                        <NavLink to='/news' activeClassName='active-link'>News</NavLink>
                </div>
                <div className='item'>
                        <NavLink to='/music' activeClassName='active-link'>Music</NavLink>
                </div>
                <div className='item'>
                        <NavLink to='/settings' activeClassName='active-link'>Settings</NavLink>
                </div>
        </nav>
        );
}


export default NavBar;