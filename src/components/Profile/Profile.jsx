import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'
import ProfilePanel from './ProfilePanel/ProfilePanel';


const Profile = (props) => {
        return (
                <div className='content'>
                        <ProfifeInfo 
                                profile={props.profile}
                                status={props.status}
                                updateUserStatusTC={props.updateUserStatusTC}
                                isOwner={props.isOwner}
                                saveFotoTC={props.saveFotoTC}
                        />
                        <ProfilePanel/>
                        <MyPostsContainer/>
                </div>
  );
}


export default Profile;