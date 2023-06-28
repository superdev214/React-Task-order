import {
  POST_TASK_SUCCESS,
  POST_TASK_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  STORE_CATEGORY_ID_SUCCESS,
  POST_TASK,
  GET_MY_POST,
  GET_BROWSE_POST,
  POST_QUESTION,
  POST_QUESTION_REPLY,
  POST_COMMENT
} from "../actions";

const INIT_STATE = {
  success: "",
  message: "",
  addtask: "",
  error: "",
  categories: [],
  category: 0,
  mypost: [],
  browsepost: "",
  question: [],
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
    case GET_BROWSE_POST:
      return { ...state, browsepost: action.payload };
    case STORE_CATEGORY_ID_SUCCESS:
      return { ...state, category: action.payload };
    case GET_ALL_CATEGORY_FAIL:
      return { ...state, error: action.payload };
    case POST_QUESTION: 
      return { ... state }
    case POST_QUESTION_REPLY:
      return { ... state }
    case POST_COMMENT:
      return { ... state }
    default:
      return { ...state };
  }
};
