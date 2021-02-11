import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'


const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src='https://zg66.ru/images/2020/07/15/black-sea_obl.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
}


export default Profile;