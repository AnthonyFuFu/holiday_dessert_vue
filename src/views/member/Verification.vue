<template>
    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>

    <main class="main">
        <section class="verification-section">
            <form id="verification" class="verification-area">
                <div>會員E-mail驗證</div>
                <div class="verification-input">
                    <div class="email-block">
                        <div>會員註冊後，系統會發送認證信到您的信箱，點選認證信連結後，即可登入會員，若您5分鐘內未收到驗證信，請檢查您的<span
                                class="gold">垃圾郵件或垃圾桶檔案夾</span>，或者點選【<span class="gold">重新寄送驗證信</span>】</div>
                        <input v-model="memEmail" type="email" placeholder="請重新輸入Email" maxlength="30">
                    </div>
                    <div class="verification-submit" @click="reSendEmail">重新寄送驗證信</div>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
import { success, warning } from '@/utils/notification';
import { isEmail } from '@/utils/regex';
import { verificationService } from '@/service/VerificationService';
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import '@/css/verification.css'

export default {
    name: 'verification',
	data() {
		return {
			// model 屬性
			memEmail: ''
		};
	},
	methods: {
	    checkForm() {
			//驗證資料
			if (this.memEmail == null || this.memEmail == '') {
				warning("請輸入電子信箱");
				this.$refs.memEmail.focus();
				return false;
			} else if (!isEmail(this.memEmail)) {
				warning("電子信箱格式錯誤,請確認妳的電子信箱是不是合法的");
				this.$refs.memEmail.focus();
				return false;
			}
			return true;
		},
        reSendEmail() {
			if (this.checkForm()) {
				axios.post(verificationService.reSendEmail(), {
					memEmail: this.memEmail
				})
				.then(response => {
					if (response.data.STATUS == "F") {
						warning(response.data.MSG);
					} else if (response.data.STATUS == "RS") {
						success(response.data.MSG);
					} else {
						success(response.data.MSG);
					}
				})
				.catch(error => {
					console.log(error);
					warning("執行失敗");
				});
			}
		}
    }
}
</script>