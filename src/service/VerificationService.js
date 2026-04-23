import { BACKEND_URL, API_PATHS } from '../constants/Env'

export const verificationService = {
  // 重新寄送驗證信
  reSendEmail () {
    return BACKEND_URL + API_PATHS.RESEND_EMAIL
  }
}
