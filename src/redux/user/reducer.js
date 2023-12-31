import {
  LOGIN_WITH_SMS_SUCCESS,
  LOGIN_WITH_SMS_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  VERIFY_OTP,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  PUBLISH_REPORT,
  UPDATE_NOTIFICATIONS
} from "../actions";

const INIT_STATE = {
  phone_no: "",
  otp: "",
  error: "",
  otpError: "",
  message: "",
  verifyCode: 0,
  user_id: 4,
  token: "",
  notifications: []
};

export default function user(state = INIT_STATE, action) {
//   console.log("action.payload.token", action?.payload);
  switch (action.type) {
    case LOGIN_WITH_SMS_SUCCESS:
      return {
        ...state,
        phone_no: action.payload.phone_no,
        verifyCode: action.payload.verifyCode,
        error: "",
      };
    case LOGIN_WITH_SMS_FAIL:
      return { ...state, error: action.payload };
    case VERIFY_OTP:
      return { ...state, data: action.payload };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        token: action?.payload?.data.token,
        otpError: {
          message: action?.payload?.message,
          status: action?.payload?.status,
        },
      };
    case VERIFY_OTP_FAIL:
      return { ...state, otpError: action.payload };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, message: action.payload, error: "" };
    case EDIT_PROFILE_FAIL:
      return { ...state, error: action.payload };
    case UPDATE_NOTIFICATIONS:
      return {...state, notifications: action.payload}
    default:
      return { ...state };
  }
}
