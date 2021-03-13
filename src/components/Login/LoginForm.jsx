import React from 'react';
import { createFielfInput } from '../common/formsControls/formsControls';
import './Login.css';

export const LoginForm = (props) => {

        return (
                <form onSubmit={props.handleSubmit}>
                        <div className='login-user'>
                                <div className='login-user-item'>
                                        {createFielfInput('Login', 'input', 'email', 'login-user-input', null)}
                                </div>
                                <div className='login-user-item'>
                                        {createFielfInput('Password', 'input', 'password', 'login-user-input', 'password')}
                                </div>
                                {props.error && <div className='login-error'>
                                        {props.error}
                                </div>}
                                <div className='login-user-item'>
                                        {createFielfInput(null, 'input', 'rememberMe', null, 'checkbox')}
                                        Запомнить меня
                                </div>
                                <div className='login-user-item'>
                                        <button>Login</button>
                                </div>
                        </div>
                </form>
        )
}

