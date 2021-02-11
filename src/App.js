import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
      </header>

      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className='content'>
        <div>
          <img src='https://zg66.ru/images/2020/07/15/black-sea_obl.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My post
        </div>
        <div>
          New post
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>

    </div>
  );
}

export default App;
