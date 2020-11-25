import * as axios from 'axios';

const defaultAxios = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '52a0f2a3-7606-4dcb-a6c3-59c1181136f7'
	}
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return defaultAxios
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(id) {
		return defaultAxios.post(`follow/${id}`, null).then(r => {
			return r.data;
		});
	},
	unfollow(id) {
		return defaultAxios.delete(`follow/${id}`).then(r => r.data);
	}
};

export const profileAPI = {
	getProfile(id) {
		return defaultAxios.get(`profile/${id}`).then(r => r.data);
	},
	getStatus(id) {
		return defaultAxios.get(`profile/status/${id}`).then(r => r.data);
	},
	updateStatus(status) {
		return defaultAxios.put('profile/status', {status}).then(r => r.data);
	}
};

export const authAPI = {
	me() {
		return defaultAxios.get('auth/me').then(r => r.data);
	},
	login(email, password, rememberMe, captcha) {
		return defaultAxios.post('auth/login', {email, password, rememberMe, captcha}).then(r => r.data);
	},
	logout() {
		return defaultAxios.delete('auth/login').then(r => r.data);
	},
	getCaptcha() {
		return defaultAxios.get('security/get-captcha-url').then(r => r.data);
	}
};

