import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = () => {

  let postData =[
    {id:1, post:'Это мой первый пост', like: 5},
    {id:2, post:'Привет, как дела?', like: 2},
    {id:3, post:'Хуёво, женег нет', like: 10},
  ]

  let postsElemetnts = postData.map((post)=> <Post message={post.message} like={post.like}/>)

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