export const TYPE_LOGIN_WITH_EMAIL = 'auth.login';
export const TYPE_LOGOUT = 'auth.logout';

export const actionAuthLoginWithEmail = (token) => ({
    type: TYPE_LOGIN_WITH_EMAIL,
    payload: token
});

export const actionAuthLogout = () => ({
    type: TYPE_LOGOUT
});