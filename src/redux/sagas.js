import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import postSagas from './Post/saga';
import taskSagas from './task/saga';
import paymentSagas from './payment/saga';
import categorySagas from './category/saga';


export default function* rootSaga() {
    yield all ([
        userSagas(),
        // categorySagas(),
        postSagas(),
        // taskSagas(),
        // paymentSagas(),
    ]);
}