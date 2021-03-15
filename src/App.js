import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialazeAppTC } from './components/Redux/app-reducer';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/preloader/Preloader';



class App extends React.Component {
        componentDidMount() {
                this.props.initialazeAppTC()
        }

        render() {
                if (!this.props.initialize) {
                        return <Preloader />
                }
                return (
                        <div className="app-wrapper">
                                <HeaderContainer />
                                <NavBar />
                                <div className='content'>
                                        <Route
                                                path='/profile/:userId?'
                                                render={() => <ProfileContainer />}
                                        />
                                        <Route
                                                path='/dialogs'
                                                render={() => <DialogsContainer />}
                                        />
                                        <Route
                                                path='/users'
                                                render={() => <UsersContainer />}
                                        />
                                        <Route path='/news' component={News} />
                                        <Route path='/music' component={Music} />
                                        <Route path='/settings' component={Settings} />
                                        <Route path='/login' component={Login} />
                                </div>
                        </div>
                )
        }
}

const mapStateToProps = (state) => ({ initialize: state.app.initialazed })

export default compose(
        connect(mapStateToProps, { initialazeAppTC }),
        withRouter)
        (App);