import {
    LOGIN_TOKEN,
    LOGIN_AFTER_VERIFY,
    LOGIN_WITH_SMS_SUCCESS,
    LOGIN_WITH_SMS_FAIL,
    LOGIN_WITH_SMS,
    VERIFY_OTP, 
    VERIFY_OTP_FAIL, 
    VERIFY_OTP_SUCCESS,
    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
} from '../actions';

export const loginToken = () => ({

})

export const loginWithSMS = (phone_no) => ({
    type:LOGIN_WITH_SMS,
    payload:{phone_no}
})

export const loginWithSMSSuccess = (verifycode) => ({
    type: LOGIN_WITH_SMS_SUCCESS,
    payload: verifycode
});

export const loginWithSMSFail = (error) => ({
    type: LOGIN_WITH_SMS_FAIL,
    payload: {error}
})

export const verifyOtp = ({phone_no, verifyCode}) => ({
    type:VERIFY_OTP,
    payload: {phone_no, verifyCode}
})

export const verifyOtpSuccess = (opt) =>({
    type: VERIFY_OTP_SUCCESS,
    payload: opt
})

export const verifyOtpFail = ({message}) => ({
    type:VERIFY_OTP_FAIL,
    payload:message,
})

export const editProfile = (profile) => ({
    type:EDIT_PROFILE,
    payload:profile,
})

export const editProfileSuccess = ({message}) => ({
    type:EDIT_PROFILE_SUCCESS,
    payload:message,
})

export const editProfileFail = ({error}) => ({
    type:EDIT_PROFILE_FAIL,
    payload:error
})