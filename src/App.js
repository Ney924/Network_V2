import React, { Suspense } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialazeAppTC } from './components/Redux/app-reducer';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavMenu from './components/NavMenu/NavMenu';
import Login from './components/Login/Login';
import Preloader from './components/common/preloader/Preloader';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
				<div className='content-page'>
					<NavMenu />
					<Route
						path='/profile/:userId?'
						render={() => <Suspense fallback={<Preloader />}> <ProfileContainer /> </Suspense>}
					/>
					<Route
						path='/dialogs'
						render={() => <Suspense fallback={<Preloader />}> <DialogsContainer /> </Suspense>}
					/>
					<Route
						path='/users'
						render={() => <Suspense fallback={<Preloader />}> <UsersContainer /> </Suspense>}
					/>
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