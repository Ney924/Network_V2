import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setProfilePage } from '../Redux/profile-reducer';
import Preloader from '../common/preloader/Preloader';


class ProfileContainer extends React.Component {
            
            componentDidMount () {
                        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                        .then( response => {
                                this.props.setProfilePage(response.data);
                        });
            }
            
            render () {
                        return (
                            <Profile {...this.props} profile={this.props.profile}/> 
                        )
            }
}

let mapStateToProps = (state) => {
            return {
                        profile: state.profilePage.profile,
            }
            
}


export default connect(mapStateToProps, 
            {setProfilePage} ) 
            (ProfileContainer);