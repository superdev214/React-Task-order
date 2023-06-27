import { 
  CHOOSE_TASK 
 } from "../actions";

const INIT_STATE = {
  selectedTaskId: 0
}

export default function task(state = INIT_STATE, action) {
  switch (action.type) {
    case CHOOSE_TASK:
      return {...state, selectedTaskId: action.payload}
    default:
      return {...state}
  }
}
