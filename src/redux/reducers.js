import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import postApi from './Post/reducer';
import payment from './payment/reducer';
import task from './task/reducer';
import category from './category/reducer';
import chat from './chat/reducer';
import user from './user/reducer';

const reducers = combineReducers({
    userReducer,
    postApi,
    payment, 
    task,
    category,
    chat,
    user
});

export default reducers;