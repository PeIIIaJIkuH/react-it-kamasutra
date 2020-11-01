const FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET-USERS';

const initialState = {
	users: [
		{
			id: 1,
			name: 'Maxat',
			info: 'Black lives matter!',
			location: { city: 'Kampala', country: 'Uganda' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/2f/6b/ab/2f6bab56862dffdc6673dc39d71c38ce.jpg'
		},
		{
			id: 2,
			name: 'Zhanarys',
			info: 'U r gay!',
			location: { city: 'Abuja', country: 'Nigeria' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/3e/e4/5d/3ee45d1a0a3d351b0440ca101760ebf8.jpg'
		},
		{
			id: 3,
			name: 'Danik',
			info: 'Grannies are awesome!',
			location: { city: 'Riyadh', country: 'Saudi Arabia' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/37/4e/e5/374ee5d93665520d9302359713b4aa4d.jpg'
		},
		{
			id: 4,
			name: 'Eldar',
			info: 'I am ukranian migrant, glory to Ukraine!',
			location: { city: 'Kiev', country: 'Ukraine' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/13/4f/d6/134fd601d3c020df86b8fa04ba8bfeb7.jpg'
		},
		{
			id: 5,
			name: 'Rus',
			info: "It's not knife, it's just my third arm.",
			location: { city: 'Semipalatinsk', country: 'Kazakhstan' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/0b/75/b2/0b75b20980ccba97cab472738c33f852.jpg'
		},
		{
			id: 6,
			name: 'Aidyn',
			info:
				"No, please! I don't have any pot of gold. Do not fuck me, please!",
			location: { city: 'Dublin', country: 'Ireland' },
			following: false,
			avatar:
				'https://i.pinimg.com/564x/91/2c/e2/912ce2bec048c582e4b9112ad606459c.jpg'
		}
	]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.id) return { ...el, following: true };
					return el;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.id) return { ...el, following: false };
					return el;
				})
			};
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };
		default:
			return state;
	}
};

export const followAC = (id) => ({
	type: FOLLOW,
	id
});

export const unfollowAC = (id) => ({
	type: UNFOLLOW,
	id
});

export const setUsersAC = (users) => ({
	type: SET_USERS,
	users
});

export default usersReducer;
