
import {
    LOGIN_WITH_SMS_SUCCESS,
    LOGIN_WITH_SMS_FAIL,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAIL,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL
} from '../actions';


const INIT_STATE = {
    phone_no:"",
    otp:"",
    error:"",
    message:"",
    verifyCode:0,
    user_id:74,
    token:""
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case LOGIN_WITH_SMS_SUCCESS:
            return {...state, phone_no: action.payload.phone_no,
                 verifyCode:action.payload.verifyCode, error:""};
        case LOGIN_WITH_SMS_FAIL:
            return {...state, error:action.payload};
        case VERIFY_OTP_SUCCESS:
            return {...state, user_id:action.payload.id, token:action.payload.token};
        case VERIFY_OTP_FAIL:
            return {...state, error:action.payload};
        case EDIT_PROFILE_SUCCESS: 
            return {...state, message:action.payload, error:""};
        case EDIT_PROFILE_FAIL:
            return {...state, error:action.payload}
        default:
            return { ...state };
    }
}