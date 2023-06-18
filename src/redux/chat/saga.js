import { call, put, takeEvery,all, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = "http://8.213.23.19/api";

async function getChatApiData() {
    return await axios
      .get(`${apiUrl}/chat-user-list`, {
        params: {
          user_id: "1234",
        },
      });

//  return fetch(`${apiUrl}/chat-user-list/1234`).then(response => response.json().catch(error => error));
}
async function putChatApiData(payload) {
  debugger
  return await axios
    .post(`${apiUrl}/send-message`,{
      params: {
        user_id: "1234",
      },
    }, {payload})
    .then((response) => response)
      .catch((error) => error)
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

function* putChatData(action) {
  debugger
  try {
    const chats = yield call(putChatApiData, action); // Pass the function reference without calling it
    yield put({ type: 'SEND_MESSAGE', chats: chats.data.data });
  } catch (error) {
    console.log(error);
    yield put({ type: 'CHAT_USER_LIST_FAILED', message: error.message });
  }
}


 
function* chatSaga() {
 yield takeLeading('CHAT_USER_LIST_REQUESTED', fetchChat);
}

function* userChatSagas() {
  yield takeLeading('SEND_MESSAGE', putChatData);
 }

 export default function* rootSag() {
  yield all([chatSaga(), userChatSagas()]);
}