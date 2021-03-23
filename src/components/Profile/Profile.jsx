import React, { useState } from 'react';
import MyPhotos from './MyPhotos/MyPhotos';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'
import ProfilePanel from './ProfilePanel/ProfilePanel';



const Profile = (props) => {
	const [tab, setTab] = useState(1)
	const setTabPost = () => {setTab(1)}
	const setTabPhoto = () => {setTab(0)}

	const ProfilePage = () => {
		return (
			<div className='profile-page'>
				<ProfifeInfo
					profile={props.profile}
					status={props.status}
					updateUserStatusTC={props.updateUserStatusTC}
					isOwner={props.isOwner}
					saveFotoTC={props.saveFotoTC}
                                        saveProfileDataTC={props.saveProfileDataTC}
				/>
				<ProfilePanel setTabPost={setTabPost} setTabPhoto={setTabPhoto} />
				{tab == 1 ? <MyPostsContainer /> : <MyPhotos photoData={props.photoData}/>}
			</div>
		)
	}

	return (
		<ProfilePage />
	);
}


export default Profile;