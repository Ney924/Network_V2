import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from '../Redux/auth-reducer';
import Header from "./Header";
import { componentAPI } from "../api/api";

class HeaderContainer extends React.Component {

        componentDidMount () {
                componentAPI.getAuthMe().then(data => {
                                if (data.resultCode === 0) {
                                        let {id, email, login} = data.data;
                                        this.props.setAuthUserData(id, email, login);
                                }
                        });
        }
              
        render () {
                return <Header {...this.props}/>
        }
}

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);