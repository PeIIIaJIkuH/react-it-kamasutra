const SEND_MESSAGE = 'SEND-MESSAGE',
	UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
	chats: [
		{
			id: 1,
			name: 'Maxat',
			src:
				'https://i.pinimg.com/564x/2f/6b/ab/2f6bab56862dffdc6673dc39d71c38ce.jpg',
			messages: ['Maxat 1', 'Maxat 2', 'Maxat 3']
		},
		{
			id: 2,
			name: 'Zhanarys',
			src:
				'https://i.pinimg.com/564x/3e/e4/5d/3ee45d1a0a3d351b0440ca101760ebf8.jpg',
			messages: ['Zhanarys 1', 'Zhanarys 2', 'Zhanarys 3']
		},
		{
			id: 3,
			name: 'Danik',
			src:
				'https://i.pinimg.com/564x/37/4e/e5/374ee5d93665520d9302359713b4aa4d.jpg',
			messages: ['Danik 1', 'Danik 2', 'Danik 3']
		},
		{
			id: 4,
			name: 'Eldar',
			src:
				'https://i.pinimg.com/564x/13/4f/d6/134fd601d3c020df86b8fa04ba8bfeb7.jpg',
			messages: ['Eldar 1', 'Eldar 2', 'Eldar 3']
		},
		{
			id: 5,
			name: 'Rus',
			src:
				'https://i.pinimg.com/564x/0b/75/b2/0b75b20980ccba97cab472738c33f852.jpg',
			messages: ['Rus 1', 'Rus 2', 'Rus 3']
		},
		{
			id: 6,
			name: 'Aidyn',
			src:
				'https://i.pinimg.com/564x/91/2c/e2/912ce2bec048c582e4b9112ad606459c.jpg',
			messages: ['Aidyn 1', 'Aidyn 2', 'Aidyn 3']
		}
	],
	messages: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
	newMessage: ''
};

const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, state.newMessage],
				newMessage: ''
			};
		case UPDATE_NEW_MESSAGE:
			return { ...state, newMessage: action.text };
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE,
	text: text
});

export default chatsReducer;
