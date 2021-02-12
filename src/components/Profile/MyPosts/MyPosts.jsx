import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = () => {

  let postData =[
    {id:1, post:'Это мой первый пост', like: 5},
    {id:2, post:'Привет, как дела?', like: 2},
    {id:3, post:'Хуёво, женег нет', like: 10},
  ]

  return (
    <div className='posts'>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <input></input>
        <button>Add post</button>
      </div>
     <Post message={postData[0].post} like={postData[0].like}/>
     <Post message={postData[1].post} like={postData[1].like}/>   
     <Post message={postData[2].post} like={postData[2].like}/>     
    </div>
  );
}

export default MyPosts;