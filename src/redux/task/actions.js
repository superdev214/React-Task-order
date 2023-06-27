import { 
  CHOOSE_TASK,
  FILTER_TASK,
  GET_FILTER_TASK,
  SHOW_TASK_DETAIL,
} from "../actions";

export const chooseTask = (taskId) => ({
  type: CHOOSE_TASK,
  payload: taskId
})

export const filterTask = (query) => ({
  type: FILTER_TASK,
  payload: query
})

export const getFilterTask = (filteredTasks) => ({
  type: GET_FILTER_TASK,
  payload: filteredTasks
})

export const setTaskId = (taskId) => ({
  type: SHOW_TASK_DETAIL,
  payload: taskId
})
