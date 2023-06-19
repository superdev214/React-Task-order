import {
    POST_TASK_SUCCESS,
    POST_TASK_FAIL,
    GET_ALL_CATEGORY_SUCCESS,
    GET_ALL_CATEGORY_FAIL,
} from "../actions";


const INIT_STATE = {
    message : "",
    error : "",
    categories:[], 
    category:0,
}

export default(state = INIT_STATE, action) => {
    switch(action.type) {
        case POST_TASK_SUCCESS:
            return {...state, message : action.payload}
        case POST_TASK_FAIL:
            return {...state, message : "", error : action.payload}
        case GET_ALL_CATEGORY_SUCCESS:
            return {...state, categories:action.payload};
        case GET_ALL_CATEGORY_FAIL:
            return {...state, error:action.payload}
        default:
            return {...state}
    }
}