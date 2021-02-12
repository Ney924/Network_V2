import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = (props) => {

  let postsElemetnts = props.postData.map((post)=> <Post message={post.message} like={post.like}/>)

  return (
    <div className='posts'>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <input></input>
        <button>Add post</button>
      </div>
        {postsElemetnts}  
      </div>
  );
}

export default MyPosts;