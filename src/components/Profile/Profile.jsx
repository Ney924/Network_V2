import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'


const Profile = (props) => {
  return (
    <div className='content'>
      <ProfifeInfo/>
      <MyPosts state={props.state}/>
    </div>
  );
}


export default Profile;