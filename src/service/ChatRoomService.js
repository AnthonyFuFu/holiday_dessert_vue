import { BACKEND_URL, API_PATHS } from '../constants/Env';

export const chatRoomService = {
  // 獲取聊天室
  getChatRoom() {
    return BACKEND_URL + API_PATHS.CHAT_ROOM;
  },
  // 取得會員對客服對話紀錄
  getMessageByMem() {
    return BACKEND_URL + API_PATHS.GET_MESSAGE_BY_MEM;
  },
  // 前端 send 的路徑
  send() {
    return BACKEND_URL + API_PATHS.SEND;
  },
  // 建立端點連線
  registerStompEndpoints() {
    return BACKEND_URL + API_PATHS.END_POINT;
  },
  // 前端 subscribe 的路徑
  subscribe() {
    return BACKEND_URL + API_PATHS.SUBSCRIBE;
  },
};