import React from 'react';
import MyPhotos from './MyPhotos/MyPhotos';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'
import ProfilePanel from './ProfilePanel/ProfilePanel';



const Profile = (props) => {
        const ProfilePage = () => {
                return (
                        <div className='profile-content'>
                                <ProfifeInfo
                                        profile={props.profile}
                                        status={props.status}
                                        updateUserStatusTC={props.updateUserStatusTC}
                                        isOwner={props.isOwner}
                                        saveFotoTC={props.saveFotoTC}
                                />
                                <ProfilePanel />
                                <MyPostsContainer />
                                {/* <MyPhotos/> */}
                        </div>
                )
        }

        return (
                <ProfilePage/>
  );
}


export default Profile;