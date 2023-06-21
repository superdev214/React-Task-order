import {
  POST_TASK,
  POST_TASK_SUCCESS,
  POST_TASK_FAIL,
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  STORE_CATEGORY_ID,
  STORE_CATEGORY_ID_SUCCESS,
} from "../actions";

export const postTask = (task) => ({
  type: POST_TASK,
  payload: task,
});

export const postTaskSuccess = ({ message }) => ({
  type: POST_TASK_SUCCESS,
  payload: message,
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
