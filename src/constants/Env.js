// 後端 server 基本位址
export const BACKEND_URL = 'http://localhost:8080'

// // 商品圖片資料夾前綴
// export const PRODUCT_IMAGE_PREFIX =
//   `${BACKEND_BASE_URL}/holidayDessert/admin/upload/images/productPic/`

// // 前台靜態圖片（如果還有用到）
// export const FRONT_IMAGE_PREFIX =
//   `${BACKEND_BASE_URL}/holidayDessert/front/images/`

export const API_PATHS = {
  // index 相關
  MAIN_PRODUCT_LIST: '/holidayDessert/getMainProductList',
  POPULAR_LIST: '/holidayDessert/getPopularList',
  NEW_ARRIVAL_LIST: '/holidayDessert/getNewArrivalList',
  COMMENT_LIST: '/holidayDessert/getCommentList',
  NEW_LIST: '/holidayDessert/getNewList',

  // 會員相關
  LOGOUT: '/holidayDessert/front/logout',
  LOGIN: '/holidayDessert/front/login',
  GOOGLE_LOGIN: '/holidayDessert/front/google/login',

  // 聊天室相關
  CHAT_ROOM: '/holidayDessert/getChatRoom',
  GET_MESSAGE_BY_MEM: '/holidayDessert/getMessageByMem',

  // 建立連線
  SEND: '/app/chat/',
  END_POINT: '/holidayDessert/ws-chat',
  SUBSCRIBE: '/topic/chat/',
};