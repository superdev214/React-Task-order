import {
  POST_TASK,
  POST_TASK_SUCCESS,
  POST_TASK_FAIL,
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  STORE_CATEGORY_ID,
  STORE_CATEGORY_ID_SUCCESS,
  GET_MY_POST,
  GET_BROWSE_POST
} from "../actions";

export const postTaskget = (task) => ({
  type: GET_MY_POST,
  payload: task,
});

export const getBrowsetask = (task) => ({
  type: GET_BROWSE_POST,
  payload: task,
});

export const postTask = (task) => ({
  type: POST_TASK,
  payload: task,
});

export const postTaskSuccess = (task) => ({
  type: POST_TASK_SUCCESS,
  payload: task,
});

export const postTaskFail = ({ error }) => ({
  type: POST_TASK_FAIL,
  payload: error,
});

export const getAllCategory = () => ({
  type: GET_ALL_CATEGORY,
});

export const getAllCategorySuccess = (categories) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: categories,
});

export const getAllCategoryFail = ({ error }) => ({
  type: GET_ALL_CATEGORY_FAIL,
  payload: error,
});

export const storeCategoryId = (id) => ({
  type: STORE_CATEGORY_ID,
  payload: id,
});

export const storeCategoryIdSuccess = (value) => ({
  type: STORE_CATEGORY_ID_SUCCESS,
  payload: value,
});
