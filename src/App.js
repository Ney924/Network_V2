import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <div className='content'>
        <Route 
          path='/profile' 
          render={ ()=> <Profile store={props.store}
           /*  profilePage={props.state.profilePage}
            dispatch={props.dispatch} */
          />}
        />
        <Route 
          path='/dialogs' 
          render={ ()=> <Dialogs 
            dispatch={props.dispatch}
            dialogsPage={props.state.dialogsPage}
            
          />}
        />
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
  );
}

export default App;
