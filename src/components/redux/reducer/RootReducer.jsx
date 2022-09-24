import { combineReducers } from 'redux';
import { authReducer } from './LoginReducer';
import { MyTaskReducer } from './MyTaskReducer';

export default combineReducers({
    auth: authReducer,
    mytask: MyTaskReducer
});