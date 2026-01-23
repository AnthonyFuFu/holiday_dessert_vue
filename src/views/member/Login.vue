<template>
	<Header />

	<section class="banner-box">
		<img class="banner-login" src="/images/banner-login.jpg" alt="banner">
	</section>

	<main class="main">
		<section class="login-section">
			<form id="login" class="login-area">
				<div>登入</div>
				<div class="login-input">
					<div class="email-block">
						<div>帳號</div>
						<input v-model="memEmail" type="email" placeholder="請輸入Email帳號" maxlength="30"
							autocomplete="username">
					</div>
					<div class="pwd-block">
						<div>密碼</div>
						<input v-model="memPassword" :type="passwordType" placeholder="請輸入密碼" maxlength="25"
							autocomplete="current-password">
						<span class="material-icons vision" @mousedown="passwordVision(true)"
							@mouseup="passwordVision(false)" @mouseleave="passwordVision(false)">visibility_off</span>
					</div>
					<div class="remember-block">
						<input v-model="rememberMe" type="checkbox" id="remember-me">
						<span for="remember-me" @click="toggleRememberMe"></span>
						<label for="remember-me">保持登入狀態</label>
					</div>
					<div>
						<span><a href="./forget-password">忘記密碼？</a></span>
						<span class="separator"></span>
						<span><a href="./register">前往註冊<span
									class="material-symbols-outlined">arrow_circle_right</span></a></span>
					</div>
					<div class="login-submit" @click="login">登入</div>
				</div>
				<div class="horizon"></div>or<div class="horizon"></div>
				<div>
					<div class="circle-container">
						<a href="/front/member/FBLogin"><img src="/images/FB-logo.svg" alt="FB-logo"></a>
					</div>
					<div class="circle-container">
						<a href="/front/member/googleLogin" @click.prevent="googleLogin"><img
								src="/images/google-logo.svg" alt="google-logo"></a>
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
import { indexService } from '@/service/IndexService'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import '@/css/login.css'
import Header from '@/components/Header.vue'

import { getSession, setSession, removeSession } from '@/utils/storage';

export default {
	name: 'login', // 使用多單詞名稱以符合 vue/multi-word-component-names
	components: {
		Header
	},
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
			rememberMe: false
		};
	},
	methods: {
		login() {
			axios.post(indexService.login(), {
				memEmail: this.memEmail,
				memPassword: this.memPassword
			})
				.then(response => {
					if (response.data.STATUS == "N") {
						this.warning(response.data.MSG);
					} else if (this.$route.path.includes("/member/verification")) {
						this.$router.push("/index");
					} else {
						var memberSession = response.data.memberSession;
						localStorage.setItem('memberSession', JSON.stringify(memberSession));
						this.updateSession(memberSession);
						this.$router.push("/index");
					}
				})
				.catch(error => {
					console.log(error);
					this.warning("執行失敗");
				});
		},
		loadMemberSession() {
			const memberSession = getSession('memberSession');
			if (memberSession) {
				this.updateSession(memberSession);
			}
		},
		async googleLogin() {
			try {
				const response = await axios.post(indexService.googleLogin());
				if (response.data.STATUS === "N") {
					return { status: "N", memberSession: '' };
				} else if (response.data.STATUS === "GLN") {
					return { status: "GLN", memberSession: '' };
				} else {
					const memberSession = response.data.memberSession;
					setSession('memberSession', memberSession);
					this.updateSession(memberSession);
					window.location.href = "/index";
					return { status: "GLY", memberSession: memberSession };
				}
			} catch (error) {
				console.error(error);
				this.warning("執行失敗");
				throw error; // 抛出錯誤以便上層捕獲
			}
		},
		updateSession(memberSession) {
			this.memberSession = memberSession;
			Object.assign(this.$data, memberSession);
		},
		passwordVision(isMouseDown) {
			// 切換密碼可視性
			if (isMouseDown) {
				this.passwordType = 'text';
			} else {
				this.passwordType = 'password';
			}
		},
		toggleRememberMe() {
			this.rememberMe = !this.rememberMe;
		},
		warning(message) {
			swal({
				title: message,
				type: "warning",
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "確定",
				closeOnConfirm: false
			});
		}
	},
	mounted() {
		this.loadMemberSession();
	}
}
</script>