import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <NavBar/>
      <div className='content'>
        <Route 
          path='/profile/:userId?' 
          render={ ()=> <ProfileContainer/>}
        />
        <Route 
          path='/dialogs' 
          render={ ()=> <DialogsContainer/>}
        />
        <Route 
          path='/users' 
          render={ ()=> <UsersContainer/>}
        />
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
  );
}

export default App;
