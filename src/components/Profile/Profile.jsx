import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfifeInfo from './ProfifeInfo/ProfifeInfo';
import './Profile.css'


const Profile = (props) => {
  return (
    <div className='content'>
      <ProfifeInfo/>
      <MyPostsContainer 
        store={props.store}
        /* dispatch={props.dispatch}
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText} */
      />
    </div>
  );
}


export default Profile;