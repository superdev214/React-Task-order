import {all, call, fork, put, takeLeading} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from 'axios';

import { FILTER_TASK } from '../actions';
import {filterTask, getFilterTask} from './actions';

const server_url = "http://8.213.23.19/api";
const token = localStorage.getItem('token');

const getBrowseFilterTaskAsync = async ({payload}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  console.log("filterquery:", payload);
  try {
    const response = await axios.get(`${server_url}/browse-task` + payload, config);
    return response;
  } catch (error) {
    console.log(error);
    // toast("Something went wrong!")
  }
}

function *getBrowseFilterTaskFunc(payload) {
  try {
    const response = yield call(getBrowseFilterTaskAsync, payload);
    console.log("response", response.data.data);
    yield put(getFilterTask(response?.data?.data));
  } catch(error) {
    console.log("error", error);
    yield put(getFilterTask([]));
  }
}

export function *watchBrowseFilterTask() {
  yield takeLeading(FILTER_TASK, getBrowseFilterTaskFunc);
}

export default function* rootSaga() {
  yield all([
    fork(watchBrowseFilterTask)
  ]);
}
