import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=>{
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(onPostChangeActionCreator(text));
    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;





//! Для справки из старых уроков
/* const MyPostsContainer = (props) => {

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
    
} */
