import { BACKEND_URL, API_PATHS } from '../constants/Env'

export const registerService = {
  // 註冊
  register () {
    return BACKEND_URL + API_PATHS.REGISTER
  },
  // 檢查會員帳號（Email）是否已存在
  checkMemberAccountEmail () {
    return BACKEND_URL + API_PATHS.CHECK_MEMBER_ACCOUNT_EMAIL
  },
  // 執行Google登入操作
  googleLogin () {
    return BACKEND_URL + API_PATHS.GOOGLE_LOGIN
  }
}
