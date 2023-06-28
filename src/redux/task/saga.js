import { all, fork, call, put, takeLeading } from "redux-saga/effects";
import { GET_TASK, getTask } from "../actions";

import axios from "axios"

const server_url = "http://8.213.23.19/api";

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

export default function* rootSaga() {
  yield all([
    fork(getSelectedTask),
  ]);
}
