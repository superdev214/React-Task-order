import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import chatSaga from './chat/saga';
import defaultSagas from './default/saga';
import taskSagas from './task/saga';
import paymentSagas from './payment/saga';
import categorySagas from './category/saga';
import rootSag from './chat/saga';


export default function* rootSaga() {
    yield all ([
        userSagas(),
        rootSag()
        // categorySagas(),
        // defaultSagas(),
        // taskSagas(),
        // paymentSagas(),
    ]);
}