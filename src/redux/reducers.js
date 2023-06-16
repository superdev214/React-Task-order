import { combineReducers } from 'redux';
import user from './user/reducer';
import defaults from './default/reducer';
import payment from './payment/reducer';
import task from './task/reducer';
import category from './category/reducer';

const reducers = combineReducers({
    user,
    defaults,
    payment, 
    task,
    category,
});

export default reducers;