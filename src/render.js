import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './components/Redux/state';

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
        <App 
          state={state} 
          addPost={addPost} 
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>,document.getElementById('root')
  );

}





