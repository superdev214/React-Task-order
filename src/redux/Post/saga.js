import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import {
    POST_TASK,
} from "../actions";

import {
    postTaskSuccess,
    postTaskFail,
} from "./actions"

import axios from 'axios';

const server_url = "http://8.213.23.19"

export function* watchPostTask() {
    takeEvery(POST_TASK, postTaskFunc);
}

const postTaskAsync = async ({payload}) => {
    return axios.post(`${server_url}/post-task`, payload)
    .then((response) => response)
    .catch((error) => error)
}

function* postTaskFunc({payload}) {
    try {
        console.log(payload)
        const response = yield call(postTaskAsync, payload)
        yield put(postTaskSuccess(response.data))
    } catch (error) {
        yield put(postTaskFail(error))
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchPostTask),
    ])
}