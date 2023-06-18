import * as types from "./actionsTypes";
export function getChat(chats) {
    return {
      type: types.CHAT_USER_LIST_REQUESTED,
      payload: chats,
    }
}