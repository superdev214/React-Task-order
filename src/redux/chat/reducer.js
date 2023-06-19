
import * as type from "./actionsTypes";
const initalState = {
  chats: [],
  loading: false,
  error: null,
  text: []
}
const initalData = {
  chats: [],
  loading: false,
  error: null,
}
export default function chat(state = initalState, action) {
  switch (action.type) {
    
    case type.CHAT_USER_LIST_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.CHAT_USER_LIST:
      return {
        ...state,
        loading: false,
        chats: action.chats
      }
    case type.CHAT_USER_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
      case type.SEND_MESSAGE:
        return {
          ...state,
          loading: false,
          text: action.payload
        }
      
    default:
      return state;
  }
}

