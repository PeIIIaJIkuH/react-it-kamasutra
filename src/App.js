import './App.css';
import Aside from './components/Aside/Aside';
import {Route, withRouter} from 'react-router-dom';
import ChatsContainer from './components/Chats/ChatsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {getInitialized} from './redux/selectors';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized)
			return <Preloader/>;

		return (
			<div className='App'>
				<HeaderContainer/>
				<Aside/>
				<Route path='/profile/:id?'>
					<ProfileContainer/>
				</Route>
				<Route path='/chats'>
					<ChatsContainer/>
				</Route>
				<Route path='/users'>
					<UsersContainer/>
				</Route>
				<Route path='/login'>
					<Login/>
				</Route>
				{/* <Route exact path='/'><Profile /></Route> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: getInitialized(state)
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
