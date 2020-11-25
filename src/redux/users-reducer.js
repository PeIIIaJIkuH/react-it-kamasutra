import {userAPI} from '../api/axios';

const FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_USERS_COUNT = 'SET_USERS_COUNT',
	TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
	TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
	users: [],
	pageSize: 100,
	usersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.id) return {...el, followed: true};
					return el;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.id) return {...el, followed: false};
					return el;
				})
			};
		case SET_USERS:
			return {...state, users: [...action.users]};
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage};
		case SET_USERS_COUNT:
			return {...state, usersCount: action.totalCount};
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.id]
					: state.followingInProgress.filter((id) => id !== action.id)
			};
		default:
			return state;
	}
};

export const followSuccess = (id) => ({type: FOLLOW, id});
export const unfollowSuccess = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCount = (totalCount) => ({type: SET_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (id, followingInProgress) => ({
	type: TOGGLE_FOLLOWING_IN_PROGRESS,
	id,
	followingInProgress
});

export const getUsers = (page, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(page));
	userAPI.getUsers(page, pageSize)
		.then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setUsersCount(data.totalCount));
		});
};

export const onPageChange = (pageNumber, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(false));
	dispatch(setCurrentPage(pageNumber));
	userAPI.getUsers(pageNumber, pageSize)
		.then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
		});
};

export const follow = (id) => (dispatch) => {
	dispatch(toggleFollowingInProgress(id, true));
	userAPI.follow(id).then(data => {
		if (data.resultCode === 0) {
			dispatch(followSuccess(id));
		}
		dispatch(toggleFollowingInProgress(id, false));
	});
};

export const unfollow = (id) => (dispatch) => {
	dispatch(toggleFollowingInProgress(id, true));
	userAPI.unfollow(id).then(data => {
		if (data.resultCode === 0) {
			dispatch(unfollowSuccess(id));
		}
		dispatch(toggleFollowingInProgress(id, false));
	});
	dispatch(follow(id));
};

export default usersReducer;
