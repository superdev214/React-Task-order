import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import postApi from './Post/reducer';
import payment from './payment/reducer';
import task from './task/reducer';
import category from './category/reducer';
import chat from './chat/reducer';

const reducers = combineReducers({
    userReducer,
    postApi,
    payment, 
    task,
    category,
    chat,
});

export default reducers;
