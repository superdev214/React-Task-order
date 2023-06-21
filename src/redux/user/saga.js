import { all, call, fork, put, take, takeLeading } from "redux-saga/effects";
import { LOGIN_WITH_SMS, VERIFY_OTP, EDIT_PROFILE } from "../actions";

import {
  loginWithSMSFail,
  loginWithSMSSuccess,
  verifyOtpSuccess,
  verifyOtpFail,
  editProfileSuccess,
  editProfileFail,
} from "./actions";

import axios from "axios";

const server_url = "http://8.213.23.19/api";
const token = localStorage.getItem('token');
export function* watchLoginSMS() {
  yield takeLeading(LOGIN_WITH_SMS, loginWithSMSFunc);
}

const loginWithSMSAsync = async (payload) => {
  return axios
    .post(`${server_url}/user/login-with-sms`, payload)
    .then((response) => response)
    .catch((error) => error);
};

function* loginWithSMSFunc({ payload }) {
  try {
    const response = yield call(loginWithSMSAsync, payload);
    yield put(
      loginWithSMSSuccess({
        phone_no: payload.phone_no,
        verifyCode: response.data,
      })
    );
    // if(response.data) {
    //     // yield put(loginWithSMSSuccess(response.data))

    // } else {
    // }
  } catch (error) {
    yield put(loginWithSMSFail(error));
  }
}

export function* watchVerifyOtp() {
  yield takeLeading(VERIFY_OTP, verifyOtpFunc);
}

const verifyOtpAsync = async (payload) => {
    const response = await axios.post(`${server_url}/user/verify-otp`, payload.payload);
    return response.data;
}

function* verifyOtpFunc(payload) {
  try {
    const response = yield call(verifyOtpAsync, payload);
    // yield put({ type: "VERIFY_OTP", response});

    yield put(verifyOtpSuccess(response.data));
  } catch (error) {
    yield put(verifyOtpFail(error));
  }
}

export function* watchEditProfile() {
  yield takeLeading(EDIT_PROFILE, editProfileFunc);
}

const editProfileAsync = async (payload) => {
  try {
    const response = await axios.post(`${server_url}/edit-profile`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

function* editProfileFunc({ payload }) {
  try {
    const result = yield call(editProfileAsync, payload);
    yield put(editProfileSuccess(result));
  } catch (error) {
    yield put(editProfileFail(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginSMS),
    fork(watchVerifyOtp),
    fork(watchEditProfile),
  ]);
}
