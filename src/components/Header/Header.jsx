import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = (props) => {
        return (
                <div className='header'>
                        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>

                        <div className='login-blok'>
                                {
                                        props.isAuth? 
                                        <div className='login-blok-button'> {props.login} </div> :
                                        <NavLink to={'/login'}> <button className='login-blok-button'> Login </button> </NavLink>
                                }
                        </div>
                </div>
        );
}

export default Header;