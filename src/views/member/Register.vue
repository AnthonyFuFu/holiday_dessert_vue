<template>
	<Header />

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
						<input type="text" placeholder="請輸入姓名" maxlength="30">
					</div>
					<div class="phone-block">
						<div>電話</div>
						<input type="tel" placeholder="請輸入電話號碼" maxlength="20">
					</div>

					<div class="email-block">
						<div>帳號</div>
						<input type="email" placeholder="請輸入Email帳號" maxlength="30" autocomplete="username">
					</div>
					<div class="pwd-block">
						<div>密碼</div>
						<input type="password" placeholder="請輸入密碼" maxlength="25" autocomplete="current-password">
						<span class="material-icons vision">visibility_off</span>
					</div>
					<div class="agree-block">
						<input type="checkbox" id="agree">
						<span for="agree"></span>
						<label for="agree">開始使用本服務或註冊前，平台用戶應確保其已仔細參閱並同意<a href="./policy"
								class="gold">隱私權政策</a>以及<a href="./terms" class="gold">使用者條款</a></label>
					</div>
					<div class="register-submit">註冊</div>
				</div>
				<div class="horizon"></div>or<div class="horizon"></div>
				<div>
					<div class="circle-container">
						<a href="/front/member/FBLogin"><img src="/images/FB-logo.svg" alt="FB-logo"></a>
					</div>
					<div class="circle-container">
						<a href="/front/member/googleLogin"><img src="/images/google-logo.svg" alt="google-logo"></a>
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
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import '@/css/login.css'
import Header from '@/components/Header.vue'

export default {
	name: 'register', // 使用多單詞名稱以符合 vue/multi-word-component-names
	components: {
		Header
	}
}

</script>