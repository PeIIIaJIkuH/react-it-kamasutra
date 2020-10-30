import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({ profileReducer, chatsReducer });

let store = createStore(reducers);

export default store;
