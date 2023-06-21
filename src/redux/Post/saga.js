import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { POST_TASK, GET_ALL_CATEGORY, STORE_CATEGORY_ID } from "../actions";

import {
  postTaskSuccess,
  postTaskFail,
  getAllCategoryFail,
  getAllCategorySuccess,
  storeCategoryIdSuccess,
  storeCategoryId,
} from "./actions";

import axios from "axios";

const server_url = "http://8.213.23.19/api";
const token = localStorage.getItem('token');

export function* watchPostTask() {
  yield takeEvery(POST_TASK, postTaskFunc);
}

const postTaskAsync = async (payload) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`${server_url}/post-task`, payload, config);
    return response;
  } catch (error) {
    return error;
  }
};

function* postTaskFunc({ payload }) {
  try {
    const response = yield call(postTaskAsync, payload);
    yield put(postTaskSuccess(response.data));
  } catch (error) {
    yield put(postTaskFail(error));
  }
}

export function* watchGetCategory() {
  yield takeEvery(GET_ALL_CATEGORY, getCategoryFunc);
}

const getCategoryAsync = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${server_url}/get-all-category`, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

function* getCategoryFunc() {
  try {
    const response = yield call(getCategoryAsync);
    yield put(getAllCategorySuccess(response.data.data.category));
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

export function* watchCategoryID() {
  yield takeEvery(STORE_CATEGORY_ID, storeCategoryIdFunc);
}

function* storeCategoryIdFunc({ payload }) {
  yield put(storeCategoryId(payload));
}

export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchPostTask),
    fork(watchCategoryID),
  ]);
}
