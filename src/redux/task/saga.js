import { all, fork, call, put, takeLeading } from "redux-saga/effects";
import { GET_TASK, getTask, FILTER_TASK } from "../actions";
import {filterTask, getFilterTask} from './actions';

import { toast } from 'react-toastify';
import axios from "axios"

const server_url = "http://8.213.23.19/api";
const token = localStorage.getItem('token');


export function* getSelectedTask() {
  yield takeLeading(GET_TASK, getSelectedTaskFunc);
}

const getSelectedFuncAsync = async (payload) => {
  return axios
    .get(`${server_url}/view-task`, {params: {id: payload.id, user_id: payload.user_id}})
    .then((response) => response)
    .catch((error) => error);
};

function* getSelectedTaskFunc({ data }) {
  
  try {
      const response = yield call(getSelectedFuncAsync, data);
      yield put(
        getTask({...response.data.data})
      );
    } catch (error) {
  }
}

const getBrowseFilterTaskAsync = async ({payload}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
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
    fork(watchBrowseFilterTask),
    fork(getSelectedTask),
  ]);
}
