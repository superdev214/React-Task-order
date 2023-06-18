import {
    POST_TASK_SUCCESS,
    POST_TASK_FAIL,
} from "../actions";


const INIT_STATE = {
    message : "",
    error : "",
}

export default(state = INIT_STATE, action) => {
    switch(action.type) {
        case POST_TASK_SUCCESS:
            return {...state, message : action.payload}
        case POST_TASK_FAIL:
            return {...state, message : "", error : action.payload}
        default:
            return {...state}
    }
}