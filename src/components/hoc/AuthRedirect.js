import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'


export const withAuthRedirect = (Component) => {
        let mapStateRedirect = (state) => {
                return {
                        isAuth: state.auth.isAuth,
                }
        }
        class RedirectComponent extends React.Component {
                render () {
                        if (this.props.isAuth===false) { return <Redirect to={'/login'}/> }
                        return <Component {...this.props}/>
                };
        } ;
        let ConnectAuthRedirectComponent = connect(mapStateRedirect)(RedirectComponent)
        return ConnectAuthRedirectComponent;
}
