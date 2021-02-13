import React from 'react';
import './Post.css'


const Post = (props) => {
  return (
    <div className='post'>      
      <div className='avatar'>
        <img src='https://i.pinimg.com/originals/4d/af/2f/4daf2f183af331a8ba9a12bc2a458486.jpg'/>
          <span className='post-message'>{props.message}</span> 
        <div>like {props.like}</div>
      </div>
    </div>
  );
}

export default Post;