import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    POST_TASK,
    GET_ALL_CATEGORY,
} from "../actions";

import {
    postTaskSuccess,
    postTaskFail,
    getAllCategoryFail,
    getAllCategorySuccess,
} from "./actions"

import axios from 'axios';

const server_url = "http://8.213.23.19/api"

export function* watchPostTask() {
    yield takeEvery(POST_TASK, postTaskFunc);
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

export function* watchGetCategory() {
    yield takeEvery(GET_ALL_CATEGORY, getCategoryFunc)
}

const getCategoryAsync = () => {
    return axios.get(`${server_url}/get-all-category`)
    .then((response) => response)
    .catch(console.log)
}

function* getCategoryFunc() {
    try {
        const response = yield call(getCategoryAsync)
        yield put(getAllCategorySuccess(response.data))
        console.log(response.data)

    } catch(error) {
        yield put(getAllCategoryFail(error))
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetCategory),
        fork(watchPostTask),
    ]);
}