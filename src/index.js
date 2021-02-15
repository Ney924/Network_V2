import React from 'react';
import state from "./components/Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe} from './components/Redux/state';

let rerenderEntireTree = (state) => {

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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


