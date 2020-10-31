const ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
	info: [
		'Date of birth: 23 February',
		'City: Pavlodar',
		'Education: NU',
		'Website: fnfn.net'
	],
	posts: [
		{ id: 1, text: 'Text 1' },
		{ id: 2, text: 'Text 2' },
		{ id: 3, text: 'Text 3' }
	],
	newPost: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const post = {
				id: state.posts.length,
				text: state.newPost
			};
			return {
				...state,
				posts: [...state.posts, post],
				newPost: ''
			};
		case UPDATE_NEW_POST:
			return { ...state, newPost: action.text };
		default:
			return state;
	}
};

export const addPostCreator = () => ({
	type: ADD_POST
});

export const updateNewPostCreator = (text) => ({
	type: UPDATE_NEW_POST,
	text: text
});

export default profileReducer;
