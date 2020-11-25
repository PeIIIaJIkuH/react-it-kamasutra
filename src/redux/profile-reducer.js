import {profileAPI} from '../api/axios';

const ADD_POST = 'ADD_POST',
	SET_PROFILE = 'SET_PROFILE',
	SET_STATUS = 'SET_STATUS';

const initialState = {
	posts: [
		{id: 1, text: 'Text 1'},
		{id: 2, text: 'Text 2'},
		{id: 3, text: 'Text 3'}
	],
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const post = {
				id: state.posts.length,
				text: action.newPost
			};
			return {
				...state,
				posts: [...state.posts, post]
			};
		case SET_PROFILE:
			return {...state, profile: action.profile};
		case SET_STATUS:
			return {...state, status: action.status};
		default:
			return state;
	}
};

export const addPost = (newPost) => ({type: ADD_POST, newPost});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (id) => (dispatch) => {
	profileAPI.getProfile(id).then(data => {
		dispatch(setProfile(data));
	});
};

export const getStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id).then(data => {
		dispatch(setStatus(data));
	});
};

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};

export default profileReducer;
