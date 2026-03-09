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
    return API_PATHS.SEND;  // 直接返回 '/app/chat/' 這邊會在端點連線基礎上send資料 所以不用加BACKEND_URL
  },
  // 建立端點連線
  registerStompEndpoints() {
    return BACKEND_URL + API_PATHS.END_POINT;  // 添加基本 URL
  },
  // 前端 subscribe 的路徑
  subscribe() {
    return API_PATHS.SUBSCRIBE;  // 直接返回 '/topic/chat/' 這邊會在端點連線基礎上subscribe節點 所以不用加BACKEND_URL
  },
};