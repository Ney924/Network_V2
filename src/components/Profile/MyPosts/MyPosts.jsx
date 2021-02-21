import React from 'react';
import './MyPosts.css';
import Post from './Posts/Post';



const MyPosts = (props) => {

  let postsElemetnts = props.profilePage.postData.map((post)=> <Post message={post.post} like={post.like}/>)

  let newPostElement =React.createRef();

  let onAddPost = ()=> {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
      </div>
        {postsElemetnts}  
      </div>
  );
}

export default MyPosts;