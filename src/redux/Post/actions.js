import {
    POST_TASK,
    POST_TASK_SUCCESS,
    POST_TASK_FAIL,
} from "../actions";

export const postTask =  (task) => (
{
    type: POST_TASK,
    payload: task,
});

export const postTaskSuccess = ({message}) => ({
    type: POST_TASK_SUCCESS,
    payload: message
});

export const postTaskFail = ({error}) => ({
    type : POST_TASK_FAIL,
    payload : error,
});