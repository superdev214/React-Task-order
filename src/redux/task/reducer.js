import { 
  CHOOSE_TASK,
  GET_TASK
 } from "../actions";

const INIT_STATE = {
  selectedTaskId: 27,
  tasks: [],
  task: {}
}

export default function task(state = INIT_STATE, action) {
  switch (action.type) {
    case CHOOSE_TASK:
      return {...state, selectedTaskId: action.payload}
    case GET_TASK:
      return {...state, task: action.payload}
    default:
      return {...state}
  }
}
