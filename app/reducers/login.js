import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGGED_OUT,
    USER_LOGGED_OUT_SUCCESS,
    USER_LOGGED_OUT_FAILED,
} from '../constants/action_types/user';

const initialState = {
    userLoginState: false,
    userLoginResponse: {},
    userLoginError: null,
    userLogoutState: false,
    userLogoutError: null,
};

export default function userLogin(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, userLoginStatus: false, userLoginResponse: {}, userLoginError: null };
        case USER_LOGIN_SUCCESS:
            return { ...state, userLoginStatus: true, userLoginResponse: action.response.data, userLoginError: null };
        case USER_LOGIN_FAILED:
            return { ...state, userLoginStatus: false, userLoginResponse: {}, userLoginError: action.error };
        case USER_LOGGED_OUT:
            return { ...state, userLogoutState: false, userLogoutError: null, userLoginStatus: false };
        case USER_LOGGED_OUT_SUCCESS:
            return { ...state, userLogoutState: true, userLogoutError: null };
        case USER_LOGGED_OUT_FAILED:
            return { ...state, userLogoutState: false, userLogoutError: action.error };
        default:
            return state;
    }
}
