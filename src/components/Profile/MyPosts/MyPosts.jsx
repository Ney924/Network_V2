import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = () => {
  return (
    <div className='posts'>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <input></input>
        <button>Add post</button>
      </div>
     <Post message='Это мой первый пост' like='5'/>
     <Post message='Привет, как дела?' like='2'/>      
    </div>
  );
}

export default MyPosts;