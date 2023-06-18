import { all, call, fork, put, take, takeEvery} from "redux-saga/effects";
import {
    LOGIN_WITH_SMS, VERIFY_OTP,
    EDIT_PROFILE,
} from '../actions'

import {
    loginWithSMSFail,
    loginWithSMSSuccess,
    verifyOtpSuccess,
    verifyOtpFail,
    editProfileSuccess,
    editProfileFail,
} from './actions';

import axios from 'axios';
import { redirect } from "react-router";
import { async } from "q";

const server_url = "http://8.213.23.19/api"


export function* watchLoginSMS() {
    yield takeEvery(LOGIN_WITH_SMS, loginWithSMSFunc);
}

const loginWithSMSAsync = async (payload)  => {
   return axios.post(`${server_url}/user/login-with-sms`, payload)
   .then((response) => response)
   .catch((error) => error)
}

function* loginWithSMSFunc({payload}) {
    try{
        const response = yield call(loginWithSMSAsync, payload);
        yield put(loginWithSMSSuccess({phone_no:payload.phone_no, verifyCode:response.data}))
        // if(response.data) {
        //     // yield put(loginWithSMSSuccess(response.data))

        // } else {
        // }
    } catch(error) {
        yield put(loginWithSMSFail(error));
    }
}

export function* watchVerifyOtp() {
    yield takeEvery(VERIFY_OTP, verifyOtpFunc)
}

const verifyOtpAsync = async (payload) => {
    return axios.post(`${server_url}/user/verify-otp`, {payload})
    .then((response) => response)
    .catch((error) => error)
}

function*  verifyOtpFunc({payload}) {
    try{
        const response = yield call(verifyOtpAsync, payload);
        yield put(verifyOtpSuccess(payload.phone_no))
        // if(response.data) {
        //     // yield put(loginWithSMSSuccess(response.data))

        // } else {
        // }
    } catch(error) {
        yield put(verifyOtpFail(error));
    }
}

export function* watchEditProfile() {
    yield takeEvery(EDIT_PROFILE, editProfileFunc)
}

const editProfileAsync = async(payload) =>{
    return axios.post(`${server_url}/edit-profile`)
    .then((response) => response)
    .catch((error) => error)
}

function* editProfileFunc({payload}) {
    try{
        const result = yield call(editProfileAsync, payload)
        yield put(editProfileSuccess(result))
    } catch (error) {
        yield put(editProfileFail(error))
    }
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginSMS),
        fork(watchVerifyOtp),
        fork(watchEditProfile)
,    ]);
}