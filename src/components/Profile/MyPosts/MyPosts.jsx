import React from 'react';
import './MyPosts.css';
import Post from './Posts/Post';
import {addPostActionCreator, onPostChangeActionCreator} from './../../Redux/state';


const MyPosts = (props) => {

  let postsElemetnts = props.posts.postData.map((post)=> <Post message={post.post} like={post.like}/>)

  let newPostElement =React.createRef();

  let addPost = ()=> {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <div className='posts'>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <input 
          placeholder='Добавить пост'
          ref={newPostElement} 
          onChange={onPostChange} 
          value={props.newPostText} 
        />
        <button onClick={addPost}>Add post</button>
      </div>
        {postsElemetnts}  
      </div>
  );
}

export default MyPosts;