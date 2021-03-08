import React from 'react';
import './Login.css';
import { reduxForm } from 'redux-form'
import { LoginForm } from "./LoginForm";
import { connect } from 'react-redux';
import { loginTC } from '../Redux/auth-reducer';
import { Redirect } from 'react-router';

let mapStateToProps = (state) => {
        return {
                isAuth: state.auth.isAuth,
        }
}

const Login = (props) => {

        const LoginMe = (formData) => {
                props.loginTC(formData.email, formData.password, formData.rememberMe);
                // тут loginTC это callback, который внутри себя диспатчит thunkCreator с таким же названием loginTC
        }

        if (props.isAuth) { return <Redirect to={'/profile'} /> }

        return (
                <div className='login-user-window'>
                        <h1>Login user</h1>
                        <LoginReduxForm onSubmit={LoginMe} />
                </div>

        )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(mapStateToProps, { loginTC })(Login);