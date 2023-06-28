import { all, call, fork, put, takeLeading } from "redux-saga/effects";
import { POST_TASK, GET_ALL_CATEGORY, STORE_CATEGORY_ID, GET_MY_POST, GET_BROWSE_POST, POST_QUESTION, POST_QUESTION_REPLY, POST_COMMENT } from "../actions";
import { toast } from "react-toastify";

import {
  postTaskSuccess,
  postTaskFail,
  getAllCategoryFail,
  getAllCategorySuccess,
  storeCategoryIdSuccess,
  storeCategoryId,
  setQuestion
} from "./actions";

import axios from "axios";

const server_url = "http://8.213.23.19/api";
const token = localStorage.getItem('token');

export function* watchPostTask() {
  yield takeLeading(POST_TASK, postTaskFunc);
}

const postTaskAsync = async (payload) => {

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  try {
    const response = await axios.post(`${server_url}/post-task`, payload);
    return response;
  } catch (error) {
    return error;
  }
};

function* postTaskFunc({ payload }) {
  try {
    const response = yield call(postTaskAsync, payload);
    if(response.data.status !== 200) {
      toast.error("sometings went wrong");
    }
    yield put(postTaskSuccess(response.data));
  } catch (error) {
    yield put(postTaskFail(error));
  }
}

export function* watchGetCategory() {
  yield takeLeading(GET_ALL_CATEGORY, getCategoryFunc);
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

const gettaskAsync = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const user_id = localStorage.getItem("user_id");
    const response = await axios.get(`${server_url}/my-post?user_id=${user_id}`, config);

    return response;
  } catch (error) {
    console.log(error);
  }
};

function* gettaskFunc() {
  try {
    const response = yield call(gettaskAsync);
    yield put(getAllCategorySuccess(response.data));
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

const getbrowsetaskAsync = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${server_url}/browse-task`, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

function* getbrowsetaskFunc() {
  try {
    const response = yield call(getbrowsetaskAsync);
    yield put(getAllCategorySuccess(response.data.data));
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

export function* watchbrowsetask() {
  yield takeLeading(GET_BROWSE_POST, getbrowsetaskFunc);
}

export function* watchGetpost() {
  yield takeLeading(GET_MY_POST, gettaskFunc);
}

export function* watchCategoryID() {
  yield takeLeading(STORE_CATEGORY_ID, storeCategoryIdFunc);
}

function* storeCategoryIdFunc({ payload }) {
  yield put(storeCategoryId(payload));
}

export function* postQuestion() {
  yield takeLeading(POST_QUESTION, postQuestionFunc)
}

function* postQuestionFunc({payload}) {
  try {
    const response = yield call(postQuestionFuncAsync, payload);
    if (response.status === 200) {
      yield put({type: "GET_TASK", data: {id: payload.task_id, user_id: payload.sender_id}})
    }
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

const postQuestionFuncAsync = async(payload) => {
  const res = await axios.post(`${server_url}/post-question`, {sender_id: payload.sender_id, question: payload.question, task_id: payload.task_id})
  return res.data
}

export function* postQuestionReply() {
  yield takeLeading(POST_QUESTION_REPLY, postQuestionReplyFunc)
}

function* postQuestionReplyFunc({payload}) {
  try {
    const response = yield call(postQuestionReplyFuncAsync, payload);
    if (response.status === 200) {
      yield put({type: "GET_TASK", data: {id: payload.task_id, user_id: payload.sender_id}})
    }
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

const postQuestionReplyFuncAsync = async(payload) => {
  const res = await axios.post(`${server_url}/post-question-reply`, {sender_id: payload.sender_id, question_id: payload.question_id, task_id: payload.task_id, reply: payload.reply})
  return res.data
}

export function* postComment() {
  yield takeLeading(POST_COMMENT, postCommentFunc)
}

function* postCommentFunc({payload}) {
  try {
    const response = yield call(postCommentFuncAsync, payload);
    if (response.status === 200) {
      yield put({type: "GET_TASK", data: {id: payload.task_id, user_id: payload.sender_id}})
    }
  } catch (error) {
    yield put(getAllCategoryFail(error));
  }
}

const postCommentFuncAsync = async(payload) => {
  const res = await axios.post(`${server_url}/post-comment`, {user_id: payload.user_id, question_id: payload.question_id, task_id: payload.task_id, offer_id: payload.offer_id, comment: payload.comment})
  return res.data
}


export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetpost),
    fork(watchPostTask),
    fork(watchCategoryID),
    fork(watchbrowsetask),
    fork(postQuestion),
    fork(postQuestionReply),
    fork(postComment)
  ]);
}
