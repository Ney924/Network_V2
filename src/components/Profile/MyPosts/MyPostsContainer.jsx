import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState().profilePage;

  let addPost = ()=> {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
  }

  return <MyPosts 
    addPost={addPost}
    updateNewPostText={onPostChange} 
    postData={state.postData}
    newPostText={state.newPostText} 
    />
    
}

export default MyPostsContainer;