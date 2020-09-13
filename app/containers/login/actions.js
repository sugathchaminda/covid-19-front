import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGGED_OUT,
    USER_LOGGED_OUT_SUCCESS,
    USER_LOGGED_OUT_FAILED,
} from '../../constants/action_types/user';

const userLogin = data => ({
    type: USER_LOGIN,
    data,
});

const userLoginSuccess = response => ({
    type: USER_LOGIN_SUCCESS,
    response,
});

const userLoginFailed = error => ({
    type: USER_LOGIN_FAILED,
    error,
});

const userLogout = () => ({
    type: USER_LOGGED_OUT,
});

const userLogoutSuccess = response => ({
    type: USER_LOGGED_OUT_SUCCESS,
    response,
});

const userLogoutFailed = error => ({
    type: USER_LOGGED_OUT_FAILED,
});

export {
    userLogin,
    userLoginSuccess,
    userLoginFailed,
    userLogout,
    userLogoutFailed,
    userLogoutSuccess,
};
