import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import ChatsContainer from './components/Chats/ChatsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Aside />
			<Route path='/chats'>
				<ChatsContainer />
			</Route>
			<Route path='/profile'>
				<Profile />
			</Route>
			<Route path='/users'>
				<UsersContainer />
			</Route>
			<Route exact path='/'>
				<Profile />
			</Route>
		</div>
	);
}

export default App;
