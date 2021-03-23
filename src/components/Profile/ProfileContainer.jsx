import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePageTC, getUserStatusTC, updateUserStatusTC, saveFotoTC, saveProfileDataTC } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

	updateProfile() {
		let userId = this.props.match.params.userId;
		if (userId == undefined) {
			userId = this.props.authorizedMyId;
			if (!userId) {
				this.props.histoty.push('/login');  //заглушка с редиректом через метод history.push
			}
		}
		this.props.setProfilePageTC(userId, this.props.profile);
		this.props.getUserStatusTC(userId);

	}

	componentDidMount() {
		this.updateProfile();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.updateProfile();
		}

	}

	render() {
                return (
			<Profile {...this.props}
				profile={this.props.profile}
				status={this.props.status}
				isOwner={!this.props.match.params.userId}
				saveFotoTC={this.props.saveFotoTC}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedMyId: state.auth.userId,
		isAuth: state.auth.isAuth,
                photoData: state.profilePage.photoData,
	}

}

export default compose(connect(mapStateToProps,
	{ setProfilePageTC, getUserStatusTC, updateUserStatusTC, saveFotoTC, saveProfileDataTC }),
	withRouter,
	withAuthRedirect)
	(ProfileContainer)











/* let isAuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDateProfileContainer= withRouter(isAuthRedirectComponent);

export default connect(mapStateToProps,
			{setProfilePageTC} )
			(WithUrlDateProfileContainer);
 */

/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) */