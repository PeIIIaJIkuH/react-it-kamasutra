import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({ profileReducer, chatsReducer, usersReducer });

let store = createStore(reducers);

export default store;
