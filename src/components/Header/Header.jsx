import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import './Header.css'
import Logo from './../image/logo.png'

const Header = (props) => {
	return (
		<div className='header'>
			<div className='header-content'>
				<img src={Logo} />
				<div className='login-blok'>
					{
						props.isAuth
							? <div className='login-blok-button'>
								<span className='login-blok-button'>{props.login} </span>
								<button onClick={props.logoutTC} className='login-button'> Выйти </button>
							</div>
							: <NavLink to={'/login'} className='login-blok-button'> <button className='login-blok-button'> Login </button> </NavLink>
					}
				</div>
			</div>
		</div>
	);
}

export default Header;