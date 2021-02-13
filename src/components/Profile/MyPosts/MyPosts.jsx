import React from 'react';
import './MyPosts.css'
import Post from './Posts/Post'


const MyPosts = (props) => {

  let postsElemetnts = props.state.postData.map((post)=> <Post message={post.post} like={post.like}/>)

  let newPostElement =React.createRef();

  let addPost = ()=> {
    let textMessage = newPostElement.current.value
    props.addPost(textMessage)
  }

  return (
    <div className='posts'>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <input ref={newPostElement}></input>
        <button onClick={addPost}>Add post</button>
      </div>
        {postsElemetnts}  
      </div>
  );
}

export default MyPosts;