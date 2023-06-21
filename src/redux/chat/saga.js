import {
  call,
  put,
  takeEvery,
  all,
  takeLeading,
  select,
} from "redux-saga/effects";
import axios from "axios";

const apiUrl = "http://8.213.23.19/api";

async function getChatApiData() {
  try {
    const response = await axios.get(`${apiUrl}/chat-user-list`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

function* fetchChat() {
  try {
    const chats = yield call(getChatApiData);
    yield put({ type: "CHAT_USER_LIST", chats });
  } catch (error) {
    yield put({ type: "CHAT_USER_LIST_FAILED", message: error.message });
  }
}

async function putChatApiData(payload) {
  try {
    const formData = new FormData();
    formData.append("message", payload.message);
    formData.append("sender_id", payload.sender_id);
    formData.append("receiver_id", payload.receiver_id);
    formData.append("task_id", payload.task_id);

    const response = await axios.post(`${apiUrl}/send-message`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

function* putChatData(action) {
  try {
    const { message, sender_id, receiver_id, task_id } = action.payload;
    const formData = {
      message,
      sender_id,
      receiver_id,
      task_id,
    };

    const response = yield call(putChatApiData, formData);
    yield put({ type: "SEND_MESSAGE_SUCCESS", response });

    // Rest of your code
  } catch (error) {
    yield put({ type: "SEND_MESSAGE_FAILURE", error });
  }
}

function* chatSaga() {
  yield takeLeading("CHAT_USER_LIST_REQUESTED", fetchChat);
}

function* userChatSagas() {
  yield takeLeading("SEND_MESSAGE", putChatData);
}

export default function* rootSaga() {
  yield all([chatSaga(), userChatSagas()]);
}
