import {
  POST_TASK_SUCCESS,
  POST_TASK_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  STORE_CATEGORY_ID_SUCCESS,
  POST_TASK,
  GET_MY_POST
} from "../actions";

const INIT_STATE = {
  success: "",
  message: "",
  addtask: "",
  error: "",
  categories: [],
  category: 0,
  mypost: []
};

export default function postApi(state = INIT_STATE, action) {
  switch (action.type) {
    case POST_TASK:
      return { ...state, success: action.payload };
    case POST_TASK_SUCCESS:
      return { ...state, addtask: action.payload.status };
    case POST_TASK_FAIL:
      return { ...state, message: "", error: action.payload };
    case GET_ALL_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload };
      case GET_MY_POST:
      return { ...state, mypost: action.payload };
    case STORE_CATEGORY_ID_SUCCESS:
      return { ...state, category: action.payload };
    case GET_ALL_CATEGORY_FAIL:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
