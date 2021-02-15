import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'


const Profile = (props) => {
  return (
    <div className='content'>
      <ProfifeInfo/>
      <MyPosts 
        dispatch={props.dispatch}
        posts={props.profilePage}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
}


export default Profile;