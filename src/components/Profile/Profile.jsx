import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'


const Profile = (props) => {
  return (
    <div className='content'>
      <ProfifeInfo/>
      <MyPostsContainer/>
    </div>
  );
}


export default Profile;