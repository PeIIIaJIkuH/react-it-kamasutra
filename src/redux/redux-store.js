import {applyMiddleware, combineReducers, createStore} from 'redux';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
	profileReducer,
	chatsReducer,
	usersReducer,
	authReducer,
	form: formReducer,
	appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
