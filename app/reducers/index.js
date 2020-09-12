import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './login';
import dashboard from './dashboard';

export default history =>
    combineReducers({
        router: connectRouter(history),
        userLogin,
        dashboard,
    });
