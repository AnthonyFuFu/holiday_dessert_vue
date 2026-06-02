// 後端 server 基本位址
export const BACKEND_URL = 'http://localhost:8080'

// // 商品圖片資料夾前綴
// export const PRODUCT_IMAGE_PREFIX =
//   `${BACKEND_BASE_URL}/holidayDessert/admin/upload/images/productPic/`

// // 前台靜態圖片（如果還有用到）
// export const FRONT_IMAGE_PREFIX =
//   `${BACKEND_BASE_URL}/holidayDessert/front/images/`

const BASE_PATH = '/holidayDessert'

export const API_PATHS = {
  // ===== 首頁相關 =====
  MAIN_PRODUCT_LIST:         `${BASE_PATH}/getMainProductList`,
  POPULAR_LIST:              `${BASE_PATH}/getPopularList`,
  NEW_ARRIVAL_LIST:          `${BASE_PATH}/getNewArrivalList`,
  COMMENT_LIST:              `${BASE_PATH}/getCommentList`,
  NEW_LIST:                  `${BASE_PATH}/getNewList`,
  SEND_FORM:                 `${BASE_PATH}/form/sendForm`,

  // ===== 會員相關 =====
  LOGOUT:                    `${BASE_PATH}/front/logout`,
  LOGIN:                     `${BASE_PATH}/front/login`,
  GOOGLE_LOGIN:              `${BASE_PATH}/front/google/login`,

  // ===== 註冊相關 =====
  REGISTER:                  `${BASE_PATH}/member/register`,
  CHECK_MEMBER_ACCOUNT_EMAIL:`${BASE_PATH}/member/checkMemberAccountEmail`,

  // ===== 重新寄送驗證信 =====
  RESEND_EMAIL:              `${BASE_PATH}/member/reSendEmail`,

  // ===== 聊天室相關 =====
  CHAT_ROOM:                 `${BASE_PATH}/getChatRoom`,
  GET_MESSAGE_BY_MEM:        `${BASE_PATH}/getMessageByMem`,

  // ===== WebSocket =====
  SEND:                      '/app/chat/',
  END_POINT:                 `${BASE_PATH}/ws-chat`,
  SUBSCRIBE:                 '/topic/chat/',
};