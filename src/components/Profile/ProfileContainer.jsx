import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePage } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { componentAPI } from '../api/api';


class ProfileContainer extends React.Component {
            
        componentDidMount () {
        let userId = this.props.match.params.userId;
                if (userId == undefined) { userId = 15349; }          
                componentAPI.getProfile(userId).then(data => {
                                this.props.setProfilePage(data);
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


/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) */