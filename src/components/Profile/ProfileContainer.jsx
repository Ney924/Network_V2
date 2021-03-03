import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePageTC } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
            
        componentDidMount () {
        let userId = this.props.match.params.userId;
                if (userId == undefined) { userId = 15349; }          
                this.props.setProfilePageTC(userId, this.props.profile)
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
            {setProfilePageTC} ) 
            (WithUrlDateProfileContainer);


/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) */