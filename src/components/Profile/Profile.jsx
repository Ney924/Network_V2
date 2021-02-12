import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'


const Profile = () => {
  return (
    <div className='content'>
      <ProfifeInfo/>
      <MyPosts/>
    </div>
  );
}


export default Profile;