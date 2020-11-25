export const getUsersReducer = state => state.usersReducer;

export const getProfileReducer = state => state.profileReducer;

export const getChatsReducer = state => state.chatsReducer;

export const getInitialized = state => state.appReducer.initialized;

export const getIsAuth = state => state.authReducer.isAuth;

export const getCaptcha = state => state.authReducer.captcha;

export const getLogin = state => state.authReducer.login;

