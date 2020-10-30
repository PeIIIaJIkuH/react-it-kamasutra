import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Aside />
			<Route path='/chats'>
				<Chats store={props.store} />
			</Route>
			<Route path='/profile'>
				<Profile store={props.store} />
			</Route>
			<Route exact path='/'>
				<Profile store={props.store} />
			</Route>
		</div>
	);
}

export default App;
