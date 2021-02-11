import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = () => {
  return (
    <div className='posts'>
      <div>
        My post
      </div>
      <div>
        <input></input>
        <button>Add post</button>
      </div>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
      
    </div>
  );
}

export default MyPosts;