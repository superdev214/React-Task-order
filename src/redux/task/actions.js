import { 
  CHOOSE_TASK 
} from "../actions";

export const chooseTask = (taskId) => ({
  type: CHOOSE_TASK,
  payload: taskId
})
