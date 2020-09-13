import { takeEvery, put } from 'redux-saga/effects';
import browserStorage from '../../helpers/browserStorage';
import {
    USER_LOGIN,
    USER_LOGGED_OUT,
} from '../../constants/action_types/user';
import {
    userLoginSuccess,
    userLoginFailed,
    userLogoutFailed,
    userLogoutSuccess,
} from './actions';

export function* userLogin(data) {
    try {
        const { data: { email, password } } = data;
        if (email === 'sugathsathkorala@gmail.com' && password === '1qaz!QAZ') {
            browserStorage.setLocalStorage('sc_data', email);
            yield put(userLoginSuccess(true));
        } else {
            yield put(userLoginFailed('Username or Password incorrect'));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error->userLogin ', error);
        yield put(userLoginFailed(error));
    }
}

export function* userLogout() {
    try {
        browserStorage.removeLocalStorage('sc_data');
        yield put(userLogoutSuccess(true));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error->userLogout ', error);
        yield put(userLogoutFailed(error));
    }
}


export default function* userSignUpSagas() {
    yield* [
        takeEvery(USER_LOGIN, userLogin),
        takeEvery(USER_LOGGED_OUT, userLogout),
    ];
}
