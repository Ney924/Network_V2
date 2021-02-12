import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData =[
  {id:1, post:'Это мой первый пост', like: 5},
  {id:2, post:'Привет, как дела?', like: 2},
  {id:3, post:'Хуёво, женег нет', like: 10},
]

let dialogsData = [
  {id: 1, name: 'Ilya'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Aleksey'},
  {id: 4, name: 'Egor'},
  {id: 5, name: 'Konstantin'},
]

let messagesData = [
  {id: 1, message: 'Привет'},
  {id: 2, message: 'Как дела'},
  {id: 3, message: 'Учу ссучий реакт'},
  {id: 4, message: 'да, пердак то горит'}
]

ReactDOM.render(
  
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
