<template>
	<section class="banner-box">
		<img class="banner-login" src="/images/banner-login.jpg" alt="banner">
	</section>
	<main class="main">
		<section class="register-section">
			<form class="register-area">
				<div>註冊</div>
                <div class="login-input">
                    <div class="name-block">
                        <div>姓名</div>
                        <input v-model="memName" type="text" placeholder="請輸入姓名" maxlength="30" ref="memName">
                    </div>
                    <div class="phone-block">
                        <div>電話</div>
                        <input v-model="memPhone" type="tel" placeholder="請輸入電話號碼" maxlength="20" ref="memPhone">
                    </div>

                    <div class="email-block">
                        <div>帳號</div>
                        <input v-model="memEmail" @change="checkEmailExist" type="email" placeholder="請輸入Email帳號" maxlength="30" autocomplete="username" ref="memEmail">
                    </div>
                    <div class="pwd-block">
                        <div>密碼</div>
                        <input v-model="memPassword" :type="passwordType" type="password" placeholder="請輸入密碼" maxlength="25" autocomplete="current-password" ref="memPassword">
                        <span class="material-icons vision" @mousedown="passwordVision(true)" @mouseup="passwordVision(false)" @mouseleave="passwordVision(false)">visibility_off</span>
                    </div>
                    <div class="agree-block">
                        <input v-model="agreePolicy" type="checkbox" id="agree" ref="agreePolicy">
                        <span for="agree" @click="toggleAgree"></span>
                        <label for="agree">開始使用本服務或註冊前，平台用戶應確保其已仔細參閱並同意<a href="./policy.html"
                                class="gold">隱私權政策</a>以及<a href="./terms.html" class="gold">使用者條款</a></label>
                    </div>
                    <div class="register-submit" @click="register">註冊</div>
                </div>
				<div class="horizon"></div>or<div class="horizon"></div>
				<div>
					<div class="circle-container">
						<a href="/front/member/FBLogin"><img src="/images/FB-logo.svg" alt="FB-logo"></a>
					</div>
					<div class="circle-container">
						<a href="#" @click.prevent="googleLogin"><img src="/images/google-logo.svg" alt="google-logo"></a>
					</div>
					<div class="circle-container">
						<a href="/front/member/LineLogin"><img src="/images/Line-logo.svg" alt="Line-logo"></a>
					</div>
				</div>
			</form>
		</section>
	</main>
</template>

<script>
import { isCellphone, isEmail } from '@/utils/regex';
import { warning } from '@/utils/notification';
import { getSession } from '@/utils/storage';
import { registerService } from '@/service/RegisterService'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import '@/css/login.css'

