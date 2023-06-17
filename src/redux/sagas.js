import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import defaultSagas from './default/saga';
import taskSagas from './task/saga';
import paymentSagas from './payment/saga';
import categorySagas from './category/saga';


export default function* rootSaga() {
    yield all ([
        userSagas(),
        // categorySagas(),
        // defaultSagas(),
        // taskSagas(),
        // paymentSagas(),
    ]);
}