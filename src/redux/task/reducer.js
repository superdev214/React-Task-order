import { 
  CHOOSE_TASK,
  FILTER_TASK,
  GET_FILTER_TASK,
  SHOW_TASK_DETAIL
 } from "../actions";

const INIT_STATE = {
  selectedTaskId: 0,
  query: "",
  filteredTasks: [],
  currentTaskId: 0,
}

export default function task(state = INIT_STATE, action) {
  switch (action.type) {
    case CHOOSE_TASK:
      return {...state, selectedTaskId: action.payload}
    case FILTER_TASK:
      return {...state, query: action.payload}
    case GET_FILTER_TASK:
      return {...state, filteredTasks: action.payload}
    case SHOW_TASK_DETAIL:
      return {...state, currentTaskId: action.payload}
    default:
      return {...state}
  }
}
