import {authAPI} from '../api/axios';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
	SET_CAPTCHA = 'SET_CAPTCHA';

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captcha: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {...state, ...action.payload};
		case SET_CAPTCHA:
			return {...state, ...action.payload};
		default:
			return state;
	}
};

export const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: {id, login, email, isAuth}
});

export const setCaptcha = (captcha) => ({
	type: SET_CAPTCHA,
	payload: {captcha}
});

export const getAuth = () => (dispatch) => {
	return authAPI.me().then(data => {
		if (data.resultCode === 0) {
			const {id, login, email} = data.data;
			dispatch(setAuthUserData(id, login, email, true));
		}
	});
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
	authAPI.login(email, password, rememberMe, captcha).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuth());
		} else {
			const message = data.messages.length > 0 ? data.messages[0] : 'some error';
			if (data.resultCode === 10) {
				authAPI.getCaptcha().then(data => {
					dispatch(setCaptcha(data.url));
				});
			}
			dispatch(stopSubmit('login', {_error: message}));
		}
	});
};

export const logout = () => (dispatch) => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	});
};

export default authReducer;