export default {
	name: 'register',
	data() {
		return {
			// model 屬性
			memId: '',
			memName: '',
			memAccount: '',
			memEmail: '',
			memPassword: '',
			memGender: '',
			memPhone: '',
			memAddress: '',
			memBirthday: '',
			memStatus: '',
			memVerificationStatus: '',
			memVerificationCode: '',
			memGoogleUid: '',
			// 其他屬性
			memberSession: '',
      		passwordType: 'password',
      		agreePolicy: false
		};
	},
	methods: {
		checkEmailExist() {
			return new Promise((resolve, reject) => {
				axios.post(registerService.checkMemberAccountEmail(), {
					memEmail: this.memEmail
				})
				.then(response => {
					let status = response.data.STATUS;
					let msg = response.data.MSG;
					if (isEmail(this.memEmail)) {
						if (status == "F") {
							this.cleanEmailTip();
							$('.email-block div').append("<span id='emailTip' style='color:red; font-size: smaller;text-align: center;margin:20px'>" + msg + "</span>");
							resolve({ status: "F"});
						} else if (status == "T") {
							this.cleanEmailTip();
							$('.email-block div').append("<span id='emailTip' style='color:green; font-size: smaller;text-align: center;margin:20px'>" + msg + "</span>");
							resolve({ status: "T"});
						}
					} else {
						this.cleanEmailTip();
						$('.email-block div').append("<span id='emailTip' style='color:red; font-size: smaller;text-align: center;margin:20px'>email不符合格式</span>");
						resolve({ status: "F"});
					}
				})
				.catch(error => {
					console.log(error);
					warning("執行失敗");
					reject(error);
				});
			});
		},
		cleanEmailTip() {
			if ($("#emailTip") != null) {
				$("#emailTip").remove();
			}
		},
		checkForm() {
			//驗證資料
			if (this.memName == null || this.memName == '') {
				warning("請輸入中文姓名");
				this.$refs.memName.focus();
				return false;
			} else if (this.memPhone == null || this.memPhone == '') {
				warning("請輸入行動電話");
				this.$refs.memPhone.focus();
				return false;
			} else if (!isCellphone(this.memPhone)) {
				warning("行動電話格式不正確，請確認行動電話號碼");
				this.$refs.memPhone.focus();
				return false;
			} else if (this.memEmail == null || this.memEmail == '') {
				warning("請輸入電子信箱");
				this.$refs.memEmail.focus();
				return false;
			} else if (!isEmail(this.memEmail)) {
				warning("電子信箱格式錯誤,請確認妳的電子信箱是不是合法的");
				this.$refs.memEmail.focus();
				return false;
			} else if (this.memPassword == null || this.memPassword == '') {
				warning("請輸入密碼");
				this.$refs.memPassword.focus();
				return false;
			} else if (this.memPassword.length < 6) {
				warning("密碼必須大於6碼");
				this.$refs.memPassword.focus();
				return false;
			} else if (!this.agreePolicy) {
				warning("請勾選已閱讀會員權利說明");
				this.$refs.agreePolicy.focus();
				return false;
			}
			return true;
		},
		register() {
			this.checkEmailExist().then(result => {
				if (result.status === "T") {
					if (this.checkForm()) {
						axios.post(registerService.register(), {
							memName: this.memName,
							memPhone: this.memPhone,
							memEmail: this.memEmail,
							memPassword: this.memPassword
						})
						.then(response => {
							if (response.data.STATUS == "F") {
								warning(response.data.MSG);
							} else {
								$(location).attr("href", "/holidayDessert/member/verification");
							}
						})
						.catch(error => {
							console.log(error);
							warning("執行失敗");
						});
					}
				} else {
					if (this.checkForm()) {
						warning("此email已經註冊,請選擇其他email");
					}
				}
			});
		},
		loadMemberSession() {
			const memberSession = getSession('memberSession');
			if (memberSession) {
				this.updateSession(memberSession);
			}
		},
		googleLogin() {
			// return new Promise((resolve, reject) => {
			// 	axios.post('/holidayDessert/front/google/login')
			// 		.then(response => {
			// 			if (response.data.STATUS == "N") {
			// 				resolve({ status: "N", memberSession: '' });
			// 			} else if (response.data.STATUS == "GLN") {
			// 				resolve({ status: "GLN", memberSession: '' });
			// 			} else {
			// 				var memberSession = response.data.memberSession;
			// 				localStorage.setItem('memberSession', JSON.stringify(memberSession));
			// 				this.updateSession(memberSession);
			// 				resolve({ status: "GLY", memberSession: memberSession });
			// 				$(location).attr("href", "/holidayDessert/index.html");
			// 			}
			// 		})
			// 		.catch(error => {
			// 		console.log(error);
			// 		warning("執行失敗");
			// 		reject(error);
			// 	});
			// });
			window.location.href = registerService.googleLogin();
		},
		updateSession(memberSession) {
			this.memberSession = memberSession;
			Object.assign(this.$data, memberSession);
		},
		passwordVision(isMouseDown){
			// 切換密碼可視性
			if (isMouseDown) {
				this.passwordType = 'text';
			} else {
				this.passwordType = 'password';
			}
		},
		toggleAgree(){
			this.agreePolicy = !this.agreePolicy;
		},
	},
	mounted() {
		this.loadMemberSession();
	}
}

</script>