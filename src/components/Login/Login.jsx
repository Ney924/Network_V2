import React from 'react';
import './Login.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
        return (
                <form onSubmit={props.handleSubmit}>
                        <div>
                                <div className='login-user-item'>
                                        <Field placeholder='Login' component={'input'} name={'login'}/>
                                </div>
                                <div className='login-user-item'>
                                        <Field placeholder='Password' component={'input'} name={'password'} />
                                </div>
                                <div className='login-user-item'>
                                        <Field type="checkbox" component={'input'} name={'remember me'}/> remember me
                                </div>
                                <div className='login-user-item'>
                                        <button>Login</button>
                                </div>
                        </div>
                </form> 
        )
}

const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

        const onSubmit = (formData) => {
                console.log(formData);
        }
        
        return (
                <div className='login-user'>
                      <h1>Login user</h1>
                        <LoginReduxForm onSubmit={onSubmit}/>  
                </div>
                
        )
}


export default Login;