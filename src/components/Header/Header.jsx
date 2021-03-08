import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import './Header.css'

const Header = (props) => {
        /* let redirectLogin = () => {
                <Redirect to={'/login'}/>
        } */
        
        return (
                <div className='header'>
                        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' />

                        <div className='login-blok'>
                                {
                                        props.isAuth
                                                ? <div className='login-blok-button'> 
                                                        <span>{props.login} </span>
                                                        <button onClick={props.logoutTC}> Выйти </button>
                                                </div>
                                                : <NavLink to={'/login'}> <button className='login-blok-button'> Login </button> </NavLink>
                                }
                        </div>
                </div>
        );
}

export default Header;