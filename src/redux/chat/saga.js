import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = "http://8.213.23.19/api";

async function getChatApiData() {
    debugger
    return await axios
      .get(`${apiUrl}/chat-user-list`, {
        params: {
          user_id: "1234",
        },
      });

//  return fetch(`${apiUrl}/chat-user-list/1234`).then(response => response.json().catch(error => error));
}

function* fetchChat(action) {
 try {
  const chats = yield call(getChatApiData);
  console.log(chats.data.data)
  yield put({ type: 'CHAT_USER_LIST', chats: chats.data.data });
 } catch (error) {
  yield put({ type: 'CHAT_USER_LIST_FAILED', message: error.message });
 }
}

function* chatSaga() {
 yield takeLeading('CHAT_USER_LIST_REQUESTED', fetchChat);
}

export default chatSaga;
