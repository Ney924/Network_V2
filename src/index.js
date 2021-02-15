import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/state';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
        <App 
          state={store.getState()} 
          addPost={store.addPost.bind(store)} 
          updateNewPostText={store.updateNewPostText.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </BrowserRouter>,document.getElementById('root')
  );

}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


