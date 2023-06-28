import { 
  CHOOSE_TASK, GET_TASK,
} from "../actions";

export const chooseTask = (taskId) => ({
  type: CHOOSE_TASK,
  payload: taskId
})

export const getTask = (payload) => ({
  type: GET_TASK,
  payload
})