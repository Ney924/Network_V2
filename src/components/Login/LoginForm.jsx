import React from 'react';
import { Field } from 'redux-form'
import './Login.css';

export const LoginForm = (props) => {
        debugger
        return (
                <form onSubmit={props.handleSubmit}>
                        <div className='login-user'>
                                <div className='login-user-item'>
                                        <Field placeholder='Login' component={'input'} name={'email'} className='login-user-input'/>
                                </div>
                                <div className='login-user-item'>
                                        <Field placeholder='Password' component={'input'} name={'password'} type={'password'} className='login-user-input'/>
                                </div>
                                {props.error && <div className='login-error'>
                                        {props.error}
                                </div>}
                                <div className='login-user-item'>
                                        <Field type="checkbox" component={'input'} name={'rememberMe'}/> Запомнить меня
                                </div>
                                <div className='login-user-item'>
                                        <button>Login</button>
                                </div>
                        </div>
                </form> 
        )
}

