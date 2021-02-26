import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setProfilePage } from '../Redux/profile-reducer';
import Preloader from '../common/preloader/Preloader';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
            
            componentDidMount () {
                let userId = this.props.match.params.userId;
                if (userId == undefined) { userId = 2; }  
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDateProfileContainer= withRouter(ProfileContainer);

export default connect(mapStateToProps, 
            {setProfilePage} ) 
            (WithUrlDateProfileContainer);