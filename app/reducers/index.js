import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './login';
import dashboard from './dashboard';
// import countryManagement from './countryManagement';


export default history =>
    combineReducers({
        router: connectRouter(history),
        userLogin,
        dashboard,
        // countryManagement,
    });
