
import { BACKEND_URL, API_PATHS } from '../constants/Env';

export const indexService = {
  // 獲取首頁主要產品清單
  getMainProductList() {
    return BACKEND_URL + API_PATHS.MAIN_PRODUCT_LIST;
  },
  // 獲取熱門推薦清單
  getPopularList() {
    return BACKEND_URL + API_PATHS.POPULAR_LIST;
  },
  // 獲取新品上市清單
  getNewArrivalList() {
    return BACKEND_URL + API_PATHS.NEW_ARRIVAL_LIST;
  },
  // 獲取留言清單
  getCommentList() {
    return BACKEND_URL + API_PATHS.COMMENT_LIST;
  },
  // 獲取新品上市清單
  getNewList() {
    return BACKEND_URL + API_PATHS.NEW_LIST;
  },
  // 執行登出操作
  logout() {
    return BACKEND_URL + API_PATHS.LOGOUT;
  },
  // 執行登入操作
  login() {
    return BACKEND_URL + API_PATHS.LOGIN;
  },
  // 執行Google登入操作
  googleLogin() {
    return BACKEND_URL + API_PATHS.GOOGLE_LOGIN;
  },
};